import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import { container } from "../style/shared";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    paddingTop: 32,
    paddingBottom: 32,
  },
}));

export default function Impressum() {
  const classes = useStyles();

  const {
    markdownRemark: { html },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Impressum" } }) {
        html
      }
    }
  `);
  return (
    <Layout>
      <div className={classes.container}>
        <Typography variant="h4">Impressum</Typography>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}
