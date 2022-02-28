import { makeStyles } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import StaticImageParallax from '../components/StaticImageParallax';

const useStyles = makeStyles((theme) => ({
   image: {
      height: 600,
      [theme.breakpoints.down('md')]: {
         height: 400,
      },
      [theme.breakpoints.down('xs')]: {
         height: 250,
      },
   },
}));

export default function ImageSeparator() {
   const classes = useStyles();

   return (
      <StaticImageParallax
         parallaxScroll={100}
         image={
            <StaticImage
               src="../assets/landing-page/delta-img.jpg"
               layout="fullWidth"
               alt="1a fit Vellmar"
               objectFit="cover"
               style={{ height: '100%', width: '100%' }}
            />
         }
         className={classes.image}
      />
   );
}
