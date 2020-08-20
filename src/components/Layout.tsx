import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Header";
import { FOOTER_HEIGHT_PX } from "./Footer";

type Props = {
  elevateAppBar?: boolean;
  children?: React.ReactNode;
  transparentUntil?: number;
  fixed?: boolean;
  overlayContent?: boolean;
};

const useStyles = makeStyles(theme => ({
  appbarPlaceholder: {
    ...theme.mixins.toolbar,
  },
  content: {
    minHeight: `calc(100vh - ${FOOTER_HEIGHT_PX}px)`,
  },
}));

export default function Layout({ overlayContent, children }: Props) {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header transparent fixed />
      <div className={classes.content}>
        {!overlayContent && <div className={classes.appbarPlaceholder} />}
        {children}
      </div>
    </div>
  );
}
