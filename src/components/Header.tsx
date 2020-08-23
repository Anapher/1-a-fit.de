import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { container } from "../style/shared";
import classNames from "classnames";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  appbar: {
    transition: "all 150ms ease 0s",
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
  },
  toolbar: {
    ...container,
    display: "flex",
  },
  appbarTransparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: 25,
    color: "#FFFFFF",
  },
  fixed: {
    position: "fixed",
    zIndex: 1100,
  },
}));

type Props = {
  transparent?: boolean;
  fixed?: boolean;
  transparentUntil?: number;
};

export default function Header({
  transparent,
  fixed,
  transparentUntil,
}: Props) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "header/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isTransparent, setIsTransparent] = useState(true);

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;

    if (transparentUntil !== undefined)
      setIsTransparent(windowsScrollTop < transparentUntil);
  };

  useEffect(() => {
    if (transparentUntil) {
      window.addEventListener("scroll", headerColorChange);
      return () => window.removeEventListener("scroll", headerColorChange);
    }
  }, [transparentUntil]);

  return (
    <AppBar
      position="relative"
      className={classNames([
        classes.appbar,
        {
          [classes.appbarTransparent]: transparent && isTransparent,
          [classes.fixed]: fixed,
        },
      ])}
    >
      <Toolbar className={classes.toolbar}>
        <Img fluid={data.logo.childImageSharp.fluid} style={{ width: 60 }} />
        <div style={{ flex: 1 }} />
        <Button color="inherit">Studio</Button>
        <Button color="inherit" style={{ marginLeft: 16, marginRight: 16 }}>
          Kurse
        </Button>
        <Button color="inherit">Anfahrt</Button>
      </Toolbar>
    </AppBar>
  );
}
