import React from "react";
import { Typography } from "@material-ui/core";
import "./footer.scss";
import * as Constants from "../../Utils/Constants";
import Link from "@material-ui/core/Link";

const FooterView: React.FC = (props) => {
  return (
    <div className="footer">
      <Typography variant="h4">Thank you for visiting our website.</Typography>
      <br />
      <Typography variant="h5">You may contact us via: </Typography>
      <br />
      <Typography variant="h5">
        <b>Email: </b>
        <Link href="mailto:grindhead@gmail.com?subject=Hello%20To%20Grindhead">
          grindhead@gmail.com
        </Link>{" "}
      </Typography>
      <Typography variant="h5">
        <b>Twitter: </b>
        <Link href={Constants.TWITTER_URL}>twitter.com/grindheadgames </Link>
      </Typography>
      <Typography variant="h5">
        <b>Phone:</b>
        <Link href="tel:+0311-408-140"> +44 (0)7311408140</Link>{" "}
      </Typography>
      <br />
    </div>
  );
};

export default FooterView;
