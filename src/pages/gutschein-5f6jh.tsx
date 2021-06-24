import { Typography, makeStyles, Button } from "@material-ui/core";
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
    voucher,
    voucherFile: { publicURL: voucherUrl },
  } = useStaticQuery(graphql`
    query {
      voucher: file(relativePath: { eq: "voucher/voucher_5f6jh.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      voucherFile: file(relativePath: { eq: "voucher/voucher_5f6jh.pdf" }) {
        publicURL
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Gutschein" />
      <div className={classes.container}>
        <Typography variant="h4">
          Gutschein für einen Monat Gratis trainieren im 1a fit!
        </Typography>
        <div className={classes.voucherContainer}>
          <Img
            className={classes.voucherImage}
            fluid={voucher.childImageSharp.fluid}
          />
        </div>
        <Typography gutterBottom>
          Gutschein einfach ausdrucken und mitbringen oder diese Website
          vorzeigen.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href={voucherUrl}
          target="_blank"
        >
          Hier PDF herunterladen
        </Button>
      </div>
    </Layout>
  );
}
