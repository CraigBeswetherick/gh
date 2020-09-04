import React from "react";
import { Typography } from "@material-ui/core";
import "./footer.scss";
import * as Constants from "../../Utils/Constants";
import Link from "@material-ui/core/Link";

const FooterView: React.FC = (props) => {
  return (
    <div className="footer">
      <Typography>Thank you for visiting our website.</Typography>
      <br />
      <Typography>You may contact us via: </Typography>
      <Typography>
        <b>Email: </b>
        <Link href="mailto:grindhead@gmail.com?subject=Hello%20To%20Grindhead">
          grindhead@gmail.com
        </Link>{" "}
      </Typography>
      <Typography>
        <b>Twitter: </b>
        <Link href={Constants.TWITTER_URL}>twitter.com/grindheadgames </Link>
      </Typography>
      <Typography>
        <b>Phone:</b> 07311408140{" "}
      </Typography>
      <br />
    </div>
  );
};

export default FooterView;
