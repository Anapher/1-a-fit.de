import {
  makeStyles,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classnames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import LogoIcon from "../../assets/logo.svg";
import Parallax from "../../components/Parallax";
import { container } from "../../style/shared";
import Socials from "./LandingPageSocials";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
    paddingLeft: 32,
  },
  logo: {
    width: 200,
    height: 84,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 63,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 50,
    },
  },
  subtitleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down(330)]: {
      fontSize: 22,
    },
  },
  priceTagText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      fontWeight: "bold",
    },
  },
  openingTimesText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down(330)]: {
      fontSize: 16,
    },
  },
  card: {
    marginLeft: 48,
    marginRight: 48,
    marginTop: 32,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  appbarPlaceholder: {
    [theme.breakpoints.down("sm")]: {
      height: 90,
      width: "100%",
    },
  },
  titleContainer: {
    zIndex: 12,
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(3px)",
    paddingTop: 48,
    paddingBottom: 48,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
  centerHorizontal: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  horizontalLine: {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: 1,
    width: "calc(100% - 64px)",
  },
  upperHr: {
    marginBottom: 8 /** the info has a default top margin of 32 */,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: -12,
    },
  },
  downHr: {
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const {
    background,
    logo,
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: { eq: "landing-page/background_1a_hell.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Parallax
      filter
      image={background.childImageSharp.fluid}
      style={{ height: "90vh" }}
    >
      <div className={classes.centerHorizontal}>
        <div className={classes.titleContainer}>
          <div className={classes.appbarPlaceholder} />
          <LogoIcon className={classes.logo} />
          <div
            className={classnames(classes.horizontalLine, classes.upperHr)}
          />
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" className={classes.subtitleText}>
                Fitness und mehr ab
              </Typography>
              <Typography variant="h3" className={classes.priceTagText}>
                19,95€ / Monat
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography
                variant="h5"
                className={classes.subtitleText}
                gutterBottom
              >
                Öffnungszeiten
              </Typography>
              <Typography variant="h6" className={classes.openingTimesText}>
                Mo-So 6.00 bis 24.00 Uhr
                <br /> Feiertage 8.00 bis 20.00 Uhr
              </Typography>
            </div>
          </div>
          <div className={classnames(classes.horizontalLine, classes.downHr)} />
          {fullScreen && (
            <Box mt={2}>
              <Socials dense />
            </Box>
          )}
        </div>
        {!fullScreen && (
          <Box mt={4}>
            <Socials />
          </Box>
        )}
      </div>
    </Parallax>
  );
}

export default LandingPage;
