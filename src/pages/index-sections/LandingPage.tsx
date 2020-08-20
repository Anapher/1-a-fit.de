import React from "react";
import Parallax from "../../components/Parallax";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
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
    // backgroundColor: "rgba(0,0,0,.6)",
    // padding: 32,
    // borderRadius: 16,
  },
}));

function LandingPage() {
  const classes = useStyles();
  const {
    background,
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "landing-page/background_bw.jpg" }) {
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
    <Parallax filter image={background.childImageSharp.fluid}>
      <div className={classes.container}>
        <div>
          <Typography
            variant="h1"
            className={classes.titleText}
            style={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </div>
        <Box marginTop={8}>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} lg={6}>
              <div className={classes.card}>
                <Typography variant="h4" className={classes.subtitleText}>
                  Fitness und mehr ab
                </Typography>
                <Typography variant="h3" className={classes.priceTagText}>
                  19,95€ / Monat
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} sm={12} lg={6}>
              <div className={classes.card}>
                <Typography
                  variant="h4"
                  className={classes.subtitleText}
                  gutterBottom
                >
                  Öffnungszeiten
                </Typography>
                <Typography variant="h5" className={classes.openingTimesText}>
                  Mo-So 6:00 bis 24:00 Uhr
                  <br /> Feiertage 8:00 bis 20:00 Uhr
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Parallax>
  );
}

export default LandingPage;
