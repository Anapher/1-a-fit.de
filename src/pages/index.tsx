import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Courses from '../index-sections/Courses';
import FitnessInfo from '../index-sections/FitnessInfo';
import ImageSeparator from '../index-sections/ImageSeparator';
import LandingPage from '../index-sections/LandingPage';
import Summary from '../index-sections/Summary';
import WhatWeOffer from '../index-sections/WhatWeOffer';

const useStyles = makeStyles((theme) => ({
   content: {
      background: '#FFFFFF',
      position: 'relative',
      zIndex: 3,
      paddingTop: 15,
      [theme.breakpoints.up('sm')]: {
         paddingTop: 80,
      },
   },
}));

const IndexPage = () => {
   const classes = useStyles();

   return (
      <Layout overlayContent transparentUntil={300}>
         <SEO />
         <LandingPage />
         <div className={classes.content}>
            <div id="studio">
               <Summary />
               <FitnessInfo />
               <Box mt={6} mb={6}>
                  <ImageSeparator />
               </Box>
               <WhatWeOffer />
            </div>
            <Box mt={8}>
               <Courses />
            </Box>
         </div>
      </Layout>
   );
};

export default IndexPage;
