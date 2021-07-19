DROP TABLE IF EXISTS nodedb.people;
CREATE TABLE nodedb.people (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
);