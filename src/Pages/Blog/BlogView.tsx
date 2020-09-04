import React from "react";
import { Typography } from "@material-ui/core";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";

const BlogView: React.FC = (props) => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="page">
        <Typography>Blog</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default BlogView;
