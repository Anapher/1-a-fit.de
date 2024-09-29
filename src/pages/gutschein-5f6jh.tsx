import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { container } from '../style/shared';
import { Button, makeStyles, Typography } from '@material-ui/core';
import SEO from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
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

export default function Gutschein() {
   const classes = useStyles();

   const { voucherImage, voucherFile } = useStaticQuery(graphql`
      query {
         voucherImage: file(relativePath: { regex: "/voucher_k2cgi.png/" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 500)
            }
         }
         voucherFile: file(relativePath: { regex: "/voucher_k2cgi.pdf/" }) {
            publicURL
         }
      }
   `);

   return (
      <Layout>
         <SEO title="Gutschein" />
         <div className={classes.container}>
            <div className={classes.voucherContainer}>
               <GatsbyImage
                  className={classes.voucherImage}
                  image={getImage(voucherImage)}
                  alt={'Jetzt im 1a fit trainieren'}
               />
            </div>
            <Typography gutterBottom>
               Gutschein einfach ausdrucken und mitbringen, oder diese Website vorzeigen.
            </Typography>
            <Button variant="contained" color="secondary" href={voucherFile.publicURL} target="_blank">
               Hier PDF herunterladen
            </Button>
         </div>
      </Layout>
   );
}
