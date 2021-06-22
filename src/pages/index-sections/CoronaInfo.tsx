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
            Wir haben geöffnet! Ab Freitag keine Terminvergabe mehr notwendig.
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
          <Typography variant="h6">
            Für den Standort Kassel &amp; Vellmar
          </Typography>
          <p>
            Bislang ist <b>ein Trainingstermin pro Woche</b> für dich möglich.
            Sollte es weitere Lockerungen geben, wird diese Regelung bestimmt
            geändert.
          </p>
          <ul>
            <li>
              Alle, denen es nicht möglich ist auf unsere App zuzugreifen,
              können den Trainingstermin auch über Telefon buchen.
            </li>
            <li>
              Die Trainingstermine gibt es immer nur für{" "}
              <b>1 Woche im voraus</b>.
            </li>
            <li>
              Der Trainingstermin beginnt immer zur vollen Stunde. Dein Training
              ist beschränkt auf <b>50 Minuten</b>.
            </li>
            <li>
              Die bisher gültigen Hygieneregeln bleiben bestehen: 3 m Abstand,
              Geräte nach Benutzung desinfizieren, Händedesinfektion nutzen usw.
            </li>
            <li>Umkleiden und Duschen bleiben vorerst geschlossen.</li>
          </ul>
          <p>
            Der Trainingstermin muss vorab über den Dienst <b>MySports</b>{" "}
            gebucht werden. Du kannst dir entweder direkt über deinen Webbrowser{" "}
            einen Termin reservieren oder über die App, siehe unten.{" "}
            <a href="https://www.mysports.com/studio/MWFmaXQ6MTIxMDAwMTQyMA%3D%3D?ref=portal">
              Hier geht's zur 1-a-fit Seite auf MySports!
            </a>{" "}
            Zutritt nur möglich, wenn vorher der Termin gebucht wurde.
          </p>
          <Box display="flex" alignItems="center" mb={2}>
            <Box>
              <a href="https://play.google.com/store/apps/details?id=io.noexcuse.android&hl=de&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <GooglePlayBadge height={40} />
              </a>
            </Box>
            <Box ml={2}>
              <a href="https://apps.apple.com/de/app/mysports/id1206433997">
                <AppstoreBadge height={56} />
              </a>
            </Box>
          </Box>
          <Typography variant="h6">Anleitung für die App</Typography>
          <ul>
            <li>„MySports“ App herunterladen.</li>
            <li>Mit E-Mail Adresse registrieren</li>
            <li>E-Mail von MySports bestätigen</li>
            <li>App öffnen</li>
            <li>auf Kursplan (graues/blaues 🕺Männchen unten) gehen</li>
            <li>oben rechts (3 Striche) Club auswählen</li>
            <li>Kurs buchen</li>
            <li>
              Sollte das nicht funktionieren, bitte eine kurze E-Mail schreiben
            </li>
          </ul>
        </Typography>
      </div>
    </div>
  );
}
