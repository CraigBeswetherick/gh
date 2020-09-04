import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const PortfolioView: React.FC = (props) => {
  return (
    <div>
      <Header />
      <div className="page">
        <Typography>Portfolio</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioView;
