-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2022 at 05:06 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spotify`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_artist`
--

CREATE TABLE `add_artist` (
  `id` int(11) NOT NULL,
  `aritst_name` varchar(10) NOT NULL,
  `DOB` varchar(100) NOT NULL,
  `bio` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `add_artist`
--

INSERT INTO `add_artist` (`id`, `aritst_name`, `DOB`, `bio`) VALUES
(11, 'aaaaaaaa', '2022-07-20', 'a'),
(12, 'aaaaaaaa', '2022-07-06', 'asdsds');

-- --------------------------------------------------------

--
-- Table structure for table `new_song`
--

CREATE TABLE `new_song` (
  `id` int(11) NOT NULL,
  `artwork` varchar(200) NOT NULL,
  `song_name` varchar(200) NOT NULL,
  `date_released` date NOT NULL,
  `artists` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_song`
--

INSERT INTO `new_song` (`id`, `artwork`, `song_name`, `date_released`, `artists`) VALUES
(5, 'asd', '2022-07-12', '0000-00-00', 'Disabled select1'),
(6, 'b', '2022-07-20', '0000-00-00', 'Disabled select1'),
(7, 'ggggg', '2022-07-20', '0000-00-00', 'Disabled select1'),
(8, 'a', 'a', '2022-07-06', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_artist`
--
ALTER TABLE `add_artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_song`
--
ALTER TABLE `new_song`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_artist`
--
ALTER TABLE `add_artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `new_song`
--
ALTER TABLE `new_song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
