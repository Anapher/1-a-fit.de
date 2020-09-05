import { Button, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import classnames from "classnames";

const useStyles = makeStyles({
  text: {
    color: "white",
  },
  socialIcon: {
    marginRight: 12,
  },
  denseSocialIcon: {
    marginRight: 8,
  },
  socialButton: {
    color: "white",
    borderColor: "white",
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0,0,0,0.3)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
});

type Props = {
  dense?: boolean;
};

export default function LandingPageSocials({ dense }: Props) {
  const classes = useStyles();

  const {
    site: {
      siteMetadata: { socials },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socials {
            facebook
            instagram
            youtube
          }
        }
      }
    }
  `);

  return (
    <Typography className={classes.text}>
      {!dense && "Folge uns jetzt auf"}
      <Button
        variant="outlined"
        className={classes.socialButton}
        style={{ marginLeft: !dense && 8, marginRight: 16 }}
        href={socials.instagram}
      >
        <InstagramIcon
          className={dense ? classes.denseSocialIcon : classes.socialIcon}
        />
        Instagram
      </Button>
      <Button
        variant="outlined"
        className={classes.socialButton}
        href={socials.facebook}
      >
        <FacebookIcon
          className={dense ? classes.denseSocialIcon : classes.socialIcon}
        />
        Facebook
      </Button>
    </Typography>
  );
}
