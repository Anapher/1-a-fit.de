import { makeStyles, Typography, Button } from '@material-ui/core';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
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

type Props = {
   file: string;
   id: string;
   image: string;
   title: string;
};

type DataQueried = {
   voucherImage: IGatsbyImageData;
   voucherFile: {
      publicURL: string;
   };
};

export const query = graphql`
   query ($image: String, $file: String) {
      voucherImage: file(relativePath: { eq: $image }) {
         childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
         }
      }
      voucherFile: file(relativePath: { eq: $file }) {
         publicURL
      }
   }
`;

export default function Voucher({ data, pageContext }: PageProps<DataQueried, Props>) {
   const classes = useStyles();

   return (
      <Layout>
         <SEO title="Gutschein" />
         <div className={classes.container}>
            <Typography variant="h4">{pageContext.title}</Typography>
            <div className={classes.voucherContainer}>
               <GatsbyImage
                  className={classes.voucherImage}
                  image={getImage(data.voucherImage)}
                  alt={pageContext.title}
               />
            </div>
            <Typography gutterBottom>
               Gutschein einfach ausdrucken und mitbringen, oder diese Website vorzeigen.
            </Typography>
            <Button variant="contained" color="secondary" href={data.voucherFile.publicURL} target="_blank">
               Hier PDF herunterladen
            </Button>
         </div>
      </Layout>
   );
}
