-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Hackathon2203
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actor`
--

DROP TABLE IF EXISTS `actor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `picture` varchar(500) DEFAULT NULL,
  `skills` json DEFAULT NULL,
  `mail` varchar(255) NOT NULL,
  `jobs` varchar(45) DEFAULT NULL,
  `types` enum('client','collaborateur','prestataire externe','intervenant') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actor`
--

LOCK TABLES `actor` WRITE;
/*!40000 ALTER TABLE `actor` DISABLE KEYS */;
INSERT INTO `actor` VALUES (1,'Martin','Navarro','https://i.skyrock.net/2804/48552804/pics/3118069137_1_3_wiAt1jYx.jpg','[\"React\"]','martin.navarro@gmail.com','Développeur','collaborateur'),(2,'Alain','Provist','https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?k=20&m=1335941248&s=612x612&w=0&h=EFbntRuzPuxNx_HJ9l8ckhWvT-u5TPJFFxa7NwA86NU=','[\"PHP\"]','alain.provist@outlook.com','Développeur','intervenant'),(3,'Anna','Tomie','https://media.istockphoto.com/photos/cheerful-indian-girl-standing-at-home-office-looking-at-camera-picture-id1198252595?k=20&m=1198252595&s=612x612&w=0&h=Mo_4eEFU1NigTbGlxE8syr9heoDRkypO8Ui7MLitgUU=','[\"Python\"]','anna.tomier@hotmail.com','Data Analyst','intervenant'),(4,'Lara','Touille','https://media.istockphoto.com/photos/successful-businesswoman-picture-id1297832789?k=20&m=1297832789&s=612x612&w=0&h=hG6JyfB43-ho4kJANyvh1nveeitIV3iulQCbB_hWVds=','[\"Javascripté\"]','lara.touille@gmail.com','DevOps','collaborateur'),(5,'Lucie','Fer','https://media.istockphoto.com/photos/positive-woman-video-calling-using-laptop-at-home-picture-id1333405308?k=20&m=1333405308&s=612x612&w=0&h=dVMykfJjxolA8Pu0-narX694yHAWSZyZerKvvI6XfCA=','[\"Bash\"]','lucie.fer@outlook.com','DevOps','client'),(6,'Paul','Ochon','https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=','[\"Python\"]','paul.ochon@hotmail.com','Data Analyst','prestataire externe'),(7,'Pierre ','Kiroul','https://media.istockphoto.com/photos/portrait-of-a-happy-confident-young-african-american-businessman-picture-id1178152960?k=20&m=1178152960&s=612x612&w=0&h=qiGr0EATIF6RtYOPh32QcYj2z49n5Cgq8ZfM62m8FRc=','[\"React\"]','pierre.kiroul@gmail.com','Développeur','prestataire externe');
/*!40000 ALTER TABLE `actor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inProject` tinyint NOT NULL DEFAULT '0',
  `name` varchar(65) DEFAULT NULL,
  `clientName` varchar(65) DEFAULT NULL,
  `acteur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_projet_acteur_idx` (`acteur_id`),
  CONSTRAINT `fk_projet_acteur` FOREIGN KEY (`acteur_id`) REFERENCES `actor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (2,0,'Apside','Adeo',1),(3,0,'Apside','B for you',2),(4,1,'Apside','Decathlon',3),(5,1,'Apside','Amazon Web Service (AWS)',4),(6,0,'Sopra Steria','Access it',5),(7,1,'Apside','Edf',6);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-30  9:56:53
