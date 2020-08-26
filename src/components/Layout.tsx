import React from "react";
import { CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "./Header";
import Footer, { FOOTER_HEIGHT_PX } from "./Footer";
import theme from "../style/theme";

type Props = {
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

export default function Layout({
  overlayContent,
  children,
  transparentUntil,
}: Props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Header
          transparent={!!transparentUntil}
          fixed
          transparentUntil={transparentUntil}
        />
        <div className={classes.content}>
          {!overlayContent && <div className={classes.appbarPlaceholder} />}
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
