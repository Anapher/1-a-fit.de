import {
  Box,
  Button,
  ButtonBase,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { container, fixedFullWidthGrid } from "../../style/shared";

const useStyles = makeStyles(theme => ({
  container,
  fixedFullWidthGrid,
  roundedButton: {
    borderRadius: 24,
    boxShadow: theme.shadows[11],
    marginBottom: 16,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 48,
      marginRight: 48,
    },
  },
  gridItemFill: {
    display: "flex",
    flexDirection: "column",
  },
  roundedImage: {
    width: "100%",
    borderRadius: 24,
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

  const { fitness, lifestyle, health, contract } = useStaticQuery(graphql`
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

  const paradigma = [
    { name: "Fitness", img: fitness.childImageSharp.fluid },
    { name: "Lifestyle", img: lifestyle.childImageSharp.fluid },
    { name: "Gesundheit", img: health.childImageSharp.fluid },
  ];

  return (
    <div className={classes.container}>
      <Grid container spacing={6} className={classes.fixedFullWidthGrid}>
        {paradigma.map(x => (
          <Grid
            item
            key={x.name}
            sm={4}
            xs={12}
            className={classes.gridItemFill}
          >
            <ButtonBase className={classes.roundedButton}>
              <Img fluid={x.img} className={classes.roundedImage} />
            </ButtonBase>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">{x.name}</Typography>
            </Box>
          </Grid>
        ))}
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
    </div>
  );
}
