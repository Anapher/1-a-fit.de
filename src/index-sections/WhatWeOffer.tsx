import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   makeStyles,
   Typography,
   Box,
   useMediaQuery,
   useTheme,
} from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { container, fixedFullWidthGrid, logoProportion } from '../style/shared';
import _ from 'lodash';
import LogoIcon from '../assets/logo_full.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import to from '../utils/to';

const useStyles = makeStyles({
   fixedFullWidthGrid,
   container,
});

export default function WhatWeOffer() {
   const classes = useStyles();

   const {
      allMdx: { edges },
      site: {
         siteMetadata: {
            affilinet: { bodyattackImg, bodyattackUrl },
         },
      },
   } = useStaticQuery(graphql`
      query {
         allMdx(filter: { internal: { contentFilePath: { regex: "/offers/" } } }) {
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
         site {
            siteMetadata {
               affilinet {
                  bodyattackImg
                  bodyattackUrl
               }
            }
         }
      }
   `);

   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
   const isSm = useMediaQuery(theme.breakpoints.down('sm'));

   const cardImageHeight = isMobile ? 130 : 180;

   return (
      <div className={classes.container}>
         <Box
            display="flex"
            flexDirection="row"
            justifyContent={isMobile ? 'center' : 'space-between'}
            alignItems="initial"
            marginBottom={2}
         >
            {!isMobile && !isSm && <div style={{ width: 80 }} />}
            <Typography variant="h4" align="center" gutterBottom>
               Das 1a fit Angebot
            </Typography>
            {!isMobile && (
               <LogoIcon
                  style={{
                     width: 80,
                     height: 80 * logoProportion,
                     display: 'block',
                  }}
               />
            )}
         </Box>
         <Grid container spacing={isMobile ? 2 : 4} className={classes.fixedFullWidthGrid}>
            {_.orderBy(edges, (x) => x.node.frontmatter.orderNumber).map(({ node: { frontmatter } }) => (
               <Grid key={frontmatter.orderNumber} item md={3} sm={4} xs={6}>
                  <Card
                     style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                     }}
                  >
                     <CardMedia title={frontmatter.title} style={{ height: cardImageHeight, overflowY: 'hidden' }}>
                        <GatsbyImage
                           image={getImage(frontmatter.image)}
                           alt={frontmatter.title}
                           style={{ width: '100%', height: '100%' }}
                           objectFit="cover"
                        />
                     </CardMedia>
                     <CardContent style={{ flex: 1 }}>
                        <Typography gutterBottom variant="h6" component="h2">
                           {frontmatter.title}
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size="small" color="primary" {...to(`pages/${frontmatter.slug}`)}>
                           Mehr erfahren
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
            <Grid item md={3} sm={4} xs={6}>
               <Card
                  style={{
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                  }}
               >
                  <CardMedia style={{ height: cardImageHeight }} image={bodyattackImg} title="Bodyattack" />
                  <CardContent style={{ flex: 1 }}>
                     <Typography gutterBottom variant="h6" component="h2">
                        Bodyattack
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" color="primary" href={bodyattackUrl}>
                        Bei Bodyattack einkaufen
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      </div>
   );
}
