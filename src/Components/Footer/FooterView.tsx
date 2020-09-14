import React from "react";
import { Typography } from "@material-ui/core";
import "./footer.scss";
import * as Constants from "../../Utils/Constants";
import Link from "@material-ui/core/Link";

const FooterView: React.FC = (props) => {
  return (
    <div className="footer">
      <Typography variant="h4">{Constants.FOOTER_TITLE}</Typography>
      <br />
      <Typography variant="h5">{Constants.FOOTER_SUBTITLE}</Typography>
      <br />
      <Typography variant="h5">
        <Link href={"mailto:" + Constants.EMAIL_ADDRESS}>
          {Constants.EMAIL_ADDRESS_LABEL}
        </Link>{" "}
      </Typography>
      <Typography variant="h5">
        <Link href={Constants.TWITTER_URL}>{Constants.TWITTER_LABEL}</Link>
      </Typography>
      <Typography variant="h5">
        <Link href={"tel:" + Constants.PHONE_NUMBER}>
          {" "}
          {Constants.PHONE_NUMBER_LABEL}
        </Link>{" "}
      </Typography>
      <br />
    </div>
  );
};

export default FooterView;
