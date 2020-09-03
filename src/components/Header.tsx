import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import LogoIcon from "../assets/logo.svg";
import { container } from "../style/shared";
import to from "../utils/to";

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
  activeSection: {
    color: theme.palette.secondary.light,
  },
  logo: {
    width: 60,
    height: 25,
    [theme.breakpoints.down("xs")]: {
      width: 45,
      height: 18.75,
    },
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
        <Link to="/">
          <LogoIcon className={classes.logo} />
        </Link>
        <div style={{ flex: 1 }} />
        <Scrollspy
          items={["studio", "kurse", "anfahrt"]}
          currentClassName={classes.activeSection}
        >
          <Button color="inherit" {...to("/#studio")}>
            Studio
          </Button>
          <Button
            color="inherit"
            style={{ marginLeft: 16, marginRight: 16 }}
            {...to("/#kurse")}
          >
            Kurse
          </Button>
          <Button color="inherit" {...to("/#anfahrt")}>
            Anfahrt
          </Button>
        </Scrollspy>
      </Toolbar>
    </AppBar>
  );
}
