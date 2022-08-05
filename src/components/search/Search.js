import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const changeSearchHandler = (searchValue) => {
    setEnteredValue(searchValue);
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/foods/search/${enteredValue}`);
  };
  return (
    <form className="text-center searchForm" onSubmit={submitHandler}>
      <NavLink to={`/foods/search/${enteredValue}`}>
        <FaSearch />
      </NavLink>

      <input
        type="search"
        placeholder="Hungry to ..."
        onChange={(e) => changeSearchHandler(e.target.value)}
        value={enteredValue}
      />
    </form>
  );
};

export default Search;
