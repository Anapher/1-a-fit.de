import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
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

   const { voucherImage } = useStaticQuery(graphql`
      query {
         voucherImage: file(relativePath: { regex: "/voucher_k2cgi.png/" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 500)
            }
         }
      }
   `);

   return (
      <div className={classes.voucherContainer}>
         <GatsbyImage
            className={classes.voucherImage}
            image={getImage(voucherImage)}
            alt={'Jetzt im 1a fit trainieren'}
         />
      </div>
   );
}
