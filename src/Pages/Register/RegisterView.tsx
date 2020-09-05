import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

const RegisterView: React.FC = (props) => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="page">
        <Typography>Register</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterView;
