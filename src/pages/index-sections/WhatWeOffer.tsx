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
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import { container, fixedFullWidthGrid } from "../../style/shared";
import _ from "lodash";
import InfoDialog from "../../components/InfoDialog";

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
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/offers/" } }) {
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
            html
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

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Was wir bieten
      </Typography>
      <Grid container spacing={4} className={classes.fixedFullWidthGrid}>
        {_.orderBy(edges, x => x.node.frontmatter.orderNumber).map(
          ({ node: { frontmatter, html } }) => (
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
                      setDialogChild({ frontmatter, html });
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
      </Grid>
      <InfoDialog open={dialogOpen} onClose={handleCloseDialog}>
        {dialogChild && (
          <>
            <DialogTitle>{dialogChild.frontmatter.title}</DialogTitle>
            <DialogContent>
              <DialogContentText tabIndex={-1} ref={descriptionElementRef}>
                <div dangerouslySetInnerHTML={{ __html: dialogChild.html }} />
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
