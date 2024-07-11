import { Box, Text, Pagination, rem, SimpleGrid } from "@mantine/core";
import classes from "./styles/page6.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page6() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

    const [activePage, setPage] = useState(1);

    const companies =[
        [
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/22.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/06/1.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/fulora.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/30.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/rocket.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/33.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/nutri.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/eslate.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/22.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/06/1.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/fulora.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/30.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/22.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/06/1.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/fulora.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/30.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/22.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/06/1.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/02/fulora.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/30.jpg?fit=264%2C95&ssl=1',
        ],

        [
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/7.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/11/Velammal-Education.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/35.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/10.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/7.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/11/Velammal-Education.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/35.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/10.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/7.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/11/Velammal-Education.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/35.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/10.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/7.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/11/Velammal-Education.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/35.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/10.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/7.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2022/11/Velammal-Education.png?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/35.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/10.jpg?fit=264%2C95&ssl=1',
        ],

        [
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/29.jpg?fit=264%2C95&ssl=1',
        ],

        [
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/26.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/34.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/36.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/37.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/34.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/36.jpg?fit=264%2C95&ssl=1',
            'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/10/37.jpg?fit=264%2C95&ssl=1',
        ]
            
    ];
    

    return (
        <Box className={classes.body} >
            <motion.div className={classes.wrapper} style={{y: backgroundY}}></motion.div>
            <motion.div ref={ref} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: '1 !important',                   
                padding: '6vh 3vw',
                margin: '0 auto',
                zIndex: 10,
                position: 'relative',
                y: textY
            }}>
                <Text c='white' fw={700} size='md' style={{
                    textAlign: 'center',
                    paddingBottom: '1vh'
                }}>OUR CLIENTS</Text>
                <Text size='xl' style={{
                    color: '#73bae3',
                    textAlign: 'center',
                    paddingBottom: '4vh'
                }}>THANKS TO OUR VALUABLE CLIENTS WHO MADE IT HAPPEN</Text>
                {
                    activePage > 0 &&
                    <SimpleGrid cols={{ sm: 1, lg: 4 }} spacing={'10vw'} verticalSpacing={'3vh'} style={{
                        marginBottom: '5vh'
                    }} >
                        {companies[activePage - 1].map((company, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ scale: 1 , opacity: 1, transition: { duration: 0.5, delay: index * 0.01 }}}
                                viewport={{ once: false }}
                            >
                                <Image key={index} src={company} alt="company" width={264} height={95} style={{
                                    height: rem('95px'),
                                    width: rem('264px'),
                                }} />
                            </motion.span>
                        ))}
                    </SimpleGrid>
                }
                <Pagination total={companies.length} value={activePage} onChange={setPage} mt="sm" />
            </motion.div>
        </Box>
    );
}
