import React from "react";
import { Typography } from "@material-ui/core";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const BlogView: React.FC = (props) => {
  return (
    <div>
      <Header />
      <div className="page">
        <Typography>Blog</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default BlogView;
