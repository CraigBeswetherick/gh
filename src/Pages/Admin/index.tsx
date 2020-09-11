import React from "react";
import AdminView from "./AdminView";

interface AdminProps {}

const Admin: React.FC = (props: AdminProps) => {
  console.log("rendering admin page");
  return <AdminView />;
};

export default Admin;
