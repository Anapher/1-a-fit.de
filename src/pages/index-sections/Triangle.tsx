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
}));

export default function Triangle() {
  const classes = useStyles();
  const downloadElement = useRef();
  const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);

  const data = useStaticQuery(graphql`
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
      contract: file(relativePath: { eq: "downloads/Mitgliedsvertrag.pdf" }) {
        publicURL
        name
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
      <Grid container spacing={6}>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={data.fitness.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Fitness</Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={data.lifestyle.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Lifestyle</Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Img
            fluid={data.health.childImageSharp.fluid}
            className={classes.roundedImage}
          />
          <Box display="flex" justifyContent="center">
            <Typography variant="h6">Gesundheit</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={6}>
        <Button variant="contained" color="primary" onClick={signUp}>
          Jetzt Mitglied werden
        </Button>
        <a
          ref={downloadElement}
          download="Mitgliedsvertrag"
          href={data.contract.publicURL}
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
