-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: blume_capel
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `spin1`
--

DROP TABLE IF EXISTS `spin1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin1` (
  `id` bigint NOT NULL,
  `m_a` double NOT NULL,
  `m_b` double NOT NULL,
  `mag_staggered` double NOT NULL,
  `mag_total` double NOT NULL,
  `temperatura` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin1`
--

LOCK TABLES `spin1` WRITE;
/*!40000 ALTER TABLE `spin1` DISABLE KEYS */;
INSERT INTO `spin1` VALUES (1,1,2,1,3,0),(2,1,2,1,3,1),(3,1,2,1,3,2),(4,1,2,1,3,3),(5,1,2,1,3,4),(6,1,1.99999999,0.99999999,2.99999999,5),(7,1,1.99999981,0.99999981,2.9999998100000003,6),(8,1,1.99999817,0.99999817,2.99999817,7),(9,1,1.99998982,0.99998982,2.99998982,8),(10,1,1.99996114,0.99996114,2.99996114,9),(11,0.99999999,1.99988623,0.99988624,2.99988622,10),(12,0.99999996,1.99972552,0.99972556,2.99972548,11),(13,0.99999984,1.99942747,0.99942763,2.99942731,12),(14,0.99999943,1.99893244,0.99893301,2.99893187,13),(15,0.99999832,1.99817746,0.99817914,2.99817578,14),(16,0.99999573,1.99710071,0.99710498,2.99709644,15),(17,0.9999903,1.99564512,0.99565482,2.99563542,16),(18,0.99997995,1.99376073,0.99378078,2.99374068,17),(19,0.99996164,1.99140597,0.99144433,2.99136761,18),(20,0.99993126,1.98854807,0.98861681,2.98847933,19),(21,0.99988345,1.98516272,0.98527927,2.98504617,20),(22,0.99981156,1.98123334,0.98142178,2.9810449,21),(23,0.99970757,1.97675008,0.97704251,2.97645765,22),(24,0.99956212,1.9717087,0.97214658,2.97127082,23),(25,0.99936448,1.96610945,0.96674497,2.96547393,24),(26,0.99910271,1.95995604,0.96085333,2.95905875,25),(27,0.99876365,1.95325465,0.954491,2.9520183,26),(28,0.99833313,1.94601307,0.94767994,2.9443462,27),(29,0.997796,1.93823999,0.94044399,2.93603599,28),(30,0.99713637,1.92994436,0.93280799,2.92708073,29),(31,0.99633766,1.92113493,0.92479727,2.91747259,30),(32,0.99538276,1.91181977,0.91643701,2.90720253,31),(33,0.99425418,1.90200601,0.90775183,2.89626019,32),(34,0.99293414,1.89169957,0.8987654300000001,2.88463371,33),(35,0.99140471,1.880905,0.8895002900000001,2.87230971,34),(36,0.98964783,1.86962529,0.8799774600000001,2.85927312,35),(37,0.98764545,1.85786188,0.8702164299999999,2.84550733,36),(38,0.98537958,1.8456145,0.8602349199999999,2.83099408,37),(39,0.98283228,1.83288121,0.85004893,2.8157134900000003,38),(40,0.97998576,1.81965836,0.8396726,2.79964412,39),(41,0.9768223,1.80594057,0.8291182699999999,2.78276287,40),(42,0.97332432,1.79172078,0.8183964599999999,2.7650451,41),(43,0.96947433,1.77699018,0.80751585,2.74646451,42),(44,0.96525487,1.76173827,0.7964834,2.72699314,43),(45,0.96064849,1.74595282,0.7853043300000001,2.70660131,44),(46,0.95563767,1.72961987,0.7739822000000001,2.6852575400000003,45),(47,0.95020477,1.71272365,0.76251888,2.66292842,46),(48,0.94433189,1.69524661,0.7509147200000001,2.6395785,47),(49,0.93800082,1.67716925,0.73916843,2.61517007,48),(50,0.93119289,1.65847012,0.72727723,2.58966301,49),(51,0.92388885,1.63912566,0.71523681,2.56301451,50),(52,0.91606871,1.61911004,0.70304133,2.53517875,51),(53,0.9077116,1.59839502,0.6906834200000002,2.50610662,52),(54,0.89879552,1.57694966,0.67815414,2.47574518,53),(55,0.88929719,1.55474016,0.66544297,2.44403735,54),(56,0.87919176,1.53172941,0.6525376500000001,2.41092117,55),(57,0.8684525,1.50787669,0.6394241900000001,2.37632919,56),(58,0.85705054,1.48313716,0.62608662,2.3401877,57),(59,0.8449544,1.45746131,0.61250691,2.30241571,58),(60,0.83212955,1.43079424,0.59866469,2.26292379,59),(61,0.81853786,1.40307483,0.58453697,2.22161269,60),(62,0.80413693,1.37423472,0.57009779,2.17837165,61),(63,0.78887924,1.34419701,0.55531777,2.13307625,62),(64,0.77271114,1.31287463,0.5401634900000001,2.08558577,63),(65,0.75557161,1.28016839,0.5245967800000001,2.03574,64),(66,0.73739057,1.24596432,0.5085737499999999,1.98335489,65),(67,0.71808684,1.21013039,0.49204355,1.92821723,66),(68,0.69756539,1.17251206,0.4749466700000001,1.87007745,67),(69,0.67571367,1.1329264,0.4572127299999999,1.80864007,68),(70,0.65239662,1.09115405,0.4387574300000001,1.74355067,69),(71,0.62744969,1.04692793,0.4194782400000001,1.67437762,70),(72,0.60066882,0.99991704,0.39924822,1.60058586,71),(73,0.57179556,0.9497023,0.37790674,1.52149786,72),(74,0.54049401,0.89573924,0.3552452300000001,1.43623325,73),(75,0.50631351,0.83729742,0.33098390999999994,1.34361093,74),(76,0.46862421,0.77335578,0.30473157000000006,1.24197999,75),(77,0.42649676,0.70240717,0.27591041,1.12890393,76),(78,0.37845197,0.6220512,0.24359923,1.00050317,77),(79,0.32185099,0.52800167,0.20615068,0.84985266,78),(80,0.25097065,0.41095169,0.15998103999999996,0.66192234,79),(81,0.14635892,0.23921924,0.09286032,0.38557816,80),(82,0,0,0,0,81);
/*!40000 ALTER TABLE `spin1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spin1_seq`
--

DROP TABLE IF EXISTS `spin1_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin1_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin1_seq`
--

LOCK TABLES `spin1_seq` WRITE;
/*!40000 ALTER TABLE `spin1_seq` DISABLE KEYS */;
INSERT INTO `spin1_seq` VALUES (151);
/*!40000 ALTER TABLE `spin1_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spin2`
--

DROP TABLE IF EXISTS `spin2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin2` (
  `id` bigint NOT NULL,
  `m_a` double NOT NULL,
  `m_b` double NOT NULL,
  `mag_staggered` double NOT NULL,
  `mag_total` double NOT NULL,
  `temperatura` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin2`
--

LOCK TABLES `spin2` WRITE;
/*!40000 ALTER TABLE `spin2` DISABLE KEYS */;
INSERT INTO `spin2` VALUES (1,1,4,3,5,0),(2,1,4,3,5,1),(3,1,4,3,5,2),(4,1,4,3,5,3),(5,1,4,3,5,4),(6,1,3.99999999,2.99999999,4.99999999,5),(7,1,3.99999981,2.99999981,4.99999981,6),(8,1,3.99999817,2.99999817,4.99999817,7),(9,1,3.99998982,2.99998982,4.99998982,8),(10,1,3.99996114,2.99996114,4.99996114,9),(11,1,3.99988623,2.99988623,4.99988623,10),(12,1,3.99972552,2.99972552,4.99972552,11),(13,1,3.99942747,2.99942747,4.9994274700000005,12),(14,1,3.99893244,2.99893244,4.99893244,13),(15,1,3.99817747,2.99817747,4.99817747,14),(16,1,3.99710078,2.99710078,4.99710078,15),(17,1,3.99564532,2.99564532,4.99564532,16),(18,1,3.99376127,2.99376127,4.99376127,17),(19,1,3.9914073,2.9914073,4.9914073000000005,18),(20,1,3.98855105,2.98855105,4.98855105,19),(21,0.99999999,3.98516888,2.98516889,4.98516887,20),(22,0.99999998,3.98124522,2.98124524,4.9812452,21),(23,0.99999996,3.97677168,2.9767717200000003,4.97677164,22),(24,0.99999992,3.97174605,2.97174613,4.971745970000001,23),(25,0.99999982,3.96617129,2.96617147,4.96617111,24),(26,0.99999966,3.96005454,2.96005488,4.9600542,25),(27,0.99999936,3.95340631,2.95340695,4.95340567,26),(28,0.99999886,3.94623966,2.9462408,4.94623852,27),(29,0.99999804,3.93856957,2.93857153,4.93856761,28),(30,0.99999676,3.93041237,2.93041561,4.93040913,29),(31,0.99999481,3.92178529,2.92179048,4.921780099999999,30),(32,0.99999193,3.91270605,2.9127141200000004,4.91269798,31),(33,0.99998776,3.9031926,2.90320484,4.90318036,32),(34,0.99998188,3.89326281,2.89328093,4.89324469,33),(35,0.99997376,3.88293434,2.88296058,4.8829081,34),(36,0.99996275,3.87222445,2.8722617,4.8721872,35),(37,0.99994809,3.8611499,2.86120181,4.86109799,36),(38,0.99992887,3.84972685,2.84979798,4.84965572,37),(39,0.99990404,3.8379708,2.83806676,4.83787484,38),(40,0.99987243,3.82589655,2.82602412,4.82576898,39),(41,0.99983266,3.81351816,2.8136855,4.81335082,40),(42,0.99978322,3.80084893,2.80106571,4.80063215,41),(43,0.99972243,3.78790137,2.78817894,4.7876238,42),(44,0.99964843,3.77468724,2.77503881,4.77433567,43),(45,0.99955921,3.76121749,2.76165828,4.7607767,44),(46,0.99945258,3.74750232,2.74804974,4.7469549,45),(47,0.99932617,3.73355116,2.7342249900000004,4.73287733,46),(48,0.99917748,3.71937266,2.72019518,4.71855014,47),(49,0.99900383,3.70497474,2.70597091,4.70397857,48),(50,0.99880241,3.6903646,2.69156219,4.68916701,49),(51,0.99857026,3.67554869,2.67697843,4.67411895,50),(52,0.99830429,3.66053277,2.66222848,4.65883706,51),(53,0.99800127,3.64532194,2.64732067,4.64332321,52),(54,0.99765788,3.6299206,2.63226272,4.62757848,53),(55,0.99727068,3.6143325,2.61706182,4.61160318,54),(56,0.99683613,3.59856077,2.60172464,4.5953969,55),(57,0.99635063,3.58260793,2.5862573,4.57895856,56),(58,0.99581048,3.5664759,2.57066542,4.56228638,57),(59,0.99521191,3.55016602,2.55495411,4.54537793,58),(60,0.99455112,3.53367907,2.53912795,4.52823019,59),(61,0.99382423,3.5170153,2.52319107,4.51083953,60),(62,0.99302733,3.50017444,2.50714711,4.49320177,61),(63,0.9921565,3.48315573,2.49099923,4.47531223,62),(64,0.99120776,3.46595789,2.47475013,4.45716565,63),(65,0.99017712,3.44857922,2.4584021,4.43875634,64),(66,0.9890606,3.43101754,2.44195694,4.42007814,65),(67,0.98785418,3.41327024,2.42541606,4.40112442,66),(68,0.98655385,3.3953343,2.40878045,4.38188815,67),(69,0.98515559,3.3772063,2.3920507100000004,4.36236189,68),(70,0.98365539,3.3588824,2.37522701,4.34253779,69),(71,0.98204925,3.34035841,2.35830916,4.32240766,70),(72,0.98033315,3.32162975,2.3412966,4.3019629,71),(73,0.9785031,3.30269149,2.32418839,4.28119459,72),(74,0.97655509,3.28353835,2.30698326,4.26009344,73),(75,0.97448514,3.26416469,2.28967955,4.23864983,74),(76,0.97228925,3.24456454,2.27227529,4.21685379,75),(77,0.96996343,3.22473159,2.25476816,4.19469502,76),(78,0.96750369,3.2046592,2.23715551,4.17216289,77),(79,0.96490602,3.18434039,2.21943437,4.14924641,78),(80,0.9621664,3.16376785,2.20160145,4.12593425,79),(81,0.95928081,3.14293392,2.18365311,4.10221473,80),(82,0.9562452,3.12183063,2.16558543,4.07807583,81),(83,0.95305547,3.10044961,2.1473941400000003,4.05350508,82),(84,0.94970752,3.07878219,2.12907467,4.028489710000001,83),(85,0.94619718,3.05681931,2.11062213,4.00301649,84),(86,0.94252024,3.03455151,2.09203127,3.97707175,85),(87,0.93867242,3.01196898,2.07329656,3.9506414,86),(88,0.93464939,2.98906146,2.05441207,3.92371085,87),(89,0.93044672,2.96581829,2.03537157,3.89626501,88),(90,0.9260599,2.94222836,2.0161684600000003,3.86828826,89),(91,0.92148429,2.91828006,1.99679577,3.83976435,90),(92,0.91671516,2.89396131,1.97724615,3.81067647,91),(93,0.91174763,2.86925947,1.95751184,3.7810071,92),(94,0.90657667,2.84416135,1.93758468,3.75073802,93),(95,0.9011971,2.81865313,1.91745603,3.71985023,94),(96,0.89560354,2.79272036,1.89711682,3.6883239,95),(97,0.88979039,2.76634789,1.8765575,3.65613828,96),(98,0.88375185,2.73951979,1.85576794,3.62327164,97),(99,0.87748186,2.71221935,1.83473749,3.58970121,98),(100,0.87097405,2.68442895,1.8134549,3.555403,99),(101,0.86422178,2.65613003,1.79190825,3.52035181,100),(102,0.85721804,2.62730298,1.77008494,3.48452102,101),(103,0.84995546,2.59792706,1.7479716,3.44788252,102),(104,0.84242623,2.56798028,1.72555405,3.41040651,103),(105,0.83462209,2.53743929,1.7028172,3.37206138,104),(106,0.82653426,2.50627925,1.67974499,3.33281351,105),(107,0.81815337,2.47447367,1.6563203,3.29262704,106),(108,0.80946944,2.44199423,1.6325247900000002,3.25146367,107),(109,0.80047177,2.40881059,1.6083388199999995,3.20928236,108),(110,0.79114886,2.37489016,1.5837413000000002,3.16603902,109),(111,0.78148833,2.34019786,1.55870953,3.12168619,110),(112,0.77147679,2.30469579,1.533219,3.07617258,111),(113,0.76109973,2.26834289,1.50724316,3.02944262,112),(114,0.75034138,2.23109456,1.4807531799999998,2.98143594,113),(115,0.73918452,2.19290214,1.4537176200000002,2.9320866600000004,114),(116,0.72761029,2.15371242,1.4261021300000003,2.88132271,115),(117,0.71559793,2.1134669,1.3978689700000002,2.82906483,116),(118,0.70312455,2.07210107,1.36897652,2.77522562,117),(119,0.69016472,2.02954343,1.33937871,2.71970815,118),(120,0.67669012,1.98571435,1.30902423,2.66240447,119),(121,0.662669,1.94052467,1.27785567,2.60319367,120),(122,0.64806556,1.89387397,1.24580841,2.54193953,121),(123,0.63283922,1.84564844,1.21280922,2.47848766,122),(124,0.6169436,1.79571815,1.17877455,2.41266175,123),(125,0.60032534,1.7439336,1.1436082600000002,2.34425894,124),(126,0.58292243,1.69012126,1.10719883,2.27304369,125),(127,0.56466218,1.63407765,1.06941547,2.19873983,126),(128,0.54545836,1.5755615,1.03010314,2.12101986,127),(129,0.52520739,1.51428294,0.98907555,2.03949033,128),(130,0.50378294,1.44988845,0.94610551,1.95367139,129),(131,0.48102821,1.3819391,0.90091089,1.86296731,130),(132,0.45674441,1.30987826,0.8531338500000001,1.76662267,131),(133,0.430673,1.2329816,0.8023086,1.6636546,132),(134,0.40246682,1.15027588,0.7478090599999999,1.5527427,133),(135,0.37164022,1.06039864,0.6887584200000001,1.43203886,134),(136,0.33747603,0.96133617,0.6238601400000001,1.2988122,135),(137,0.29883195,0.84987774,0.5510457900000001,1.14870969,136),(138,0.25366907,0.72028606,0.46661699,0.97395513,137),(139,0.19756677,0.56010607,0.3625393,0.75767284,138),(140,0.11556219,0.32711592,0.21155373,0.44267811,139),(141,0,0,0,0,140);
/*!40000 ALTER TABLE `spin2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spin2_seq`
--

DROP TABLE IF EXISTS `spin2_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin2_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin2_seq`
--

LOCK TABLES `spin2_seq` WRITE;
/*!40000 ALTER TABLE `spin2_seq` DISABLE KEYS */;
INSERT INTO `spin2_seq` VALUES (201);
/*!40000 ALTER TABLE `spin2_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spin3`
--

DROP TABLE IF EXISTS `spin3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin3` (
  `id` bigint NOT NULL,
  `m_a` double NOT NULL,
  `m_b` double NOT NULL,
  `mag_staggered` double NOT NULL,
  `mag_total` double NOT NULL,
  `temperatura` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin3`
--

LOCK TABLES `spin3` WRITE;
/*!40000 ALTER TABLE `spin3` DISABLE KEYS */;
INSERT INTO `spin3` VALUES (1,1,6,5,7,0),(2,1,6,5,7,1),(3,1,6,5,7,2),(4,1,6,5,7,3),(5,1,6,5,7,4),(6,1,5.99999999,4.99999999,6.99999999,5),(7,1,5.99999981,4.99999981,6.99999981,6),(8,1,5.99999817,4.99999817,6.99999817,7),(9,1,5.99998982,4.99998982,6.99998982,8),(10,1,5.99996114,4.99996114,6.99996114,9),(11,1,5.99988623,4.99988623,6.99988623,10),(12,1,5.99972552,4.99972552,6.99972552,11),(13,1,5.99942747,4.99942747,6.99942747,12),(14,1,5.99893244,4.99893244,6.99893244,13),(15,1,5.99817747,4.99817747,6.99817747,14),(16,1,5.99710078,4.99710078,6.99710078,15),(17,1,5.99564532,4.99564532,6.99564532,16),(18,1,5.99376127,4.99376127,6.99376127,17),(19,1,5.9914073,4.9914073,6.9914073,18),(20,1,5.98855105,4.98855105,6.98855105,19),(21,1,5.98516888,4.98516888,6.98516888,20),(22,1,5.98124522,4.98124522,6.98124522,21),(23,1,5.97677168,4.97677168,6.97677168,22),(24,1,5.97174606,4.97174606,6.97174606,23),(25,1,5.9661713,4.9661713,6.9661713,24),(26,1,5.96005457,4.96005457,6.96005457,25),(27,1,5.95340636,4.95340636,6.95340636,26),(28,1,5.94623976,4.94623976,6.94623976,27),(29,1,5.93856977,4.93856977,6.93856977,28),(30,1,5.93041273,4.93041273,6.93041273,29),(31,0.99999999,5.92178592,4.92178593,6.92178591,30),(32,0.99999999,5.91270711,4.91270712,6.9127071,31),(33,0.99999997,5.90319432,4.90319435,6.90319429,32),(34,0.99999995,5.89326554,4.89326559,6.89326549,33),(35,0.99999992,5.88293857,4.88293865,6.882938490000001,34),(36,0.99999987,5.87223086,4.87223099,6.87223073,35),(37,0.99999978,5.86115942,4.86115964,6.8611592,36),(38,0.99999965,5.84974071,4.84974106,6.84974036,37),(39,0.99999946,5.83799063,4.8379911700000005,6.83799009,38),(40,0.99999918,5.82592446,4.825925280000001,6.82592364,39),(41,0.99999878,5.81355683,4.813558049999999,6.81355561,40),(42,0.99999822,5.80090173,4.80090351,6.80089995,41),(43,0.99999745,5.78797253,4.787975080000001,6.78796998,42),(44,0.9999964,5.77478194,4.77478554,6.774778339999999,43),(45,0.99999499,5.76134206,4.761347069999999,6.76133705,44),(46,0.99999313,5.74766437,4.74767124,6.7476575,45),(47,0.9999907,5.73375979,4.73376909,6.733750489999999,46),(48,0.99998757,5.71963864,4.71965107,6.71962621,47),(49,0.99998357,5.70531072,4.70532715,6.70529429,48),(50,0.99997853,5.69078531,4.69080678,6.69076384,49),(51,0.99997223,5.67607115,4.67609892,6.67604338,50),(52,0.99996443,5.66117656,4.66121213,6.661140990000001,51),(53,0.99995485,5.64610934,4.64615449,6.64606419,52),(54,0.99994318,5.6308769,4.63093372,6.63082008,53),(55,0.99992909,5.61548619,4.6155571,6.615415280000001,54),(56,0.99991219,5.59994379,4.6000316,6.59985598,55),(57,0.99989205,5.58425587,4.58436382,6.58414792,56),(58,0.99986822,5.56842823,4.568560010000001,6.56829645,57),(59,0.9998402,5.55246633,4.55262613,6.552306529999999,58),(60,0.99980744,5.53637527,4.53656783,6.536182709999999,59),(61,0.99976934,5.52015983,4.52039049,6.51992917,60),(62,0.99972529,5.50382447,4.50409918,6.503549759999999,61),(63,0.99967461,5.48737334,4.48769873,6.487047950000001,62),(64,0.99961657,5.4708103,4.47119373,6.47042687,63),(65,0.99955041,5.45413892,4.45458851,6.45368933,64),(66,0.99947532,5.43736248,4.43788716,6.4368378,65),(67,0.99939047,5.42048401,4.42109354,6.41987448,66),(68,0.99929495,5.40350625,4.4042113,6.402801200000001,67),(69,0.99918783,5.38643172,4.38724389,6.38561955,68),(70,0.99906814,5.36926266,4.37019452,6.368330800000001,69),(71,0.99893486,5.35200109,4.35306623,6.35093595,70),(72,0.99878696,5.33464878,4.33586182,6.3334357400000005,71),(73,0.99862333,5.31720728,4.31858395,6.31583061,72),(74,0.99844287,5.29967791,4.30123504,6.29812078,73),(75,0.99824441,5.28206177,4.2838173600000005,6.28030618,74),(76,0.99802677,5.26435975,4.26633298,6.26238652,75),(77,0.99778874,5.24657255,4.24878381,6.24436129,76),(78,0.99752907,5.22870063,4.23117156,6.226229699999999,77),(79,0.99724649,5.21074428,4.21349779,6.20799077,78),(80,0.99693971,5.1927036,4.195763889999999,6.18964331,79),(81,0.99660742,5.17457849,4.17797107,6.17118591,80),(82,0.99624827,5.15636866,4.16012039,6.15261693,81),(83,0.99586092,5.13807367,4.14221275,6.13393459,82),(84,0.99544398,5.11969287,4.12424889,6.11513685,83),(85,0.99499606,5.10122548,4.10622942,6.09622154,84),(86,0.99451578,5.08267052,4.08815474,6.077186299999999,85),(87,0.9940017,5.06402687,4.07002517,6.05802857,86),(88,0.9934524,5.04529326,4.05184086,6.03874566,87),(89,0.99286645,5.02646824,4.03360179,6.01933469,88),(90,0.99224241,5.00755025,4.01530784,5.999792660000001,89),(91,0.99157881,4.98853755,3.99695874,5.98011636,90),(92,0.99087421,4.96942828,3.97855407,5.96030249,91),(93,0.99012714,4.95022046,3.96009332,5.9403476,92),(94,0.98933614,4.93091193,3.94157579,5.92024807,93),(95,0.98849973,4.91150044,3.92300071,5.90000017,94),(96,0.98761645,4.89198361,3.90436716,5.87960006,95),(97,0.98668482,4.87235892,3.8856741,5.85904374,96),(98,0.98570337,4.85262373,3.86692036,5.838327100000001,97),(99,0.98467063,4.83277531,3.84810468,5.81744594,98),(100,0.98358513,4.81281078,3.8292256500000006,5.79639591,99),(101,0.98244538,4.79272717,3.81028179,5.77517255,100),(102,0.98124992,4.77252138,3.79127146,5.7537713,101),(103,0.97999728,4.75219022,3.77219294,5.7321875,102),(104,0.97868598,4.73173038,3.7530444,5.71041636,103),(105,0.97731455,4.71113844,3.73382389,5.68845299,104),(106,0.97588152,4.69041088,3.71452936,5.6662924,105),(107,0.97438542,4.66954408,3.69515866,5.6439295,106),(108,0.97282478,4.6485343,3.67570952,5.62135908,107),(109,0.97119813,4.62737771,3.65617958,5.5985758400000005,108);
/*!40000 ALTER TABLE `spin3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spin3_seq`
--

DROP TABLE IF EXISTS `spin3_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spin3_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spin3_seq`
--

LOCK TABLES `spin3_seq` WRITE;
/*!40000 ALTER TABLE `spin3_seq` DISABLE KEYS */;
INSERT INTO `spin3_seq` VALUES (201);
/*!40000 ALTER TABLE `spin3_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spins`
--

DROP TABLE IF EXISTS `spins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spins` (
  `id` bigint NOT NULL,
  `valor_spin` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spins`
--

LOCK TABLES `spins` WRITE;
/*!40000 ALTER TABLE `spins` DISABLE KEYS */;
INSERT INTO `spins` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `spins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spins_seq`
--

DROP TABLE IF EXISTS `spins_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spins_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spins_seq`
--

LOCK TABLES `spins_seq` WRITE;
/*!40000 ALTER TABLE `spins_seq` DISABLE KEYS */;
INSERT INTO `spins_seq` VALUES (101);
/*!40000 ALTER TABLE `spins_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 22:06:49
