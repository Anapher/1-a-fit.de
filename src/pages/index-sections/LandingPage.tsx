import { makeStyles, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import LogoIcon from "../../assets/logo.svg";
import Parallax from "../../components/Parallax";
import { container } from "../../style/shared";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    zIndex: 12,
    color: "#FFFFFF",
    paddingLeft: 32,
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 55,
    },
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
  },
  card: {
    marginLeft: 48,
    marginRight: 48,
    marginTop: 32,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 15,
    },
  },
  appbarPlaceholder: {
    ...theme.mixins.toolbar,
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
      background: file(relativePath: { eq: "landing-page/background-1a.jpg" }) {
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

  return (
    <Parallax
      filter
      image={background.childImageSharp.fluid}
      style={{ height: "90vh" }}
    >
      <div className={classes.container}>
        <div className={classes.appbarPlaceholder} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LogoIcon className={classes.logo} />
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
        </div>
      </div>
    </Parallax>
  );
}

export default LandingPage;
