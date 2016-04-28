-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2016 at 08:04 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `99es`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_two_field_category`
--

DROP TABLE IF EXISTS `app_two_field_category`;
CREATE TABLE IF NOT EXISTS `app_two_field_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_two_field_subcategory`
--

DROP TABLE IF EXISTS `app_two_field_subcategory`;
CREATE TABLE IF NOT EXISTS `app_two_field_subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `description` varchar(150) NOT NULL,
  `bundle` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idx` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='seeded data';

-- --------------------------------------------------------

--
-- Table structure for table `facility`
--

DROP TABLE IF EXISTS `facility`;
CREATE TABLE IF NOT EXISTS `facility` (
  `fid` int(11) NOT NULL COMMENT 'facility id',
  `fname` varchar(150) NOT NULL COMMENT 'facility name',
  `pid` int(11) NOT NULL COMMENT 'practice id',
  PRIMARY KEY (`fid`),
  KEY `pid` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='pid is fk ok of practice-pid';

-- --------------------------------------------------------

--
-- Table structure for table `facility_role`
--

DROP TABLE IF EXISTS `facility_role`;
CREATE TABLE IF NOT EXISTS `facility_role` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `rname` varchar(150) NOT NULL,
  `pid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`rid`),
  KEY `fk_idx` (`pid`),
  KEY `fk_idx1` (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
CREATE TABLE IF NOT EXISTS `link` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `bundle` varchar(250) NOT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `menu` varchar(150) NOT NULL,
  `bundle` varchar(150) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='seeded data table, common to all ';

-- --------------------------------------------------------

--
-- Table structure for table `menu_association`
--

DROP TABLE IF EXISTS `menu_association`;
CREATE TABLE IF NOT EXISTS `menu_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `menuassociation_idx` (`parent_id`),
  KEY `child_idx` (`child_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='practice and facility level menu association';

-- --------------------------------------------------------

--
-- Table structure for table `menu_link_association`
--

DROP TABLE IF EXISTS `menu_link_association`;
CREATE TABLE IF NOT EXISTS `menu_link_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `link_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `linkfk_idx` (`link_id`),
  KEY `menufk_idx` (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
CREATE TABLE IF NOT EXISTS `permission` (
  `perm_id` int(11) NOT NULL AUTO_INCREMENT,
  `perm_name` varchar(150) NOT NULL,
  `perm_code` varchar(150) NOT NULL COMMENT 'this code used in code level ',
  PRIMARY KEY (`perm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='seeded data table common to all';

-- --------------------------------------------------------

--
-- Table structure for table `practice`
--

DROP TABLE IF EXISTS `practice`;
CREATE TABLE IF NOT EXISTS `practice` (
  `pid` int(11) NOT NULL COMMENT 'practice id',
  `pname` varchar(150) NOT NULL COMMENT 'practice name',
  PRIMARY KEY (`pid`),
  UNIQUE KEY `pname` (`pname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='this is the starting table for the cloud based solutions';

-- --------------------------------------------------------

--
-- Table structure for table `practice_role`
--

DROP TABLE IF EXISTS `practice_role`;
CREATE TABLE IF NOT EXISTS `practice_role` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `rname` varchar(150) DEFAULT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='PRACTICE BASED ROLES. THIS TABLE DEFINES THE TOPLEVEL ROLES  IN A PRACTICE';

-- --------------------------------------------------------

--
-- Table structure for table `role_menu_association`
--

DROP TABLE IF EXISTS `role_menu_association`;
CREATE TABLE IF NOT EXISTS `role_menu_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `task_perm_association`
--

DROP TABLE IF EXISTS `task_perm_association`;
CREATE TABLE IF NOT EXISTS `task_perm_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(11) NOT NULL,
  `perm_id` int(11) NOT NULL,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `taskper_idx` (`tid`),
  KEY `permisionlink_idx` (`perm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `two_field_category`
--

DROP TABLE IF EXISTS `two_field_category`;
CREATE TABLE IF NOT EXISTS `two_field_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(150) NOT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `two_field_category`
--

INSERT INTO `two_field_category` (`id`, `description`, `pid`) VALUES
(1000, 'works', 1),
(1001, 'Expertlevel', 1);

-- --------------------------------------------------------

--
-- Table structure for table `two_field_subcategory`
--

DROP TABLE IF EXISTS `two_field_subcategory`;
CREATE TABLE IF NOT EXISTS `two_field_subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `description` varchar(150) NOT NULL,
  `bundle` varchar(150) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idx` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2002 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `two_field_subcategory`
--

INSERT INTO `two_field_subcategory` (`id`, `category_id`, `description`, `bundle`, `status`) VALUES
(1000, 1000, 'plumber', '', 1),
(1002, 1000, 'electrician', '', 1),
(2001, 1001, 'beginer', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(150) NOT NULL,
  `password` varchar(30) NOT NULL,
  `pid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_two_field_subcategory`
--
ALTER TABLE `app_two_field_subcategory`
  ADD CONSTRAINT `fk` FOREIGN KEY (`category_id`) REFERENCES `app_two_field_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `facility`
--
ALTER TABLE `facility`
  ADD CONSTRAINT `facility_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `practice` (`pid`);

--
-- Constraints for table `facility_role`
--
ALTER TABLE `facility_role`
  ADD CONSTRAINT `facility_role_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `practice` (`pid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `facility_role_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `facility` (`fid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `menu_association`
--
ALTER TABLE `menu_association`
  ADD CONSTRAINT `child` FOREIGN KEY (`child_id`) REFERENCES `menu` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `parent` FOREIGN KEY (`parent_id`) REFERENCES `menu` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu_link_association`
--
ALTER TABLE `menu_link_association`
  ADD CONSTRAINT `linkfk` FOREIGN KEY (`link_id`) REFERENCES `link` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menufk` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `task_perm_association`
--
ALTER TABLE `task_perm_association`
  ADD CONSTRAINT `permisionlink` FOREIGN KEY (`perm_id`) REFERENCES `permission` (`perm_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `taskper` FOREIGN KEY (`tid`) REFERENCES `task` (`tid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `two_field_subcategory`
--
ALTER TABLE `two_field_subcategory`
  ADD CONSTRAINT `app two field category link` FOREIGN KEY (`category_id`) REFERENCES `two_field_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
