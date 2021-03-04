import { Box, fade, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { container, logoProportion } from "../../style/shared";
import LogoIcon from "../../assets/logo_full.svg";

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
            WIEDERERÖFFNUNG AM 8. MÄRZ
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
        <Typography style={{ marginTop: 8 }}>
          Wir öffnen wieder. Ab 8. März ist das Training wieder möglich. Derzeit
          arbeiten wir auf Hochtouren. Wir werden euch zeitnah via E-Mail
          informieren. Bis dahin bitten wir keine Anfragen zu machen. Wir freuen
          uns auf euch.
        </Typography>
      </div>
    </div>
  );
}
