import SFilter from "./style";

export default function Filter() {
  return (
    <SFilter>
      <div>
        <h1>FILTRE</h1>
        <input type="search" id="site-search" />
      </div>
    </SFilter>
  );
}

// CREATE TABLE `acteur` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(45) NOT NULL,
//   `lastname` varchar(45) NOT NULL,
//   `picture` varchar(500) DEFAULT NULL,
//   `skills` json DEFAULT NULL,
//   `mail` varchar(255) NOT NULL,
//   `jobs` varchar(45) DEFAULT NULL,
//   `types` enum('client','collaborateur','prestateur externe','intervenant')
