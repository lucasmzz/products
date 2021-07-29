import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <p>Products</p>
      </div>
      <div className="header__options">
        <IconButton>
          <ExitToAppIcon
            style={{
              margin: "10px",
              color: "orangered",
              fontWeight: 800,
              fontSize: "3rem",
            }}
          />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
