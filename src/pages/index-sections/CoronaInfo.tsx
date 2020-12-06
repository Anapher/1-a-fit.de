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
          <Typography variant="h5">
            AUF ANORDNUNG DER BUNDESREGIERUNG WIRD DAS 1-A-FIT BIS 20. DEZEMBER
            2020 GESCHLOSSEN!
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
        <Typography>
          <p>
            Wir sind bestürzt, dass uns die ANORDNUNG DER BUNDESREGIERUNG trotz
            aller Anstrengungen und Vorkehrungen, die wir in den vergangenen
            Wochen und Monaten getroffen haben, zu einer vorübergehenden
            Schließung unserer Fitnessstudios zwingt. Wir haben alles getan, um
            die Gesundheits- und Hygienestandards bestens zu erfüllen, um dir,
            liebes Mitglied, ein sicheres Training gewährleisten zu können.
          </p>
          <p>
            Wir sind dir von Herzen dafür dankbar, dass du die Regeln von Anfang
            an befolgt hast und so aktiv mitgearbeitet hast. Du hast gesunden
            Menschenverstand, Rücksichtnahme und Verantwortung bewiesen. Du hast
            es uns und allen anderen ermöglicht, gemeinsam in dieser Krise
            Fitness betreiben zu können und zwar so, wie wir es lieben: im
            1-a-fit!
          </p>
          <p>
            Solltest du uns weiterhin unterstützen, sind wir dir sehr dankbar.
            Damit trägst du maßgeblich dazu bei, dass dein Studio auch nach dem
            Lockdown wie gewohnt für dich da ist und du einen Ort für dein
            Training findest. Die Zeit der Schließung wird wie beim ersten
            Lockdown an ein mögliches Vertragsende angehangen. Es geht dir
            nichts verloren.
          </p>
          <p>
            Gern möchten wir dich dabei unterstützen, dich auch während der
            Studioschließung zu Hause fit zu halten. Denn genau das ist in der
            aktuellen Situation besonders wichtig. Für ein effektives und
            abwechslungsreiches Workout in den eigenen vier Wänden erhältst du
            regelmäßig Tipps auf unseren social media Kanälen bei Facebook und
            Instagram
          </p>
        </Typography>
      </div>
    </div>
  );
}
