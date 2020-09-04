import React from "react";
import { Typography } from "@material-ui/core";
import "./footer.scss";

const FooterView: React.FC = (props) => {
  return (
    <div className="footer">
      <Typography>Thank you for visiting our website.</Typography>

      <br />

      <Typography>You may contact us via: </Typography>
      <Typography>
        <b>Email:</b> grindhead@gmail.com{" "}
      </Typography>
      <Typography>
        <b>Twitter:</b> twitter.com/grindheadgames{" "}
      </Typography>
      <Typography>
        <b>Phone:</b> 07381012012012012012{" "}
      </Typography>

      <br />
    </div>
  );
};

export default FooterView;
