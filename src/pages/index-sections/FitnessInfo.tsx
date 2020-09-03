import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useRef, useState } from "react";
import { container } from "../../style/shared";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
  },
  roundedImage: {
    borderRadius: 24,
    boxShadow: theme.shadows[11],
    marginBottom: 16,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 48,
      marginRight: 48,
    },
  },
  membershipButton: {
    borderRadius: 36,
    color: "black",
    borderColor: "black",
    minWidth: 400,
    [theme.breakpoints.down("xs")]: {
      minWidth: 0,
      width: "100%",
    },
  },
}));

export default function FitnessInfo() {
  const classes = useStyles();
  const downloadElement = useRef();
  const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);

  const {
    fitness,
    lifestyle,
    health,
    egym,
    egymApp,
    globus,
    contract,
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      fitness: file(relativePath: { eq: "overview/fitness.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lifestyle: file(relativePath: { eq: "overview/lifestyle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      health: file(relativePath: { eq: "overview/health.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      egym: file(relativePath: { eq: "landing-page/egym/logo.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      egymApp: file(
        relativePath: {
          eq: "landing-page/egym/eGym_Fitness_App_Trainingsplan_direkt_aufs_Handy.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      globus: file(
        relativePath: {
          eq: "landing-page/egym/PT_w30m30trainer_2158_small.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contract: file(relativePath: { eq: "downloads/Mitgliedsvertrag.pdf" }) {
        publicURL
        name
      }
      allFile(filter: { relativePath: { regex: "/landing-page/carousel/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 90, maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={classes.container} id="studio">
      {/* <Carousel
        images={edges.map(x => ({
          fluid: x.node.childImageSharp.fluid,
        }))}
      /> */}
      <Grid container spacing={6} style={{ margin: 0, width: "100%" }}>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={fitness.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Fitness</Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={lifestyle.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Lifestyle</Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={health.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Gesundheit</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="outlined"
          color="secondary"
          href={contract.publicURL}
          className={classes.membershipButton}
          target="_blank"
        >
          Jetzt Mitglied werden
        </Button>
      </Box>
      <>
        <Typography variant="h4" align="center" gutterBottom>
          Was wir bieten
        </Typography>
        <Grid container spacing={4} style={{ marginBottom: 32 }}>
          <Grid item md={6} xs={12}>
            <Card>
              <CardMedia
                style={{ height: 250 }}
                component={Img}
                fluid={egymApp.childImageSharp.fluid}
                title="egym"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Entdecke die nächste Generation Fitnessgeräte von
                  <Img
                    fixed={egym.childImageSharp.fixed}
                    style={{ marginLeft: 12 }}
                  />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Der egym Zirkel in deinem 1a fit ermöglicht es dir, mit
                  innovativer Software schnell deine Trainingsziele zu
                  erreichen. Mit Unterstützung von Deinem Trainer kannst Du über
                  einen Bildschirm Dein individuelles Trainingsprogramm wählen.
                  Abnehmen, Figurtraining, Verbesserung der allgemeinen Fitness,
                  Muskelaufbau oder Reha Training – das Training am eGym-Zirkel
                  lässt keine Wünsche oder Ziele offen.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Mehr erfahren
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                style={{ height: 250 }}
                component={Img}
                fluid={egymApp.childImageSharp.fluid}
                title="egym"
              />
              <CardContent style={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Getränkeflatrate - Trinken Sie was Sie wollen
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Egal ob gekühltes Wasser oder aromatisierte Getränke - für nur
                  4,95€ / Monat können Sie sich ihre 1a fit Flasche so oft
                  auffüllen, wie Sie wollen.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Mehr erfahren
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardMedia
                style={{ height: 250 }}
                component={Img}
                fluid={globus.childImageSharp.fluid}
                title="egym"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Galileo Training - effektiv und gesund trainieren
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mit integrierter Wobbel-Funktion: Das Galileo Tool zum
                  effektiven Training von Gleichgewicht und Koordination. Mit
                  integrierter Smart Coaching-Funktion: Passt das Training
                  automatisch an die Fähigkeiten des Benutzers an.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Mehr erfahren
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </>
    </div>
  );
}
