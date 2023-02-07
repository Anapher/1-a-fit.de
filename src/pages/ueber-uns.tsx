import { Grid, makeStyles, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
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
   image: {
      borderRadius: theme.shape.borderRadius,
   },
   sectionContent: {
      [theme.breakpoints.up('md')]: {
         marginBottom: theme.spacing(3),
      },
   },
   imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
         justifyContent: 'flex-end',
      },
   },
}));

type SectionProps = {
   image: React.ReactNode;
   children?: React.ReactNode;
};

function Section({ image, children }: SectionProps) {
   const classes = useStyles();

   return (
      <>
         <Grid item xs={12} md={4} className={classes.imageContainer}>
            <div style={{ maxWidth: 600, borderRadius: 16 }}>{image}</div>
         </Grid>
         <Grid item xs={12} md={8}>
            <div className={classes.sectionContent}>{children}</div>
         </Grid>
      </>
   );
}

export default function UeberUns() {
   const classes = useStyles();

   return (
      <Layout>
         <SEO title="Über uns" />
         <div className={classes.container} id="ueber-uns">
            <Grid container spacing={3}>
               <Section
                  image={
                     <StaticImage
                        className={classes.image}
                        src="../assets/ueber-uns/iphone-410311_640.jpg"
                        alt="iPhone"
                     />
                  }
               >
                  <Typography variant="h5" gutterBottom>
                     Kontakt
                  </Typography>
                  <Typography>
                     Tel: 0561-86155516
                     <br />
                     Kassel Nord
                     <br />
                     Brüder Grimm Str. 26
                     <br />
                     Vellmar
                     <br />
                     <br />
                     Tel: 0561-82082858
                     <br />
                     Kassel Ost
                     <br />
                     Leipziger Str. 149
                     <br />
                     Kassel-Bettenhausen
                  </Typography>
               </Section>
               <Section
                  image={
                     <StaticImage
                        className={classes.image}
                        src="../assets/ueber-uns/sky-climber-820744_640.jpg"
                        alt="Unternehmen"
                     />
                  }
               >
                  <Typography variant="h5" gutterBottom>
                     Unternehmen
                  </Typography>
                  <Typography>
                     Verantwortung
                     <br />
                     Das 1afit steht für Fitness pur. Wir sind uns unserer Aufgabe bewusst und helfen unseren
                     Mitgliedern ihre Ziele zu erreichen.
                     <br />
                     <br />
                     Verbindlichkeit
                     <br />
                     Ergebnis und Erlebnis sind für das 1afit der Anspruch für das Handeln im Bereich Fitness. Hier
                     bieten wir unseren Mitgliedern die besten Systeme um Fitness neu und nachhaltig zu erleben.
                     <br />
                     <br />
                     Vertrauen
                     <br />
                     Durch unser Verhalten und unser Handeln sind wir ein verlässlicher Fitnesspartner für alle
                     Fitnessbegeisterten in der Region Kassel.
                  </Typography>
               </Section>
               <Section
                  image={
                     <StaticImage
                        className={classes.image}
                        src="../assets/ueber-uns/hands-1846428_640.jpg"
                        alt="Sky Climber"
                     />
                  }
               >
                  <Typography variant="h5" gutterBottom>
                     Team
                  </Typography>
                  <Typography>
                     Das 1a fit bietet für Fitness, Lifestyle und Gesundheit ein bestens ausgebildetes, qualifiziertes
                     und motiviertes Team. Freundlichkeit steht hier im Focus alles Handelns. „Wir sind das freundliche
                     Fitnessstudio“
                  </Typography>
               </Section>
               <Section
                  image={
                     <StaticImage
                        className={classes.image}
                        src="../assets/ueber-uns/paint-brush-3207945_640.jpg"
                        alt="Sky Climber"
                     />
                  }
               >
                  <Typography variant="h5" gutterBottom>
                     Jobs
                  </Typography>
                  <Typography>
                     <b>Social Media Assistent / Minijob</b> Dein Leben ist bunt! Du lebst Fitness in allen Bereichen!
                     Bewirb dich und sei Teil unserer Fitnessgemeinschaft. Wenn Du Erfahrnung im Bereich Facebook und
                     Instagram hast, motiviert und kreativ bist, dann suchen wir genau dich.
                  </Typography>
               </Section>
            </Grid>
         </div>
      </Layout>
   );
}
