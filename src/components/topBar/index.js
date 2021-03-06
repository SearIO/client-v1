import React from "react";
import "./index.css";
import imgs from './../../assets/imgs/index';
import Button from "..//ButtonWithRouter"

export default ({beta}) => {
  const BetaImg = beta ? <img className="beta-icon" src={beta} alt="beta"/> : null
  return (
    <header className="flex-container top-bar">
        <a href="/">
        <img className="multisend-logo" src={imgs.multisendWithIcon} alt="logo" />
        {BetaImg}
        </a>
      <ul>
        <li>
          <a href="/">ABOUT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#help">FAQ</a>
        </li>
      </ul>
      <Button to="connect" customStyle="ms-btn wt-icon ms-green-bg">
        SEND <span className="send-arrow">↗</span>
      </Button>
    </header>
  );
}
