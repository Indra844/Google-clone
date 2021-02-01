import React from "react";
import "./SearchItem.css";
import { Link } from "react-router-dom";

function SearchItem({ url, link, title, description }) {
  return (
    <div className="searchItem">
      <a href={url} className="searchItem__link">
        {link}
      </a>
      <br />
      <a href={url} className="searchItem__title">
        {title}
      </a>
      <p className="searchItem__desc">{description}</p>
    </div>
  );
}

export default SearchItem;
