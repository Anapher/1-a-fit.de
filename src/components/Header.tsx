import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { container } from "../style/shared";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  appbar: {
    transition: "all 150ms ease 0s",
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
  },
  toolbar: {
    ...container,
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
};

export default function Header({ transparent, fixed }: Props) {
  const classes = useStyles();

  return (
    <AppBar
      position="relative"
      className={classNames([
        classes.appbar,
        { [classes.appbarTransparent]: transparent, [classes.fixed]: fixed },
      ])}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">1 a fit</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
