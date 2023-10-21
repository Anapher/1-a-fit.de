import to from '../utils/to';
import { Box, Button, ButtonBase, Grid, makeStyles, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { container, fixedFullWidthGrid } from '../style/shared';
import _ from 'lodash';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
   container,
   fixedFullWidthGrid,
   roundedButton: {
      borderRadius: 24,
      boxShadow: theme.shadows[11],
      marginBottom: 16,
      [theme.breakpoints.down('xs')]: {
         marginLeft: 48,
         marginRight: 48,
      },
   },
   gridItemFill: {
      display: 'flex',
      flexDirection: 'column',
   },
   roundedImage: {
      width: '100%',
      borderRadius: 24,
   },
   membershipButton: {
      borderRadius: 36,
      color: 'black',
      minWidth: 260,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[6],
      margin: theme.spacing(2),
      textAlign: 'center',

      [theme.breakpoints.down('xs')]: {
         minWidth: 0,
         width: '100%',
      },
      '&:hover': {
         backgroundColor: theme.palette.secondary.light,
      },
   },
   membershipButtonContainer: {
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
         flexDirection: 'column',
      },
   },
}));

export default function FitnessInfo() {
   const classes = useStyles();

   const {
      allMdx: { edges },
      contract12,
      contract24,
   } = useStaticQuery(graphql`
      query {
         allMdx(filter: { internal: { contentFilePath: { regex: "/fitnessinfo/" } } }) {
            edges {
               node {
                  frontmatter {
                     image {
                        childImageSharp {
                           gatsbyImageData(layout: CONSTRAINED, width: 500)
                        }
                     }
                     title
                     orderNumber
                     slug
                  }
               }
            }
         }
         contract12: file(relativePath: { eq: "downloads/Mittgliedsvertrag_12_Monate.pdf" }) {
            publicURL
            name
         }
         contract24: file(relativePath: { eq: "downloads/Mittgliedsvertrag_24_Monate.pdf" }) {
            publicURL
            name
         }
      }
   `);

   return (
      <div className={classes.container}>
         <Grid container spacing={6} className={classes.fixedFullWidthGrid}>
            {_.orderBy(edges, (x) => x.node.frontmatter.orderNumber).map(({ node }) => (
               <Grid item key={node.frontmatter.orderNumber} sm={4} xs={12} className={classes.gridItemFill}>
                  <ButtonBase
                     className={classes.roundedButton}
                     {...to(`pages/${node.frontmatter.slug}`)}
                     aria-label={node.frontmatter.title}
                  >
                     <GatsbyImage
                        alt={node.frontmatter.title}
                        image={getImage(node.frontmatter.image)}
                        className={classes.roundedImage}
                        imgClassName={classes.roundedImage}
                     />
                  </ButtonBase>
                  <Box display="flex" justifyContent="center">
                     <Typography variant="h6">{node.frontmatter.title}</Typography>
                  </Box>
               </Grid>
            ))}
         </Grid>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
            className={classes.membershipButtonContainer}
         >
            <Button
               variant="outlined"
               color="secondary"
               href={contract12.publicURL}
               className={classes.membershipButton}
               target="_blank"
            >
               Jetzt mit Testabo starten
            </Button>
            <Button
               variant="outlined"
               color="secondary"
               href={contract24.publicURL}
               className={classes.membershipButton}
               target="_blank"
            >
               Jetzt mit Sparabo starten
            </Button>
         </Box>
      </div>
   );
}
