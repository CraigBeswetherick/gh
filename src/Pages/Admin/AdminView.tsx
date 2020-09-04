import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AdminView: React.FC = (props) => {
  return (
    <div>
      <Header />
      <div className="page">
        <Typography>Admin</Typography>
      </div>
      <Footer />
    </div>
  );
};

export default AdminView;
