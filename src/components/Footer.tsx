/** must be a fixed height to compute the min height of the content area */
export const FOOTER_HEIGHT_PX = 160;

import React from "react";
import {
  makeStyles,
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import to from "../utils/to";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles(theme => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[900],
    height: FOOTER_HEIGHT_PX,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialLink: {
    color: "white",
    "&:hover": {
      color: "#b8b8b8",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const {
    site: {
      siteMetadata: { copyright, socials },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
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
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="md">
        <Box padding={4} display="flex" justifyContent="center">
          <Box
            textAlign="center"
            marginTop={2}
            display="flex"
            alignItems="center"
          >
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} {copyright}
            </Typography>
            <Divider
              orientation="vertical"
              light
              style={{
                backgroundColor: "gray",
                marginLeft: 8,
                marginRight: 8,
              }}
            />
            <Typography
              {...to("/jobs")}
              variant="caption"
              className={classes.link}
            >
              Jobs
            </Typography>
            <Divider
              orientation="vertical"
              light
              style={{
                backgroundColor: "gray",
                marginLeft: 8,
                marginRight: 8,
              }}
            />
            <Typography
              {...to("/impressum")}
              variant="caption"
              className={classes.link}
            >
              Impressum
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <a href={socials.facebook} className={classes.socialLink}>
              <FacebookIcon />
            </a>
            <a href={socials.instagram} className={classes.socialLink}>
              <InstagramIcon style={{ marginLeft: 16, marginRight: 16 }} />
            </a>
            <a href={socials.youtube} className={classes.socialLink}>
              <YouTubeIcon />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
