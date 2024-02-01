import { Button, Link as MaterialLink, makeStyles, Typography } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { container } from '../style/shared';
import to from '../utils/to';

const quotes = [
   {
      message: 'Fitness hilft bei Stress und verbessert deine mentale Gesundheit.',
      source: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
   },
   {
      message: 'Fitness verbessert dein Gedächtnis und dein Denkvermögen.',
      source: 'https://www.health.harvard.edu/mind-and-mood/exercise-can-boost-your-memory-and-thinking-skills',
   },
   {
      message: 'Fitness fördert dein Selbstbewusstsein.',
      source: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
   },
   {
      message: 'Durch Fitness verbessert sich dein Schlaf.',
      source: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
   },
   {
      message: 'Fitness hilft bei emotionalen oder mentalen Problemen.',
      source: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
   },
   {
      message: 'Studien zeigen, dass Fitness bei milderen Depressionen ebenso gut wie Antidepressiva hilft.',
      source: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
   },
   {
      message: 'Fitness beugt Krankheiten wie Bluthochdruck oder Diabetes vor.',
      source: 'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389',
   },
   {
      message: 'Fitness hilft dir, ein gesundes Körpergewicht zu erreichen oder zu erhalten.',
      source: 'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389',
   },
   {
      message: 'Fitness hilft dir dabei, glücklicher zu werden.',
      source: 'https://www.healthline.com/nutrition/10-benefits-of-exercise#TOC_TITLE_HDR_2',
   },
   {
      message: 'Krafttraining richtig angewendet ist extrem schonend für deinen Körper und Verletzungen sind selten',
      source: '',
   },
];

const CHANGE_INTERVAL = 10000;

const useStyles = makeStyles((theme) => ({
   container: {
      ...container,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   quoteText: {},
   quoteContainer: {
      position: 'relative',
      height: 30,
      width: '100%',
      marginTop: 24,
   },
   quote: {
      position: 'absolute',
      left: 0,
      right: 0,
   },
   currentPromotion: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
         justifyContent: 'flex-end',
         marginRight: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
         justifyContent: 'center',
         marginBottom: theme.spacing(4),
      },
   },
   grid: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(5, 0),

      [theme.breakpoints.up('md')]: {
         flexDirection: 'row',
      },
   },
}));

export default function Summary() {
   const classes = useStyles();

   const shuffledQuotes = _.shuffle(quotes);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const handle = setInterval(() => {
         setIndex((i) => (i + 1) % quotes.length);
      }, CHANGE_INTERVAL);

      return () => {
         clearInterval(handle);
      };
   }, [setIndex]);

   return (
      <div className={classes.container}>
         <span style={{ fontSize: 60, fontFamily: 'Anton', textAlign: 'center' }}>2024 ist dein Jahr</span>
         <div className={classes.quoteContainer}>
            <AnimatePresence>
               <motion.div
                  className={classes.quote}
                  exit={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: -5 }}
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                  key={index}
               >
                  <div style={{ transform: 'translate(-5px, -30px)' }}>
                     <span
                        style={{
                           fontSize: 60,
                           fontFamily: 'Passion One',
                           opacity: 0.4,
                           marginRight: 8,
                        }}
                     >
                        {'"'}
                     </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                     <Typography variant="subtitle1" align="center" className={classes.quoteText}>
                        {shuffledQuotes[index].message}
                     </Typography>
                     <MaterialLink
                        variant="caption"
                        href={shuffledQuotes[index].source}
                        color="textSecondary"
                        style={{ opacity: 0.2 }}
                     >
                        Quelle
                     </MaterialLink>
                  </div>
               </motion.div>
            </AnimatePresence>
         </div>

         <div className={classes.grid}>
            <div className={classes.currentPromotion}>
               <Link to="/gutschein-5f6jh">
                  <StaticImage
                     src="../../content/voucher/voucher_k2cgi.png"
                     layout="fullWidth"
                     alt="Ersten Monat gratis trainieren!"
                     objectFit="contain"
                     style={{ borderRadius: 6, width: 250 }}
                  />
               </Link>
            </div>
            <div>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" align="center">
                     Starte jetzt in deinem 1a fit!
                  </Typography>

                  <Typography variant="caption" align="center">
                     Eine Mitgliedschaft, drei Standorte:{' '}
                     <MaterialLink {...to('/location/vellmar')}>Vellmar</MaterialLink> |{' '}
                     <MaterialLink {...to('/location/kassel')}>Kassel</MaterialLink> |{' '}
                     <MaterialLink {...to('/location/calden')}>Calden</MaterialLink>
                  </Typography>
                  <Typography align="center" style={{ marginTop: 32 }}>
                     Jetzt anrufen und Probetrainings-Termin vereinbaren
                  </Typography>
                  <Button variant="text" color="primary" href="tel:0561-86155516" startIcon={<Phone />}>
                     0561 861 555 16
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
