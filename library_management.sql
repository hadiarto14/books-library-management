-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2022 at 09:57 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(60) NOT NULL,
  `description` varchar(500) NOT NULL,
  `rating` float NOT NULL,
  `image` varchar(225) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author`, `description`, `rating`, `image`, `availability`, `category_id`) VALUES
(1, 'The Hunger Games', 'Suzanne Collins', 'Collins has said that the inspiration for The Hunger Games came from channel surfing on television. On one channel she observed people competing on a reality show and on another she saw footage of the invasion of Iraq. The two \"began to blur in this very unsettling way\" and the idea for the book was formed. The Greek myth of Theseus served as a major basis for the story, with Collins describing Katniss as a futuristic Theseus, and Roman gladiatorial games provided the framework. The sense of los', 4.34, 'https://images.gr-assets.com/books/1447303603m/2767052.jpg', 1, 2),
(2, 'Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling, Mary GrandPré', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p', 4.44, 'https://images.gr-assets.com/books/1474154022m/3.jpg', 1, 4),
(3, 'Twilight', 'Stephenie Meyer', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various ', 3.57, 'https://images.gr-assets.com/books/1361039443m/41865.jpg', 1, 3),
(4, 'To Kill a Mockingbird', 'Harper Lee', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dicti', 4.25, 'https://images.gr-assets.com/books/1361975680m/2657.jpg', 1, 6),
(5, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bono', 3.89, 'https://images.gr-assets.com/books/1490528560m/4671.jpg', 1, 5),
(6, 'The Fault in Our Stars', 'John Green', 'Donec erat ex, tempus eget nulla id, bibendum aliquet tortor. In varius enim non consequat sodales. Phasellus nec sollicitudin ante. Duis suscipit mattis dui, non tempor nisl suscipit eu. Maecenas euismod sagittis dui, nec ullamcorper erat lobortis tincidunt. Suspendisse egestas libero sit amet magna auctor rutrum. Curabitur dictum tortor ut elit tincidunt pellentesque. Quisque erat dolor, ullamcorper sed purus rutrum, cursus facilisis eros. Mauris et ante interdum, posuere turpis vel, dapibus l', 4.26, 'https://images.gr-assets.com/books/1360206420m/11870085.jpg', 1, 6),
(7, 'The Hobbit or There and Back Again', 'J.R.R. Tolkien', 'Praesent congue vulputate ipsum at rhoncus. Duis in accumsan augue. Cras blandit at mauris at dapibus. Suspendisse in libero eros. Integer volutpat non magna id congue. Etiam ac sodales sapien. Sed commodo sem sed lorem pellentesque auctor. Nullam a efficitur ipsum, faucibus pellentesque neque. In maximus porttitor urna, vel mattis velit malesuada at. Etiam pharetra eleifend viverra. Curabitur mattis quis nisl id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada ', 4.25, 'https://images.gr-assets.com/books/1372847500m/5907.jpg', 1, 2),
(8, 'The Catcher in the Rye', 'J.D. Salinger', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie orci sit amet porttitor vulputate. Integer ultricies ultricies cursus. Vivamus ex sem, tincidunt a lectus ac, finibus tempor purus. Duis nisi lacus, pretium ut cursus in, faucibus vel est. Nunc eget sem risus. Etiam a posuere nulla. Quisque mollis nec diam et cursus. Sed et massa quis nunc dapibus molestie.', 3.79, 'https://images.gr-assets.com/books/1398034300m/5107.jpg', 1, 6),
(9, 'Angels & Demons ', 'Dan Brown', 'Quisque at odio a nisi ultrices tempor placerat nec enim. Sed dictum leo sed metus sodales, id aliquam eros tristique. Nunc mattis pulvinar suscipit. Etiam semper ultricies tortor at elementum. Quisque sed imperdiet augue. Morbi lorem nisi, convallis a orci id, commodo convallis ligula. Suspendisse id eros et metus finibus cursus sit amet quis diam. Nunc sed dolor et velit tristique eleifend a in ex. In eu efficitur nulla, sit amet sagittis metus. Quisque quis nisl id felis mollis blandit eu rho', 3.85, 'https://images.gr-assets.com/books/1303390735m/960.jpg', 1, 7),
(10, 'Pride and Prejudice', 'Jane Austen', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque lacus a imperdiet auctor. Morbi pharetra mauris vitae egestas tincidunt. Morbi at rhoncus purus. Maecenas sollicitudin neque nec ipsum tincidunt malesuada. Vivamus sem augue, molestie eu augue vitae, sagittis tristique libero. Praesent viverra, massa sed fringilla blandit, lorem orci maximus tellus, nec aliquam ligula lorem sit amet ipsum. Fusce euismod est felis, ac accumsan magna blandit non. Aliquam efficitur ullamcorp', 4.24, 'https://images.gr-assets.com/books/1320399351m/1885.jpg', 1, 3),
(11, 'The Kite Runner ', 'Khaled Hosseini', 'Nam elementum nisi a imperdiet euismod. Suspendisse sagittis fermentum tellus sit amet rutrum. Phasellus pharetra odio quis libero rutrum maximus. In ut felis metus. Ut sit amet dictum turpis. Mauris ornare posuere consectetur. Quisque ultrices suscipit orci eu egestas. Quisque interdum, est a varius imperdiet, nunc urna elementum est, quis facilisis nibh est vel quam.', 4.26, 'https://images.gr-assets.com/books/1484565687m/77203.jpg', 1, 8),
(23, 'Divergent', 'Veronica Roth', 'Quisque aliquam scelerisque viverra. Donec sagittis, est vitae finibus placerat, lorem urna condimentum eros, quis auctor turpis nunc id metus. Nullam eget accumsan eros, at dapibus est. Sed non aliquam nisi. Mauris vitae viverra ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sem leo. Donec eu sollicitudin sapien, sed luctus diam.', 4.24, '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `borrowing`
--

CREATE TABLE `borrowing` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `borrow_date` date NOT NULL,
  `return_date` date DEFAULT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `borrowing`
--

INSERT INTO `borrowing` (`id`, `name`, `phone`, `borrow_date`, `return_date`, `book_id`) VALUES
(27, 'Hadiarto', '082216862277', '2022-11-17', '2022-11-24', 4),
(28, 'Hadiarto', '082216862277', '2022-11-18', '2022-11-19', 1),
(29, 'Hadiarto', '082216862277', '2022-11-10', '2022-11-17', 5),
(30, 'Hadiarto', '082216862277', '2022-11-18', '2022-11-25', 5);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Science Fiction', 'Science fiction is a form of fiction that deals principally with the impact of actual or imagined science upon society or individuals.'),
(2, 'Fantasy', 'A genre of literature which features fantastical elements. The stories categorized in this genre often feature mythological creatures and magic.'),
(3, 'Romance', 'A book that centers on love and relationships as its primary plot element.'),
(4, 'Southern Gothic', 'Southern Gothic is a literary style that takes gothic themes and places them in a magical realist American South setting.'),
(5, 'Tragedy', 'Made up of stories of drama-based human suffering. The stories are designed to evoke purification or purging of feelings from the reader through emotions such as pity and fear.'),
(6, 'Realistic Fiction', 'Seems like real life, with characters dealing with real life problems. The plot often takes place in the present time. The situations are true or could be, but the main characters are fictional.'),
(7, 'Mystery', 'Fictional books that are able to be classified in the \"mystery\" genre, typically revolving around a crime of some sort.'),
(8, 'Drama', 'the specific mode of fiction represented in performance. The term comes from a Greek word meaning \"action\", which is derived from \"to do\" or \"to act\".');

-- --------------------------------------------------------

--
-- Table structure for table `returnbook`
--

CREATE TABLE `returnbook` (
  `id` int(11) NOT NULL,
  `return_date_actual` date NOT NULL,
  `borrowing_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `returnbook`
--

INSERT INTO `returnbook` (`id`, `return_date_actual`, `borrowing_id`) VALUES
(5, '2022-11-18', 28),
(7, '2022-11-18', 27),
(8, '2022-11-15', 29),
(11, '2022-11-25', 30);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(10) NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `enabled`) VALUES
(1, 'guest', '$2a$12$ySfISm/F4yPRjKxbEpoI/O66020rx9MvmZKjwXMcQhap6PZkiomZ6', 'public', 1),
(2, 'admin', '$2a$12$ySfISm/F4yPRjKxbEpoI/O66020rx9MvmZKjwXMcQhap6PZkiomZ6', 'admin', 1),
(4, 'hadiarto', '$2a$12$ySfISm/F4yPRjKxbEpoI/O66020rx9MvmZKjwXMcQhap6PZkiomZ6', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returnbook`
--
ALTER TABLE `returnbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `borrowing`
--
ALTER TABLE `borrowing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `returnbook`
--
ALTER TABLE `returnbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
