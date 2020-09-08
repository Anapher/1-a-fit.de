import {
  AppBar,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import Scrollspy from "react-scrollspy";
import LogoIcon from "../assets/logo.svg";
import { container } from "../style/shared";
import to from "../utils/to";
import NavButton from "./NavButton";

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
    [theme.breakpoints.down(330)]: {
      width: 30,
      height: 12.5,
    },
  },
  menuList: {
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down(330)]: {
      paddingLeft: 0,
    },
  },
  navLink: {
    minWidth: 96,
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: 13.5,
    textTransform: "uppercase",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const trigger = useScrollTrigger({
    threshold: isMobile ? 45 : transparentUntil,
    disableHysteresis: true,
  });

  return (
    <AppBar
      position="relative"
      className={classNames([
        classes.appbar,
        {
          [classes.appbarTransparent]: transparent && !trigger,
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
          items={["vellmar", "kassel", "kurse"]}
          currentClassName={classes.activeSection}
          style={{ marginTop: 0, marginBottom: 0, paddingLeft: 0 }}
        >
          <NavButton {...to("/location/vellmar")} className={classes.navLink}>
            Vellmar
          </NavButton>
          <NavButton {...to("/location/kassel")} className={classes.navLink}>
            Kassel
          </NavButton>
          <NavButton {...to("/#kurse")} className={classes.navLink}>
            Kurse
          </NavButton>
        </Scrollspy>
      </Toolbar>
    </AppBar>
  );
}
