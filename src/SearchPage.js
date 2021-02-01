import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

import SearchItem from "./SearchItem";

import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";

import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {
  const [{ item }, dispatch] = useStateValue();
  const [inputData, setInputData] = useState(item);
  const { data } = useGoogleSearch(item);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_INPUT",
      item: inputData,
    });
  };

  return (
    <div className="searchPage">
      <header className="searchPage__header">
        <div className="searchPage__header__left">
          <Link to="/">
            <img
              className="searchPage__icon"
              src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
              alt="google icon"
            />
          </Link>
          <div className="searchPage__input">
            <form className="searchPage__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button disabled={!inputData} type="submit">
                search
              </button>
            </form>
            <SearchIcon />
            <MicIcon />
          </div>
        </div>
        <div className="searchPage__header__right">
          <AppsIcon className="header__right__icons" />
          <Avatar className="header__right__icons" />
        </div>
      </header>
      {data
        ? data.items.map((datas) => (
            <SearchItem
              title={datas.title}
              link={datas.displayLink}
              description={datas.snippet}
              url={datas.link}
            />
          ))
        : console.log("wait")}
    </div>
  );
}

export default SearchPage;
