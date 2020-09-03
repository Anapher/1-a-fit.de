import {
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
import React from "react";
import { container, fixedFullWidthGrid } from "../../style/shared";

type FitnessOffer = {
  desc: string;
  title: React.ReactNode;
  imgFluid: any;
};

type ImageInfo = {
  name: string;
  childImageSharp: { fluid: any };
};

const getFitnessOffers: (images: ImageInfo[], data: any) => FitnessOffer[] = (
  images,
  { egymLogo }
) => [
  {
    desc: "Moderne Fitnessgeräte von Matrix",
    title: "Moderne Fitnessgeräte von Matrix",
    imgFluid: images.find(x => x.name === "matrix").childImageSharp.fluid,
  },
  {
    desc: "Precor",
    title: "Intuitive Ausdauergeräte von Precor",
    imgFluid: images.find(x => x.name === "precor").childImageSharp.fluid,
  },
  {
    desc: "Moderne egym Fitness Geräte",
    title: (
      <>
        Entdecke die nächste Generation Fitnessgeräte von
        <Img
          fixed={egymLogo.childImageSharp.fixed}
          style={{ marginLeft: 12 }}
        />
      </>
    ),
    imgFluid: images.find(x => x.name === "egym").childImageSharp.fluid,
  },
  {
    desc: "Galileo",
    title: "Hier gibt's Galileo Geräte",
    imgFluid: images.find(x => x.name === "galileo").childImageSharp.fluid,
  },
  {
    desc: "Outdoor",
    title: "Outdoor Training",
    imgFluid: images.find(x => x.name === "outdoor").childImageSharp.fluid,
  },
  {
    desc: "Trugge",
    title: "Getränkeflatrate",
    imgFluid: images.find(x => x.name === "coffee").childImageSharp.fluid,
  },
  {
    desc: "Kaffee",
    title: "Kaffee",
    imgFluid: images.find(x => x.name === "coffee").childImageSharp.fluid,
  },
];

const useStyles = makeStyles(theme => ({
  fixedFullWidthGrid,
  container,
}));

export default function WhatWeOffer() {
  const classes = useStyles();

  const {
    offers: { edges },
    egymLogo,
  } = useStaticQuery(graphql`
    query {
      egymLogo: file(
        relativePath: { eq: "landing-page/offers/egym_logo.png" }
      ) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      offers: allFile(
        filter: { relativePath: { regex: "/landing-page/offers/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const offers = getFitnessOffers(
    edges.map(x => x.node),
    { egymLogo }
  );

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Was wir bieten
      </Typography>
      <Grid container spacing={4} className={classes.fixedFullWidthGrid}>
        {offers.map(x => (
          <Grid key={x.desc} item md={4} sm={6} xs={12}>
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
                fluid={x.imgFluid}
                title={x.desc}
              />
              <CardContent style={{ flex: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {x.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Mehr erfahren
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
