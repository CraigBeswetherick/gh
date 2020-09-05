import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

const LogoutView: React.FC = (props) => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="page">
        <Typography>You have successfully logged out.</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default LogoutView;
