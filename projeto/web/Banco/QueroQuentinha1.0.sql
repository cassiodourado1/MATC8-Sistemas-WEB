CREATE DATABASE  IF NOT EXISTS `quero_quentinha` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quero_quentinha`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quero_quentinha
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(25) NOT NULL,
  `cpf` varchar(13) NOT NULL,
  `sobrenome` varchar(25) NOT NULL,
  `telefone` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `endereco` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `endereco` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `latitude` varchar(45) NOT NULL,
  `longitude` varchar(45) NOT NULL,
  PRIMARY KEY (`id_endereco`,`cep`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (5,'Avenida Jorge Amado','Imbuí','2','Salvador','41720040','atras do posto','-12.9652043','-38.43018039999998');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrega`
--

DROP TABLE IF EXISTS `entrega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entrega` (
  `id_entrega` int(11) NOT NULL AUTO_INCREMENT,
  `preco_entrega` double NOT NULL,
  `fornecedor` int(11) NOT NULL,
  `endereco` int(11) NOT NULL,
  PRIMARY KEY (`id_entrega`),
  KEY `fornecedor` (`fornecedor`),
  KEY `endereco` (`endereco`),
  CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`fornecedor`) REFERENCES `fornecedor` (`id_fornecedor`),
  CONSTRAINT `entrega_ibfk_2` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`id_endereco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrega`
--

LOCK TABLES `entrega` WRITE;
/*!40000 ALTER TABLE `entrega` DISABLE KEYS */;
/*!40000 ALTER TABLE `entrega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fornecedor` (
  `id_fornecedor` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(25) NOT NULL,
  `telefone` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `endereco` int(11) NOT NULL,
  `cpfcnpj` varchar(13) NOT NULL,
  `site` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_fornecedor`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (11,'O Silva Bar e Restaurante','(71) 3362-8903 ','osilvabar@gmail.com',1,'0330583500014','www.osilvabar.com.br');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_quentinha`
--

DROP TABLE IF EXISTS `lista_quentinha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_quentinha` (
  `id_lista_quentinha` int(11) NOT NULL AUTO_INCREMENT,
  `pedido` int(11) NOT NULL,
  `quentinha` int(11) NOT NULL,
  PRIMARY KEY (`id_lista_quentinha`),
  KEY `pedido` (`pedido`),
  KEY `quentinha` (`quentinha`),
  CONSTRAINT `lista_quentinha_ibfk_1` FOREIGN KEY (`pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `lista_quentinha_ibfk_2` FOREIGN KEY (`quentinha`) REFERENCES `quentinha` (`id_quentinha`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_quentinha`
--

LOCK TABLES `lista_quentinha` WRITE;
/*!40000 ALTER TABLE `lista_quentinha` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista_quentinha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `senha` varchar(255) NOT NULL,
  `situacao` char(1) NOT NULL,
  `cpfcnpj` varchar(25) NOT NULL,
  PRIMARY KEY (`id_login`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (19,'e10adc3949ba59abbe56e057f20f883e','A','03305835000148');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` int(11) NOT NULL,
  `fornecedor` int(11) NOT NULL,
  `lista_quentinhas` int(11) NOT NULL,
  `quantidade_quentinha` int(11) NOT NULL,
  `endereco_entrega` int(11) NOT NULL,
  `hora_entrega` varchar(25) DEFAULT NULL,
  `status_pedido` varchar(50) NOT NULL,
  `valor_total` double NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `cliente` (`cliente`),
  KEY `fornecedor` (`fornecedor`),
  KEY `endereco_entrega` (`endereco_entrega`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`id_cliente`),
  CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`fornecedor`) REFERENCES `fornecedor` (`id_fornecedor`),
  CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`endereco_entrega`) REFERENCES `endereco` (`id_endereco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quentinha`
--

DROP TABLE IF EXISTS `quentinha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quentinha` (
  `id_quentinha` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `aconpanhamentos` varchar(255) NOT NULL,
  `fornecedor` int(11) NOT NULL,
  `preco` double NOT NULL,
  PRIMARY KEY (`id_quentinha`),
  KEY `fornecedor` (`fornecedor`),
  CONSTRAINT `quentinha_ibfk_1` FOREIGN KEY (`fornecedor`) REFERENCES `fornecedor` (`id_fornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quentinha`
--

LOCK TABLES `quentinha` WRITE;
/*!40000 ALTER TABLE `quentinha` DISABLE KEYS */;
/*!40000 ALTER TABLE `quentinha` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-06  0:00:05
