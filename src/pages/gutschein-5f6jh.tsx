import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { container } from '../style/shared';

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
               gatsbyImageData(layout: CONSTRAINED, width: 500)
            }
         }
         voucher2: file(relativePath: { eq: "voucher/voucher_k2cgi.png" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 500)
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
                     <GatsbyImage className={classes.voucherImage} image={getImage(voucher1)} alt="" />
                  </div>
                  <Typography gutterBottom>
                     Gutschein einfach ausdrucken und mitbringen oder diese Website vorzeigen.
                  </Typography>
                  <Button variant="contained" color="secondary" href={voucherUrl1} target="_blank">
                     Hier PDF herunterladen
                  </Button>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className={classes.voucherContainer}>
                     <GatsbyImage className={classes.voucherImage} image={getImage(voucher2)} alt="" />
                  </div>
                  <Typography gutterBottom>
                     Gutschein einfach ausdrucken und mitbringen oder diese Website vorzeigen.
                  </Typography>
                  <Button variant="contained" color="secondary" href={voucherUrl2} target="_blank">
                     Hier PDF herunterladen
                  </Button>
               </Grid>
            </Grid>
         </div>
      </Layout>
   );
}
