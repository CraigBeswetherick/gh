import React from "react";
import Navigation from "../Navigation";
import "./header.scss";

const HeaderView: React.FC = (props) => {
  return (
    <div className="header">
      <Navigation />
    </div>
  );
};

export default HeaderView;
