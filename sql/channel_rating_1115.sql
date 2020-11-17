-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-11-15 13:58:03
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mfee09_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `channel_rating`
--

CREATE TABLE `channel_rating` (
  `sid` int(11) NOT NULL,
  `reviewer_id` int(11) NOT NULL,
  `podcaster_id` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `channel_rating`
--

INSERT INTO `channel_rating` (`sid`, `reviewer_id`, `podcaster_id`, `score`) VALUES
(1, 1, 1, 5),
(2, 2, 1, 5),
(3, 3, 1, 5),
(4, 4, 1, 4),
(5, 5, 1, 5),
(6, 6, 1, 5),
(7, 7, 1, 5),
(8, 8, 1, 4),
(9, 9, 1, 5),
(10, 10, 1, 5),
(11, 1, 2, 5),
(12, 2, 2, 5),
(13, 3, 2, 5),
(14, 4, 2, 5),
(15, 5, 2, 4),
(16, 6, 2, 5),
(17, 7, 2, 5),
(18, 8, 2, 5),
(19, 9, 2, 4),
(20, 10, 2, 5),
(21, 1, 3, 3),
(22, 2, 3, 5),
(23, 3, 3, 4),
(24, 4, 3, 5),
(25, 5, 3, 5),
(26, 6, 3, 5),
(27, 7, 3, 5),
(28, 8, 3, 5),
(29, 9, 3, 4),
(30, 10, 3, 4),
(31, 1, 4, 5),
(32, 2, 4, 5),
(33, 3, 4, 4),
(34, 4, 4, 4),
(35, 5, 4, 4),
(36, 6, 4, 4),
(37, 7, 4, 4),
(38, 8, 4, 4),
(39, 9, 4, 4),
(40, 10, 4, 4),
(41, 1, 5, 5),
(42, 2, 5, 4),
(43, 3, 5, 4),
(44, 4, 5, 5),
(45, 5, 5, 4),
(46, 6, 5, 5),
(47, 7, 5, 5),
(48, 8, 5, 4),
(49, 9, 5, 4),
(50, 10, 5, 3),
(51, 1, 6, 4),
(52, 2, 6, 4),
(53, 3, 6, 5),
(54, 4, 6, 5),
(55, 5, 6, 5),
(56, 6, 6, 5),
(57, 7, 6, 4),
(58, 8, 6, 3),
(59, 9, 6, 5),
(60, 10, 6, 4),
(61, 1, 7, 4),
(62, 2, 7, 4),
(63, 3, 7, 4),
(64, 4, 7, 4),
(65, 5, 7, 5),
(66, 6, 7, 5),
(67, 7, 7, 5),
(68, 8, 7, 5),
(69, 9, 7, 4),
(70, 10, 7, 3),
(71, 1, 8, 5),
(72, 2, 8, 5),
(73, 3, 8, 5),
(74, 4, 8, 5),
(75, 5, 8, 5),
(76, 6, 8, 4),
(77, 7, 8, 4),
(78, 8, 8, 4),
(79, 9, 8, 5),
(80, 10, 8, 5),
(81, 1, 9, 5),
(82, 2, 9, 4),
(83, 3, 9, 5),
(84, 4, 9, 4),
(85, 5, 9, 5),
(86, 6, 9, 5),
(87, 7, 9, 4),
(88, 8, 9, 4),
(89, 9, 9, 3),
(90, 10, 9, 3),
(91, 1, 10, 5),
(92, 2, 10, 4),
(93, 3, 10, 3),
(94, 4, 10, 5),
(95, 5, 10, 4),
(96, 6, 10, 5),
(97, 7, 10, 4),
(98, 8, 10, 5),
(99, 9, 10, 4),
(100, 10, 10, 3),
(101, 1, 11, 3),
(102, 2, 11, 3),
(103, 3, 11, 2),
(104, 4, 11, 2),
(105, 5, 11, 1),
(106, 6, 11, 1),
(107, 7, 11, 5),
(108, 8, 11, 2),
(109, 9, 11, 4),
(110, 10, 11, 5),
(111, 1, 12, 3),
(112, 2, 12, 3),
(113, 3, 12, 5),
(114, 4, 12, 5),
(115, 5, 12, 3),
(116, 6, 12, 1),
(117, 7, 12, 1),
(118, 8, 12, 4),
(119, 9, 12, 3),
(120, 10, 12, 3),
(121, 1, 13, 1),
(122, 2, 13, 5),
(123, 3, 13, 4),
(124, 4, 13, 1),
(125, 5, 13, 3),
(126, 6, 13, 5),
(127, 7, 13, 4),
(128, 8, 13, 3),
(129, 9, 13, 5),
(130, 10, 13, 3),
(131, 1, 14, 3),
(132, 2, 14, 2),
(133, 3, 14, 5),
(134, 4, 14, 4),
(135, 5, 14, 4),
(136, 6, 14, 2),
(137, 7, 14, 3),
(138, 8, 14, 1),
(139, 9, 14, 3),
(140, 10, 14, 2),
(141, 1, 15, 4),
(142, 2, 15, 1),
(143, 3, 15, 4),
(144, 4, 15, 4),
(145, 5, 15, 5),
(146, 6, 15, 4),
(147, 7, 15, 3),
(148, 8, 15, 4),
(149, 9, 15, 2),
(150, 10, 15, 4),
(151, 1, 16, 1),
(152, 2, 16, 3),
(153, 3, 16, 4),
(154, 4, 16, 3),
(155, 5, 16, 4),
(156, 6, 16, 2),
(157, 7, 16, 3),
(158, 8, 16, 5),
(159, 9, 16, 1),
(160, 10, 16, 3),
(161, 1, 17, 4),
(162, 2, 17, 3),
(163, 3, 17, 2),
(164, 4, 17, 4),
(165, 5, 17, 5),
(166, 6, 17, 4),
(167, 7, 17, 4),
(168, 8, 17, 5),
(169, 9, 17, 4),
(170, 10, 17, 3),
(171, 1, 18, 5),
(172, 2, 18, 5),
(173, 3, 18, 5),
(174, 4, 18, 1),
(175, 5, 18, 2),
(176, 6, 18, 5),
(177, 7, 18, 1),
(178, 8, 18, 4),
(179, 9, 18, 4),
(180, 10, 18, 1),
(181, 1, 19, 1),
(182, 2, 19, 5),
(183, 3, 19, 1),
(184, 4, 19, 2),
(185, 5, 19, 1),
(186, 6, 19, 4),
(187, 7, 19, 5),
(188, 8, 19, 1),
(189, 9, 19, 2),
(190, 10, 19, 4),
(191, 1, 20, 2),
(192, 2, 20, 3),
(193, 3, 20, 2),
(194, 4, 20, 1),
(195, 5, 20, 5),
(196, 6, 20, 1),
(197, 7, 20, 3),
(198, 8, 20, 1),
(199, 9, 20, 2),
(200, 10, 20, 5),
(201, 1, 21, 2),
(202, 2, 21, 3),
(203, 3, 21, 2),
(204, 4, 21, 1),
(205, 5, 21, 2),
(206, 6, 21, 2),
(207, 7, 21, 4),
(208, 8, 21, 1),
(209, 9, 21, 2),
(210, 10, 21, 3),
(211, 1, 22, 3),
(212, 2, 22, 5),
(213, 3, 22, 4),
(214, 4, 22, 3),
(215, 5, 22, 1),
(216, 6, 22, 4),
(217, 7, 22, 5),
(218, 8, 22, 3),
(219, 9, 22, 2),
(220, 10, 22, 2),
(221, 1, 23, 2),
(222, 2, 23, 5),
(223, 3, 23, 4),
(224, 4, 23, 5),
(225, 5, 23, 2),
(226, 6, 23, 1),
(227, 7, 23, 2),
(228, 8, 23, 4),
(229, 9, 23, 5),
(230, 10, 23, 3),
(231, 1, 24, 1),
(232, 2, 24, 3),
(233, 3, 24, 3),
(234, 4, 24, 3),
(235, 5, 24, 1),
(236, 6, 24, 2),
(237, 7, 24, 4),
(238, 8, 24, 2),
(239, 9, 24, 1),
(240, 10, 24, 1),
(241, 1, 25, 2),
(242, 2, 25, 1),
(243, 3, 25, 5),
(244, 4, 25, 3),
(245, 5, 25, 4),
(246, 6, 25, 2),
(247, 7, 25, 1),
(248, 8, 25, 1),
(249, 9, 25, 4),
(250, 10, 25, 5),
(251, 1, 26, 2),
(252, 2, 26, 2),
(253, 3, 26, 2),
(254, 4, 26, 4),
(255, 5, 26, 2),
(256, 6, 26, 1),
(257, 7, 26, 5),
(258, 8, 26, 2),
(259, 9, 26, 3),
(260, 10, 26, 3),
(261, 1, 27, 1),
(262, 2, 27, 2),
(263, 3, 27, 3),
(264, 4, 27, 1),
(265, 5, 27, 1),
(266, 6, 27, 3),
(267, 7, 27, 3),
(268, 8, 27, 5),
(269, 9, 27, 4),
(270, 10, 27, 5),
(271, 1, 28, 1),
(272, 2, 28, 1),
(273, 3, 28, 5),
(274, 4, 28, 5),
(275, 5, 28, 3),
(276, 6, 28, 1),
(277, 7, 28, 5),
(278, 8, 28, 1),
(279, 9, 28, 2),
(280, 10, 28, 2),
(281, 1, 29, 3),
(282, 2, 29, 2),
(283, 3, 29, 5),
(284, 4, 29, 5),
(285, 5, 29, 4),
(286, 6, 29, 4),
(287, 7, 29, 2),
(288, 8, 29, 4),
(289, 9, 29, 2),
(290, 10, 29, 3),
(291, 1, 30, 2),
(292, 2, 30, 5),
(293, 3, 30, 4),
(294, 4, 30, 1),
(295, 5, 30, 5),
(296, 6, 30, 1),
(297, 7, 30, 5),
(298, 8, 30, 1),
(299, 9, 30, 5),
(300, 10, 30, 2),
(301, 1, 31, 5),
(302, 2, 31, 2),
(303, 3, 31, 5),
(304, 4, 31, 2),
(305, 5, 31, 5),
(306, 6, 31, 2),
(307, 7, 31, 3),
(308, 8, 31, 1),
(309, 9, 31, 1),
(310, 10, 31, 5),
(311, 1, 32, 5),
(312, 2, 32, 1),
(313, 3, 32, 4),
(314, 4, 32, 4),
(315, 5, 32, 5),
(316, 6, 32, 3),
(317, 7, 32, 5),
(318, 8, 32, 5),
(319, 9, 32, 4),
(320, 10, 32, 4),
(321, 1, 33, 5),
(322, 2, 33, 4),
(323, 3, 33, 5),
(324, 4, 33, 1),
(325, 5, 33, 4),
(326, 6, 33, 1),
(327, 7, 33, 3),
(328, 8, 33, 3),
(329, 9, 33, 1),
(330, 10, 33, 3),
(331, 1, 34, 3),
(332, 2, 34, 3),
(333, 3, 34, 4),
(334, 4, 34, 2),
(335, 5, 34, 1),
(336, 6, 34, 1),
(337, 7, 34, 4),
(338, 8, 34, 3),
(339, 9, 34, 3),
(340, 10, 34, 2),
(341, 1, 35, 1),
(342, 2, 35, 3),
(343, 3, 35, 3),
(344, 4, 35, 1),
(345, 5, 35, 3),
(346, 6, 35, 1),
(347, 7, 35, 3),
(348, 8, 35, 2),
(349, 9, 35, 2),
(350, 10, 35, 5),
(351, 1, 36, 5),
(352, 2, 36, 3),
(353, 3, 36, 4),
(354, 4, 36, 5),
(355, 5, 36, 5),
(356, 6, 36, 3),
(357, 7, 36, 3),
(358, 8, 36, 3),
(359, 9, 36, 4),
(360, 10, 36, 3),
(361, 1, 37, 5),
(362, 2, 37, 4),
(363, 3, 37, 2),
(364, 4, 37, 3),
(365, 5, 37, 1),
(366, 6, 37, 1),
(367, 7, 37, 5),
(368, 8, 37, 3),
(369, 9, 37, 2),
(370, 10, 37, 3),
(371, 1, 38, 2),
(372, 2, 38, 4),
(373, 3, 38, 3),
(374, 4, 38, 5),
(375, 5, 38, 1),
(376, 6, 38, 5),
(377, 7, 38, 1),
(378, 8, 38, 4),
(379, 9, 38, 4),
(380, 10, 38, 2),
(381, 1, 39, 2),
(382, 2, 39, 1),
(383, 3, 39, 1),
(384, 4, 39, 4),
(385, 5, 39, 4),
(386, 6, 39, 4),
(387, 7, 39, 4),
(388, 8, 39, 2),
(389, 9, 39, 3),
(390, 10, 39, 3),
(391, 1, 40, 3),
(392, 2, 40, 5),
(393, 3, 40, 3),
(394, 4, 40, 1),
(395, 5, 40, 5),
(396, 6, 40, 4),
(397, 7, 40, 5),
(398, 8, 40, 3),
(399, 9, 40, 3),
(400, 10, 40, 2),
(401, 1, 41, 5),
(402, 2, 41, 5),
(403, 3, 41, 3),
(404, 4, 41, 5),
(405, 5, 41, 4),
(406, 6, 41, 1),
(407, 7, 41, 1),
(408, 8, 41, 1),
(409, 9, 41, 3),
(410, 10, 41, 4),
(411, 1, 42, 2),
(412, 2, 42, 3),
(413, 3, 42, 3),
(414, 4, 42, 2),
(415, 5, 42, 5),
(416, 6, 42, 3),
(417, 7, 42, 3),
(418, 8, 42, 2),
(419, 9, 42, 4),
(420, 10, 42, 2),
(421, 1, 43, 1),
(422, 2, 43, 5),
(423, 3, 43, 2),
(424, 4, 43, 5),
(425, 5, 43, 2),
(426, 6, 43, 5),
(427, 7, 43, 4),
(428, 8, 43, 2),
(429, 9, 43, 2),
(430, 10, 43, 1),
(431, 1, 44, 3),
(432, 2, 44, 2),
(433, 3, 44, 2),
(434, 4, 44, 4),
(435, 5, 44, 5),
(436, 6, 44, 5),
(437, 7, 44, 3),
(438, 8, 44, 3),
(439, 9, 44, 2),
(440, 10, 44, 1),
(441, 1, 45, 5),
(442, 2, 45, 5),
(443, 3, 45, 3),
(444, 4, 45, 3),
(445, 5, 45, 4),
(446, 6, 45, 4),
(447, 7, 45, 3),
(448, 8, 45, 4),
(449, 9, 45, 4),
(450, 10, 45, 3),
(451, 1, 46, 5),
(452, 2, 46, 4),
(453, 3, 46, 1),
(454, 4, 46, 5),
(455, 5, 46, 3),
(456, 6, 46, 1),
(457, 7, 46, 2),
(458, 8, 46, 5),
(459, 9, 46, 3),
(460, 10, 46, 5),
(461, 1, 47, 2),
(462, 2, 47, 5),
(463, 3, 47, 3),
(464, 4, 47, 4),
(465, 5, 47, 3),
(466, 6, 47, 5),
(467, 7, 47, 3),
(468, 8, 47, 4),
(469, 9, 47, 5),
(470, 10, 47, 3),
(471, 1, 48, 4),
(472, 2, 48, 1),
(473, 3, 48, 3),
(474, 4, 48, 4),
(475, 5, 48, 1),
(476, 6, 48, 3),
(477, 7, 48, 1),
(478, 8, 48, 5),
(479, 9, 48, 3),
(480, 10, 48, 3),
(481, 1, 49, 5),
(482, 2, 49, 5),
(483, 3, 49, 5),
(484, 4, 49, 5),
(485, 5, 49, 4),
(486, 6, 49, 1),
(487, 7, 49, 4),
(488, 8, 49, 4),
(489, 9, 49, 4),
(490, 10, 49, 1),
(491, 1, 50, 2),
(492, 2, 50, 3),
(493, 3, 50, 1),
(494, 4, 50, 1),
(495, 5, 50, 1),
(496, 6, 50, 2),
(497, 7, 50, 1),
(498, 8, 50, 1),
(499, 9, 50, 4),
(500, 10, 50, 3),
(501, 1, 51, 5),
(502, 2, 51, 4),
(503, 3, 51, 2),
(504, 4, 51, 1),
(505, 5, 51, 5),
(506, 6, 51, 5),
(507, 7, 51, 5),
(508, 8, 51, 2),
(509, 9, 51, 1),
(510, 10, 51, 1),
(511, 1, 52, 4),
(512, 2, 52, 1),
(513, 3, 52, 5),
(514, 4, 52, 5),
(515, 5, 52, 1),
(516, 6, 52, 5),
(517, 7, 52, 4),
(518, 8, 52, 3),
(519, 9, 52, 5),
(520, 10, 52, 5),
(521, 1, 53, 3),
(522, 2, 53, 4),
(523, 3, 53, 2),
(524, 4, 53, 1),
(525, 5, 53, 4),
(526, 6, 53, 4),
(527, 7, 53, 2),
(528, 8, 53, 4),
(529, 9, 53, 2),
(530, 10, 53, 2),
(531, 1, 54, 5),
(532, 2, 54, 5),
(533, 3, 54, 4),
(534, 4, 54, 5),
(535, 5, 54, 1),
(536, 6, 54, 4),
(537, 7, 54, 3),
(538, 8, 54, 5),
(539, 9, 54, 2),
(540, 10, 54, 5),
(541, 1, 55, 5),
(542, 2, 55, 2),
(543, 3, 55, 5),
(544, 4, 55, 5),
(545, 5, 55, 5),
(546, 6, 55, 3),
(547, 7, 55, 2),
(548, 8, 55, 5),
(549, 9, 55, 5),
(550, 10, 55, 5),
(551, 1, 56, 4),
(552, 2, 56, 5),
(553, 3, 56, 2),
(554, 4, 56, 3),
(555, 5, 56, 2),
(556, 6, 56, 4),
(557, 7, 56, 1),
(558, 8, 56, 5),
(559, 9, 56, 3),
(560, 10, 56, 4),
(561, 1, 57, 5),
(562, 2, 57, 4),
(563, 3, 57, 1),
(564, 4, 57, 4),
(565, 5, 57, 2),
(566, 6, 57, 2),
(567, 7, 57, 4),
(568, 8, 57, 1),
(569, 9, 57, 5),
(570, 10, 57, 4),
(571, 1, 58, 3),
(572, 2, 58, 2),
(573, 3, 58, 5),
(574, 4, 58, 1),
(575, 5, 58, 2),
(576, 6, 58, 4),
(577, 7, 58, 3),
(578, 8, 58, 4),
(579, 9, 58, 5),
(580, 10, 58, 3),
(581, 1, 59, 3),
(582, 2, 59, 5),
(583, 3, 59, 2),
(584, 4, 59, 2),
(585, 5, 59, 3),
(586, 6, 59, 1),
(587, 7, 59, 2),
(588, 8, 59, 3),
(589, 9, 59, 3),
(590, 10, 59, 5),
(591, 1, 60, 3),
(592, 2, 60, 5),
(593, 3, 60, 4),
(594, 4, 60, 2),
(595, 5, 60, 5),
(596, 6, 60, 4),
(597, 7, 60, 4),
(598, 8, 60, 3),
(599, 9, 60, 2),
(600, 10, 60, 5),
(601, 1, 61, 3),
(602, 2, 61, 5),
(603, 3, 61, 3),
(604, 4, 61, 2),
(605, 5, 61, 2),
(606, 6, 61, 4),
(607, 7, 61, 1),
(608, 8, 61, 1),
(609, 9, 61, 2),
(610, 10, 61, 1),
(611, 1, 62, 5),
(612, 2, 62, 1),
(613, 3, 62, 4),
(614, 4, 62, 5),
(615, 5, 62, 4),
(616, 6, 62, 4),
(617, 7, 62, 5),
(618, 8, 62, 1),
(619, 9, 62, 3),
(620, 10, 62, 3),
(621, 1, 63, 4),
(622, 2, 63, 4),
(623, 3, 63, 1),
(624, 4, 63, 2),
(625, 5, 63, 3),
(626, 6, 63, 2),
(627, 7, 63, 1),
(628, 8, 63, 2),
(629, 9, 63, 5),
(630, 10, 63, 4),
(631, 1, 64, 1),
(632, 2, 64, 2),
(633, 3, 64, 4),
(634, 4, 64, 4),
(635, 5, 64, 1),
(636, 6, 64, 5),
(637, 7, 64, 2),
(638, 8, 64, 1),
(639, 9, 64, 1),
(640, 10, 64, 5),
(641, 1, 65, 5),
(642, 2, 65, 3),
(643, 3, 65, 3),
(644, 4, 65, 5),
(645, 5, 65, 1),
(646, 6, 65, 5),
(647, 7, 65, 5),
(648, 8, 65, 5),
(649, 9, 65, 1),
(650, 10, 65, 3),
(651, 1, 66, 5),
(652, 2, 66, 2),
(653, 3, 66, 2),
(654, 4, 66, 1),
(655, 5, 66, 1),
(656, 6, 66, 2),
(657, 7, 66, 5),
(658, 8, 66, 4),
(659, 9, 66, 2),
(660, 10, 66, 4),
(661, 1, 67, 3),
(662, 2, 67, 3),
(663, 3, 67, 4),
(664, 4, 67, 4),
(665, 5, 67, 3),
(666, 6, 67, 3),
(667, 7, 67, 1),
(668, 8, 67, 1),
(669, 9, 67, 5),
(670, 10, 67, 3),
(671, 1, 68, 4),
(672, 2, 68, 2),
(673, 3, 68, 2),
(674, 4, 68, 3),
(675, 5, 68, 5),
(676, 6, 68, 1),
(677, 7, 68, 2),
(678, 8, 68, 4),
(679, 9, 68, 2),
(680, 10, 68, 5),
(681, 1, 69, 5),
(682, 2, 69, 3),
(683, 3, 69, 5),
(684, 4, 69, 3),
(685, 5, 69, 5),
(686, 6, 69, 2),
(687, 7, 69, 3),
(688, 8, 69, 1),
(689, 9, 69, 4),
(690, 10, 69, 4),
(691, 1, 70, 1),
(692, 2, 70, 5),
(693, 3, 70, 4),
(694, 4, 70, 5),
(695, 5, 70, 4),
(696, 6, 70, 2),
(697, 7, 70, 1),
(698, 8, 70, 4),
(699, 9, 70, 3),
(700, 10, 70, 2),
(701, 1, 71, 1),
(702, 2, 71, 4),
(703, 3, 71, 3),
(704, 4, 71, 5),
(705, 5, 71, 2),
(706, 6, 71, 1),
(707, 7, 71, 1),
(708, 8, 71, 3),
(709, 9, 71, 3),
(710, 10, 71, 2),
(711, 1, 72, 1),
(712, 2, 72, 5),
(713, 3, 72, 1),
(714, 4, 72, 3),
(715, 5, 72, 2),
(716, 6, 72, 3),
(717, 7, 72, 4),
(718, 8, 72, 2),
(719, 9, 72, 1),
(720, 10, 72, 2),
(721, 1, 73, 2),
(722, 2, 73, 3),
(723, 3, 73, 3),
(724, 4, 73, 1),
(725, 5, 73, 4),
(726, 6, 73, 3),
(727, 7, 73, 5),
(728, 8, 73, 4),
(729, 9, 73, 4),
(730, 10, 73, 5),
(731, 1, 74, 2),
(732, 2, 74, 4),
(733, 3, 74, 3),
(734, 4, 74, 2),
(735, 5, 74, 5),
(736, 6, 74, 4),
(737, 7, 74, 5),
(738, 8, 74, 1),
(739, 9, 74, 4),
(740, 10, 74, 1),
(741, 1, 75, 1),
(742, 2, 75, 4),
(743, 3, 75, 3),
(744, 4, 75, 2),
(745, 5, 75, 2),
(746, 6, 75, 5),
(747, 7, 75, 4),
(748, 8, 75, 2),
(749, 9, 75, 1),
(750, 10, 75, 4),
(751, 1, 76, 5),
(752, 2, 76, 3),
(753, 3, 76, 1),
(754, 4, 76, 2),
(755, 5, 76, 5),
(756, 6, 76, 3),
(757, 7, 76, 1),
(758, 8, 76, 2),
(759, 9, 76, 1),
(760, 10, 76, 1),
(761, 1, 77, 5),
(762, 2, 77, 1),
(763, 3, 77, 4),
(764, 4, 77, 2),
(765, 5, 77, 3),
(766, 6, 77, 4),
(767, 7, 77, 4),
(768, 8, 77, 1),
(769, 9, 77, 3),
(770, 10, 77, 3),
(771, 1, 78, 3),
(772, 2, 78, 5),
(773, 3, 78, 4),
(774, 4, 78, 3),
(775, 5, 78, 1),
(776, 6, 78, 2),
(777, 7, 78, 1),
(778, 8, 78, 4),
(779, 9, 78, 2),
(780, 10, 78, 2),
(781, 1, 79, 5),
(782, 2, 79, 1),
(783, 3, 79, 4),
(784, 4, 79, 5),
(785, 5, 79, 3),
(786, 6, 79, 1),
(787, 7, 79, 4),
(788, 8, 79, 4),
(789, 9, 79, 1),
(790, 10, 79, 1),
(791, 1, 80, 2),
(792, 2, 80, 5),
(793, 3, 80, 3),
(794, 4, 80, 1),
(795, 5, 80, 4),
(796, 6, 80, 2),
(797, 7, 80, 3),
(798, 8, 80, 4),
(799, 9, 80, 4),
(800, 10, 80, 1),
(801, 1, 81, 3),
(802, 2, 81, 2),
(803, 3, 81, 3),
(804, 4, 81, 4),
(805, 5, 81, 3),
(806, 6, 81, 1),
(807, 7, 81, 3),
(808, 8, 81, 3),
(809, 9, 81, 2),
(810, 10, 81, 1),
(811, 1, 82, 5),
(812, 2, 82, 3),
(813, 3, 82, 1),
(814, 4, 82, 1),
(815, 5, 82, 2),
(816, 6, 82, 2),
(817, 7, 82, 1),
(818, 8, 82, 5),
(819, 9, 82, 5),
(820, 10, 82, 1),
(821, 1, 83, 4),
(822, 2, 83, 5),
(823, 3, 83, 5),
(824, 4, 83, 4),
(825, 5, 83, 3),
(826, 6, 83, 1),
(827, 7, 83, 4),
(828, 8, 83, 4),
(829, 9, 83, 3),
(830, 10, 83, 4),
(831, 1, 84, 3),
(832, 2, 84, 3),
(833, 3, 84, 4),
(834, 4, 84, 4),
(835, 5, 84, 4),
(836, 6, 84, 1),
(837, 7, 84, 5),
(838, 8, 84, 3),
(839, 9, 84, 1),
(840, 10, 84, 5),
(841, 1, 85, 5),
(842, 2, 85, 1),
(843, 3, 85, 4),
(844, 4, 85, 2),
(845, 5, 85, 1),
(846, 6, 85, 4),
(847, 7, 85, 4),
(848, 8, 85, 1),
(849, 9, 85, 4),
(850, 10, 85, 4),
(851, 1, 86, 2),
(852, 2, 86, 4),
(853, 3, 86, 3),
(854, 4, 86, 2),
(855, 5, 86, 3),
(856, 6, 86, 1),
(857, 7, 86, 3),
(858, 8, 86, 3),
(859, 9, 86, 5),
(860, 10, 86, 5),
(861, 1, 87, 5),
(862, 2, 87, 1),
(863, 3, 87, 2),
(864, 4, 87, 2),
(865, 5, 87, 1),
(866, 6, 87, 3),
(867, 7, 87, 5),
(868, 8, 87, 5),
(869, 9, 87, 4),
(870, 10, 87, 5),
(871, 1, 88, 1),
(872, 2, 88, 3),
(873, 3, 88, 4),
(874, 4, 88, 1),
(875, 5, 88, 5),
(876, 6, 88, 2),
(877, 7, 88, 4),
(878, 8, 88, 5),
(879, 9, 88, 2),
(880, 10, 88, 5),
(881, 1, 89, 5),
(882, 2, 89, 1),
(883, 3, 89, 4),
(884, 4, 89, 1),
(885, 5, 89, 1),
(886, 6, 89, 2),
(887, 7, 89, 1),
(888, 8, 89, 3),
(889, 9, 89, 3),
(890, 10, 89, 3),
(891, 1, 90, 5),
(892, 2, 90, 2),
(893, 3, 90, 1),
(894, 4, 90, 1),
(895, 5, 90, 2),
(896, 6, 90, 2),
(897, 7, 90, 5),
(898, 8, 90, 1),
(899, 9, 90, 5),
(900, 10, 90, 1),
(901, 1, 91, 4),
(902, 2, 91, 1),
(903, 3, 91, 2),
(904, 4, 91, 2),
(905, 5, 91, 5),
(906, 6, 91, 5),
(907, 7, 91, 4),
(908, 8, 91, 4),
(909, 9, 91, 2),
(910, 10, 91, 1),
(911, 1, 92, 4),
(912, 2, 92, 1),
(913, 3, 92, 5),
(914, 4, 92, 5),
(915, 5, 92, 5),
(916, 6, 92, 2),
(917, 7, 92, 2),
(918, 8, 92, 4),
(919, 9, 92, 3),
(920, 10, 92, 2),
(921, 1, 93, 5),
(922, 2, 93, 1),
(923, 3, 93, 5),
(924, 4, 93, 1),
(925, 5, 93, 1),
(926, 6, 93, 4),
(927, 7, 93, 3),
(928, 8, 93, 1),
(929, 9, 93, 3),
(930, 10, 93, 3),
(931, 1, 94, 4),
(932, 2, 94, 5),
(933, 3, 94, 4),
(934, 4, 94, 5),
(935, 5, 94, 5),
(936, 6, 94, 3),
(937, 7, 94, 3),
(938, 8, 94, 3),
(939, 9, 94, 1),
(940, 10, 94, 2),
(941, 1, 95, 1),
(942, 2, 95, 3),
(943, 3, 95, 3),
(944, 4, 95, 2),
(945, 5, 95, 4),
(946, 6, 95, 3),
(947, 7, 95, 3),
(948, 8, 95, 3),
(949, 9, 95, 5),
(950, 10, 95, 1),
(951, 1, 96, 4),
(952, 2, 96, 1),
(953, 3, 96, 2),
(954, 4, 96, 4),
(955, 5, 96, 1),
(956, 6, 96, 1),
(957, 7, 96, 5),
(958, 8, 96, 2),
(959, 9, 96, 4),
(960, 10, 96, 5),
(961, 1, 97, 2),
(962, 2, 97, 5),
(963, 3, 97, 2),
(964, 4, 97, 5),
(965, 5, 97, 1),
(966, 6, 97, 2),
(967, 7, 97, 3),
(968, 8, 97, 4),
(969, 9, 97, 1),
(970, 10, 97, 1),
(971, 1, 98, 3),
(972, 2, 98, 4),
(973, 3, 98, 5),
(974, 4, 98, 5),
(975, 5, 98, 2),
(976, 6, 98, 1),
(977, 7, 98, 1),
(978, 8, 98, 4),
(979, 9, 98, 5),
(980, 10, 98, 5),
(981, 1, 99, 3),
(982, 2, 99, 4),
(983, 3, 99, 1),
(984, 4, 99, 4),
(985, 5, 99, 2),
(986, 6, 99, 2),
(987, 7, 99, 3),
(988, 8, 99, 4),
(989, 9, 99, 2),
(990, 10, 99, 1),
(991, 1, 100, 4),
(992, 2, 100, 1),
(993, 3, 100, 4),
(994, 4, 100, 4),
(995, 5, 100, 5),
(996, 6, 100, 1),
(997, 7, 100, 3),
(998, 8, 100, 5),
(999, 9, 100, 1),
(1000, 10, 100, 5),
(1001, 1, 101, 5),
(1002, 2, 101, 5),
(1003, 3, 101, 5),
(1004, 4, 101, 2),
(1005, 5, 101, 4),
(1006, 6, 101, 5),
(1007, 7, 101, 3),
(1008, 8, 101, 1),
(1009, 9, 101, 2),
(1010, 10, 101, 4),
(1011, 1, 102, 3),
(1012, 2, 102, 5),
(1013, 3, 102, 3),
(1014, 4, 102, 4),
(1015, 5, 102, 4),
(1016, 6, 102, 1),
(1017, 7, 102, 4),
(1018, 8, 102, 1),
(1019, 9, 102, 3),
(1020, 10, 102, 3),
(1021, 1, 103, 3),
(1022, 2, 103, 3),
(1023, 3, 103, 5),
(1024, 4, 103, 5),
(1025, 5, 103, 2),
(1026, 6, 103, 1),
(1027, 7, 103, 3),
(1028, 8, 103, 3),
(1029, 9, 103, 2),
(1030, 10, 103, 3),
(1031, 1, 104, 4),
(1032, 2, 104, 3),
(1033, 3, 104, 3),
(1034, 4, 104, 5),
(1035, 5, 104, 5),
(1036, 6, 104, 4),
(1037, 7, 104, 4),
(1038, 8, 104, 2),
(1039, 9, 104, 1),
(1040, 10, 104, 4),
(1041, 1, 105, 3),
(1042, 2, 105, 1),
(1043, 3, 105, 2),
(1044, 4, 105, 4),
(1045, 5, 105, 2),
(1046, 6, 105, 4),
(1047, 7, 105, 4),
(1048, 8, 105, 3),
(1049, 9, 105, 5),
(1050, 10, 105, 5),
(1051, 1, 106, 5),
(1052, 2, 106, 3),
(1053, 3, 106, 1),
(1054, 4, 106, 3),
(1055, 5, 106, 2),
(1056, 6, 106, 5),
(1057, 7, 106, 2),
(1058, 8, 106, 1),
(1059, 9, 106, 4),
(1060, 10, 106, 4),
(1061, 1, 107, 4),
(1062, 2, 107, 5),
(1063, 3, 107, 3),
(1064, 4, 107, 3),
(1065, 5, 107, 2),
(1066, 6, 107, 5),
(1067, 7, 107, 2),
(1068, 8, 107, 1),
(1069, 9, 107, 4),
(1070, 10, 107, 5),
(1071, 1, 108, 1),
(1072, 2, 108, 5),
(1073, 3, 108, 5),
(1074, 4, 108, 2),
(1075, 5, 108, 4),
(1076, 6, 108, 2),
(1077, 7, 108, 5),
(1078, 8, 108, 1),
(1079, 9, 108, 1),
(1080, 10, 108, 5),
(1081, 1, 109, 4),
(1082, 2, 109, 2),
(1083, 3, 109, 3),
(1084, 4, 109, 4),
(1085, 5, 109, 1),
(1086, 6, 109, 1),
(1087, 7, 109, 4),
(1088, 8, 109, 2),
(1089, 9, 109, 1),
(1090, 10, 109, 1),
(1091, 1, 110, 3),
(1092, 2, 110, 3),
(1093, 3, 110, 4),
(1094, 4, 110, 4),
(1095, 5, 110, 3),
(1096, 6, 110, 5),
(1097, 7, 110, 5),
(1098, 8, 110, 4),
(1099, 9, 110, 5),
(1100, 10, 110, 2),
(1101, 112, 112, 4),
(1102, 112, 36, 5),
(1103, 112, 7, 5);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `channel_rating`
--
ALTER TABLE `channel_rating`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `channel_rating`
--
ALTER TABLE `channel_rating`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1104;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
