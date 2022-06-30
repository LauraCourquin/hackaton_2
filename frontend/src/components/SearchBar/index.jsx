// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import SSearch from "./style";

export default function Search() {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!formData.search) {
      setSearchResults([]);
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/search/:id${formData.search}`)
        .then(({ data }) => {
          setSearchResults(data);
        });
    }
  }, [formData]);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SSearch>
      <input
        type="text"
        placeholder="Taper votre recherche"
        value={formData.search}
        name="search"
        onChange={hChange}
      />
      <ul>
        {searchResults.map((searchResult) => {
          return (
            <li>
              {searchResult.displayName}
              {`/${searchResult.type}/${searchResult.id}`}
            </li>
          );
        })}
      </ul>
    </SSearch>
  );
}
// Search.propTypes = {
//   hChange: PropTypes.func,
//   formData: PropTypes.shape({
//     search: PropTypes.string,
//   }),
// };
// Search.defaultProps = {
//   hChange: () => {},
//   formData: PropTypes.shape({
//     question: "",
//     category: "",
//   }),
// };
