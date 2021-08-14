import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { container } from "../style/shared";
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    paddingTop: 32,
    paddingBottom: 32,
  },
  voucherImage: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    maxWidth: 600,
  },
  voucherContainer: {
    margin: theme.spacing(4, 0),
  },
}));

export default function Gutschein2021() {
  const classes = useStyles();

  const {
    voucher1,
    voucher2,
    voucherFile1: { publicURL: voucherUrl1 },
    voucherFile2: { publicURL: voucherUrl2 },
  } = useStaticQuery(graphql`
    query {
      voucher1: file(relativePath: { eq: "voucher/voucher_5f6jh.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      voucher2: file(relativePath: { eq: "voucher/voucher_k2cgi.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      voucherFile1: file(relativePath: { eq: "voucher/voucher_5f6jh.pdf" }) {
        publicURL
      }
      voucherFile2: file(relativePath: { eq: "voucher/voucher_k2cgi.pdf" }) {
        publicURL
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Gutschein" />
      <div className={classes.container}>
        <Typography variant="h4">Zwei Gutscheine verfügbar</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={classes.voucherContainer}>
              <Img
                className={classes.voucherImage}
                fluid={voucher1.childImageSharp.fluid}
              />
            </div>
            <Typography gutterBottom>
              Gutschein einfach ausdrucken und mitbringen oder diese Website
              vorzeigen.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href={voucherUrl1}
              target="_blank"
            >
              Hier PDF herunterladen
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.voucherContainer}>
              <Img
                className={classes.voucherImage}
                fluid={voucher2.childImageSharp.fluid}
              />
            </div>
            <Typography gutterBottom>
              Gutschein einfach ausdrucken und mitbringen oder diese Website
              vorzeigen.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href={voucherUrl2}
              target="_blank"
            >
              Hier PDF herunterladen
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
