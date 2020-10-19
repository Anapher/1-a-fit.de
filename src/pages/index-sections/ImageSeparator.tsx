import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  image: {
    height: 600,
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
}));

export default function ImageSeparator() {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "landing-page/delta-img.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const theme = useTheme();

  let height = 600;
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));

  if (mdDown) height = 400;
  if (xsDown) height = 250;

  const strenght = 200;

  const classes = useStyles();

  return (
    <Img fluid={background.childImageSharp.fluid} className={classes.image} />
  );
}
