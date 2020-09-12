import React from "react";
import AdminView from "./AdminView";
import { Redirect } from "react-router-dom";
import * as Constants from "../../Utils/Constants";
import { connect } from "react-redux";

interface AdminProps {
  isAuthenticated: boolean;
}

const Admin = (props: AdminProps) => {
  console.log(props.isAuthenticated, "auth");
  if (!props.isAuthenticated) {
    return <Redirect to={Constants.PAGE_HOME_URL} />;
  }

  return <AdminView />;
};

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Admin);
