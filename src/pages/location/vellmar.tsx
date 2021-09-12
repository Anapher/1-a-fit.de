import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from '../../components/Carousel';
import { makeStyles, Typography } from '@material-ui/core';
import { container } from '../../style/shared';
import { getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles({
   container: { ...container, paddingTop: 32, paddingBottom: 32 },
});

export default function vellmar() {
   const {
      site: {
         siteMetadata: {
            maps: { vellmar },
         },
      },
      allFile: { edges },
   } = useStaticQuery(graphql`
      {
         site {
            siteMetadata {
               maps {
                  vellmar {
                     src
                     info
                  }
               }
            }
         }
         allFile(filter: { relativePath: { regex: "/carousel/vellmar/" } }) {
            edges {
               node {
                  name
                  childImageSharp {
                     gatsbyImageData(layout: CONSTRAINED)
                  }
               }
            }
         }
      }
   `);

   const classes = useStyles();

   return (
      <Layout>
         <SEO title="Vellmar" />
         <div id="vellmar">
            <iframe
               src={vellmar.src}
               frameBorder={0}
               allowFullScreen={false}
               tabIndex={0}
               style={{ border: 0 }}
               width="100%"
               height={400}
            />
            <div className={classes.container}>
               <Typography variant="h6" gutterBottom>
                  Eindrücke von unserem Fitnessstudio in Vellmar
               </Typography>
               <Carousel
                  images={edges.map((x) => ({
                     data: getImage(x.node),
                  }))}
               />
            </div>
         </div>
      </Layout>
   );
}
