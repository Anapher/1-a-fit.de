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
  container,
  fixedFullWidthGrid,
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

  const {
    fitness,
    lifestyle,
    health,
    offers: { edges },
    egymLogo,
    contract,
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
      contract: file(relativePath: { eq: "downloads/Mitgliedsvertrag.pdf" }) {
        publicURL
        name
      }
    }
  `);

  console.log(edges);

  const offers = getFitnessOffers(
    edges.map(x => x.node),
    { egymLogo }
  );

  return (
    <div className={classes.container} id="studio">
      <Grid container spacing={6} className={classes.fixedFullWidthGrid}>
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
      <Box mt={8}>
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
      </Box>
    </div>
  );
}
