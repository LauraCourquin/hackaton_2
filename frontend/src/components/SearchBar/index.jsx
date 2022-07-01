import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@components/Card";
import SSearch from "./style";

export default function Search() {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/search?needle=${formData.search}`
      )
      .then(({ data }) => {
        setSearchResults(data);
      });
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Card key={searchResult.id} {...searchResult} />;
        })}
      </ul>
    </SSearch>
  );
}
Search.propTypes = {
  formData: PropTypes.shape({
    search: PropTypes.string,
  }),
};
Search.defaultProps = {
  formData: PropTypes.shape({
    question: "",
    category: "",
  }),
};
