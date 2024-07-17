CREATE TABLE IF NOT EXISTS `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(50) NOT NULL,
   	`mail` VARCHAR(255) NOT NULL,
	`password` TEXT DEFAULT NULL,
	`name` VARCHAR(255) NOT NULL,
	KEY `id` (`id`),
	PRIMARY KEY (`username`, `mail`),
	UNIQUE KEY `unique_mail` (`mail`),
	UNIQUE KEY `unique_username` (`username`)
);
