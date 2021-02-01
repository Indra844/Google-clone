import React, { useState } from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

import { useStateValue } from "./StateProvider";

function Home() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const [{}, dispatch] = useStateValue();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_INPUT",
      item: input,
    });
    history.push("/search");
  };
  return (
    <div className="home">
      <header className="header">
        <div className="header__icons">
          <h6 className="header__options">Gmail</h6>
          <h6 className="header__options">Images</h6>
          <AppsIcon fontSize="small" className="header__options" />
          <Avatar />
        </div>
      </header>
      <div className="google__container">
        <img
          className="google__icon"
          src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt="google icon"
        />
        <div className="search__field">
          <SearchIcon />
          <form className="search__field__form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button disabled={!input} type="submit">
              search
            </button>
          </form>
          <MicIcon />
        </div>
        <div className="search__buttons">
          <Button>Google Search</Button>
          <Button>i'm Feeling Lucky</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
