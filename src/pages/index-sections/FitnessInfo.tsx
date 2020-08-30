import React, { useRef, useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { container } from "../../style/shared";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "../../components/Carousel";
import eGym_Krafttraining_fuer_jedermann from "../../assets/eGym_Krafttraining_fuer_jedermann.mp4";
import HoverVideoPlayer from "../../components/HoverVideoPlayer";

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
    egymAd,
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
          fluid(maxWidth: 400) {
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

  const signUp = () => {
    downloadElement.current!.click();
    setSignUpDialogOpen(true);
  };

  const closeSignUpDialog = () => setSignUpDialogOpen(false);

  return (
    <div className={classes.container}>
      <Carousel
        images={edges.map(x => ({
          fluid: x.node.childImageSharp.fluid,
        }))}
      />
      <Grid container style={{ marginTop: 64, marginBottom: 64 }} spacing={4}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Box display="flex" alignItems="center">
              <Typography variant="h5" align="center">
                Entdecke die nächste Generation Fitnessgeräte von
                <Img
                  fixed={egym.childImageSharp.fixed}
                  style={{ marginLeft: 12 }}
                />
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Img
            fixed={egymApp.childImageSharp.fluid}
            style={{ width: "100%", height: 320 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
            Der egym Zirkel in deinem 1a fit ermöglicht es dir, mit innovativer
            Software schnell deine Trainingsziele zu erreichen. Mit
            Unterstützung von Deinem Trainer kannst Du über einen Bildschirm
            Dein individuelles Trainingsprogramm wählen. Abnehmen,
            Figurtraining, Verbesserung der allgemeinen Fitness, Muskelaufbau
            oder Reha Training – das Training am eGym-Zirkel lässt keine Wünsche
            oder Ziele offen. Das lästige Einstellen der Sitzposition und des
            Trainingsgewichts findet mit eGym auch endlich ein Ende, weil alles
            elektronisch und automatisch erfolgt.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <HoverVideoPlayer
            src={eGym_Krafttraining_fuer_jedermann}
            style={{ height: 320 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
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
      <Box display="flex" justifyContent="center" mt={8}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={signUp}
          className={classes.membershipButton}
        >
          Jetzt Mitglied werden
        </Button>
        <a
          ref={downloadElement}
          download="Mitgliedsvertrag.pdf"
          href={contract.publicURL}
          style={{ display: "none" }}
        />
      </Box>
      <Dialog
        open={signUpDialogOpen}
        onClose={closeSignUpDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Jetzt Mitglied werden</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Soeben wurde der Mitgliedsvertrag in Ihrem Browser heruntergeladen.
            Bitte drucken Sie diesen aus, geben Sie Ihre Daten an und bringen
            Sie ihn anschließend bei einem unserer Fitness Studios vorbei. Wir
            freuen uns auf Sie!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
