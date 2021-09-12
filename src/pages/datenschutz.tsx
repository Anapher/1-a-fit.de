import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { container } from '../style/shared';
import { makeStyles, Typography } from '@material-ui/core';
import SEO from '../components/seo';

const useStyles = makeStyles({
   container: {
      ...container,
      paddingTop: 32,
      paddingBottom: 32,
   },
});

export default function Datenschutz() {
   const classes = useStyles();

   const {
      markdownRemark: { html },
   } = useStaticQuery(graphql`
      {
         markdownRemark(frontmatter: { title: { eq: "Datenschutz" } }) {
            html
         }
      }
   `);
   return (
      <Layout>
         <SEO title="Datenschutz" />
         <div className={classes.container}>
            <Typography variant="h4">Datenschutzerklärung nach den Vorgaben der DSGVO</Typography>
            <div dangerouslySetInnerHTML={{ __html: html }} />
         </div>
      </Layout>
   );
}
