/** must be a fixed height to compute the min height of the content area */
export const FOOTER_HEIGHT_PX = 144;

import React from "react";
import {
  makeStyles,
  Box,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import to from "../utils/to";

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
}));

export default function Footer() {
  const classes = useStyles();

  const {
    site: {
      siteMetadata: { copyright },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="md">
        <Box padding={4} display="flex" justifyContent="center">
          {/* <FooterColumns columns={columns} /> */}
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
              {...to("/impressum")}
              variant="caption"
              className={classes.link}
            >
              Impressum
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
