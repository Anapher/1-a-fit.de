import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import {
  container,
  fixedFullWidthGrid,
  logoProportion,
} from "../../style/shared";
import _ from "lodash";
import InfoDialog from "../../components/InfoDialog";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LogoIcon from "../../assets/logo_full.svg";

type FitnessOffer = {
  desc: string;
  title: React.ReactNode;
  imgFluid: any;
};

type ImageInfo = {
  name: string;
  childImageSharp: { fluid: any };
};

const useStyles = makeStyles(theme => ({
  fixedFullWidthGrid,
  container,
}));

export default function WhatWeOffer() {
  const classes = useStyles();

  const {
    allMdx: { edges },
    site: {
      siteMetadata: {
        affilinet: { bodyattackImg, bodyattackUrl },
      },
    },
  } = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/offers/" } }) {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              title
              orderNumber
            }
            body
          }
        }
      }
      site {
        siteMetadata {
          affilinet {
            bodyattackImg
            bodyattackUrl
          }
        }
      }
    }
  `);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogChild, setDialogChild] = useState(null);

  const handleCloseDialog = () => setDialogOpen(false);

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (dialogOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialogOpen]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.container}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="initial"
        marginBottom={2}
      >
        {!isMobile && !isSm && <div style={{ width: 80 }} />}
        <Typography variant="h4" align="center" gutterBottom>
          Das 1a fit Angebot
        </Typography>
        {!isMobile && (
          <LogoIcon
            style={{
              width: 80,
              height: 80 * logoProportion,
              display: "block",
            }}
          />
        )}
      </Box>
      <Grid container spacing={4} className={classes.fixedFullWidthGrid}>
        {_.orderBy(edges, x => x.node.frontmatter.orderNumber).map(
          ({ node: { frontmatter, body } }) => (
            <Grid key={frontmatter.orderNumber} item md={4} sm={6} xs={12}>
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
                  fluid={frontmatter.image.childImageSharp.fluid}
                  title={frontmatter.title}
                />
                <CardContent style={{ flex: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {frontmatter.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setDialogChild({ frontmatter, body });
                      setDialogOpen(true);
                    }}
                  >
                    Mehr erfahren
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
        <Grid item md={4} sm={6} xs={12}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              style={{ height: 250 }}
              image={bodyattackImg}
              title="Bodyattack"
            />
            <CardContent style={{ flex: 1 }}>
              <Typography gutterBottom variant="h6" component="h2">
                Bodyattack
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={bodyattackUrl}>
                Bei Bodyattack einkaufen
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <InfoDialog open={dialogOpen} onClose={handleCloseDialog}>
        {dialogChild && (
          <>
            <DialogTitle>{dialogChild.frontmatter.title}</DialogTitle>
            <DialogContent>
              <DialogContentText tabIndex={-1} ref={descriptionElementRef}>
                {dialogChild && <MDXRenderer>{dialogChild.body}</MDXRenderer>}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Schließen
              </Button>
            </DialogActions>
          </>
        )}
      </InfoDialog>
    </div>
  );
}
