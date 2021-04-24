import { Box, fade, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { container, logoProportion } from "../../style/shared";
import LogoIcon from "../../assets/logo_full.svg";
import AppstoreBadge from "../../assets/appstore.svg";
import GooglePlayBadge from "../../assets/googleplay.svg";

const useStyles = makeStyles(theme => ({
  root: {
    ...container,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 64,
  },
  attentionBox: {
    borderWidth: 0,
    borderLeftWidth: 8,
    marginLeft: -16,
    borderStyle: "solid",
    borderColor: theme.palette.secondary.light,
    backgroundColor: fade(theme.palette.secondary.light, 0.15),
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down(576)]: {
      marginLeft: 0,
      paddingRight: 16,
    },
  },
}));

export default function CoronaInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.attentionBox}>
        <Box display="flex">
          <Typography variant="h5" style={{ flex: 1 }}>
            Leider haben wir aktuell geschlossen.
          </Typography>
          <LogoIcon
            style={{
              width: 80,
              height: 80 * logoProportion,
              display: "block",
              marginRight: 16,
              marginLeft: 16,
            }}
          />
        </Box>
        <Typography style={{ marginTop: 8 }} component="span">
          <p>
            Aufgrund der Maßnahmen des{" "}
            <a href="https://www.bundesregierung.de/breg-de/suche/bundesweite-notbremse-1888982">
              Infektionsschutzgesetzes
            </a>{" "}
            dürfen wir erst bei einer 7-Tage-Inzidenz unter 100 wieder öffnen.
            Hier findest du{" "}
            <a href="https://www.kassel.de/aktuelles/aktuelle-meldungen/coronavirus.php">
              die aktuelle Inzidenz für Kassel
            </a>
            .
          </p>
        </Typography>
      </div>
    </div>
  );
}
