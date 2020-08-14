-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2020 at 03:52 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atp2_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyers_orderlist`
--

CREATE TABLE `buyers_orderlist` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyers_orderlist`
--

INSERT INTO `buyers_orderlist` (`id`, `quantity`, `product_id`, `users_id`) VALUES
(1, 1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `buyers_wishlist`
--

CREATE TABLE `buyers_wishlist` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyers_wishlist`
--

INSERT INTO `buyers_wishlist` (`id`, `product_id`, `users_id`) VALUES
(1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `product_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `product_id`, `users_id`) VALUES
(1, 'Good', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_details` varchar(200) NOT NULL,
  `product_type` varchar(10) NOT NULL,
  `product_size` varchar(10) NOT NULL,
  `product_color` varchar(20) NOT NULL,
  `place_of_origin` varchar(20) NOT NULL,
  `brand_name` varchar(20) NOT NULL,
  `unit_price` float NOT NULL,
  `total_quantity` int(11) NOT NULL,
  `total_price` float NOT NULL,
  `url` varchar(50) NOT NULL,
  `section` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `product_name`, `product_details`, `product_type`, `product_size`, `product_color`, `place_of_origin`, `brand_name`, `unit_price`, `total_quantity`, `total_price`, `url`, `section`, `status`) VALUES
(1, 'Toshiba 16GB Pendrive', 'USB 3.0', 'Computer A', '1.5 Inch', 'White', 'Philippines', 'Toshiba', 850, 100, 85000, 'url', 'buy', 'delivered');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `info_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sell_requests`
--

CREATE TABLE `sell_requests` (
  `id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_details` varchar(200) NOT NULL,
  `product_type` varchar(10) NOT NULL,
  `product_size` varchar(10) NOT NULL,
  `product_color` varchar(20) NOT NULL,
  `place_of_origin` varchar(20) NOT NULL,
  `brand_name` varchar(20) NOT NULL,
  `unit_price` float NOT NULL,
  `total_quantity` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sell_requests`
--

INSERT INTO `sell_requests` (`id`, `product_name`, `product_details`, `product_type`, `product_size`, `product_color`, `place_of_origin`, `brand_name`, `unit_price`, `total_quantity`, `users_id`, `status`) VALUES
(1, 'Toshiba 16GB Pendrive', 'USB 3.0', 'Computer B', '1.5 Inch', 'White', 'Philippines', 'Toshiba', 850, 100, 3, '');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `transaction_num` varchar(30) NOT NULL,
  `paymentBy` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `product_id`, `transaction_num`, `paymentBy`) VALUES
(1, 1, 'asdwdAssad124', 'BKash');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `usertype` varchar(20) NOT NULL,
  `permission` int(11) NOT NULL,
  `info_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `usertype`, `permission`, `info_id`) VALUES
(1, 'admin', 'admin', 'admin', 1, 1),
(2, 'asif', 'asif', 'manager', 1, 2),
(3, 'abrar', 'abrar', 'seller', 1, 3),
(4, 'tanvir', 'tanvir', 'buyer', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users_info`
--

CREATE TABLE `users_info` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `loyalty` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_info`
--

INSERT INTO `users_info` (`id`, `fullname`, `address`, `phone`, `email`, `loyalty`) VALUES
(1, 'Md Asiqur Rahman Khan', 'Bashundhora R/A , C Bock', '01799089893', 'md.ashik7061@gmail.com', 100000),
(2, 'undefined', 'undefined', 'undefined', 'undefined', 0),
(3, 'undefined', 'undefined', 'undefined', 'undefined', 100000),
(4, 'undefined', 'undefined', 'undefined', 'undefined', 50000),
(5, 'asdasd', 'asdasdd', 'asdasd', 'fbashik0@gmila.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyers_orderlist`
--
ALTER TABLE `buyers_orderlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `buyers_wishlist`
--
ALTER TABLE `buyers_wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`),
  ADD KEY `info_id` (`info_id`);

--
-- Indexes for table `sell_requests`
--
ALTER TABLE `sell_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `info_id` (`info_id`);

--
-- Indexes for table `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyers_orderlist`
--
ALTER TABLE `buyers_orderlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `buyers_wishlist`
--
ALTER TABLE `buyers_wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sell_requests`
--
ALTER TABLE `sell_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users_info`
--
ALTER TABLE `users_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buyers_orderlist`
--
ALTER TABLE `buyers_orderlist`
  ADD CONSTRAINT `buyers_orderlist_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users_info` (`id`),
  ADD CONSTRAINT `buyers_orderlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`id`);

--
-- Constraints for table `buyers_wishlist`
--
ALTER TABLE `buyers_wishlist`
  ADD CONSTRAINT `buyers_wishlist_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users_info` (`id`),
  ADD CONSTRAINT `buyers_wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users_info` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`id`);

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`info_id`) REFERENCES `users_info` (`id`);

--
-- Constraints for table `sell_requests`
--
ALTER TABLE `sell_requests`
  ADD CONSTRAINT `sell_requests_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users_info` (`id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`info_id`) REFERENCES `users_info` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
