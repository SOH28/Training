import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import crypto from 'crypto';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import { rateLimit } from 'express-rate-limit';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.development';
config({ path: envFile });

const app = express();
app.use(express.json());
app.use(cors());
app.set('trust proxy', '10.0.0.0/8');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: true,
	legacyHeaders: false,
})

app.use('/login', limiter)
app.use('/register', limiter)


function validateToken(req, res, next) {
    const token = req.headers['x-app-token'];
    const userToken = req.headers['u-app-token'];
    try {
        if ((token && token == process.env.AUTH_TOKEN) && (userToken && jwt.verify(userToken, process.env.USER_KEY))) {
            next();
        } else {
            res.status(403).json({ error: 'Forbidden' });
        }
    } catch(err) {
        console.log('Access Token Expired')
    }
}

//app.use(validateToken);

function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

const db_config = {
    connectionLimit: 10, // Connection pool limit
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const pool = mysql.createPool(db_config);

// Periodic ping to keep the connection alive
setInterval(() => {
    pool.query('SELECT 1', (err) => {
        if (err) {
            console.error('Error with periodic ping:', err);
        }
    });
}, 5000);

//MYSQL

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM user WHERE username = ? OR mail = ? AND password = ?";
    const values = [req.body.username, req.body.username, hashPassword(req.body.password)];
    pool.query(sql, values, (err, result) => {
        if (err) return res.json({state: false, reason: 'Encountered Error!'});
        if (result[0]) {
            //const token = jwt.sign({ username: req.body.username }, process.env.USER_KEY, { expiresIn: '30m' });
            return res.json({ state: true });
        } else 
            return res.json({state: false, reason: 'Username/Password Incorrect!'});
    });
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO user (username, mail, password, name) VALUES (?, ?, ?, ?)";
    const values = [req.body.username, req.body.email, hashPassword(req.body.password), req.body.name];
    pool.query(sql, values, (err, result) => {
        if (err) return res.json({state: false, reason: 'User already registered!'});
        return res.json({state: true});
    });
});

app.listen(3001, () => {
    console.log('Listening!');
});