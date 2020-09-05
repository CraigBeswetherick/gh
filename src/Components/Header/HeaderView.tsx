import React from "react";
import "./header.scss";

import Logo from "../../Images/logo.png";
import Houses from "../../Images/houses.png";

const HeaderView: React.FC = (props) => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" width="50%" height="auto" />;
      <img src={Houses} alt="Houses" />;
    </div>
  );
};

export default HeaderView;
