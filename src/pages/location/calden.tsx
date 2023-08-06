import { Link as MaterialLink, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { container } from '../../style/shared';
import to from '../../utils/to';

const useStyles = makeStyles({
   container: { ...container, paddingTop: 32, paddingBottom: 32 },
});

export default function calden() {
   const classes = useStyles();

   return (
      <Layout>
         <SEO title="Calden" />
         <div id="calden">
            <div className={classes.container}>
               <Typography variant="h6">Starte deine Fitness, Figur und Gesundheit</Typography>
               <Typography gutterBottom>
                  TOP Ausstattung auf über 500m<sup>2</sup>. Alles was du für dein Training brauchst. Neu ab Oktober
                  2023 in Calden Holl. Str. im Haus Carl Concept.{' '}
                  <b>Ab sofort im 1a fit Vellmar informieren und Startabo abschließen.</b>
               </Typography>
               <Typography gutterBottom>
                  Infos und Anmeldung im <MaterialLink {...to('/location/vellmar')}>1a fit Vellmar</MaterialLink> <br />
                  Brüder Grimm Str. 26 <br />
                  34246 Vellmar <br /> Tel: 0561 861 555 16
               </Typography>
               <Typography gutterBottom>ACHTUNG: die Anzahl der Mitglieder ist begrenzt. Jetzt Abo sichern!</Typography>
            </div>
         </div>
      </Layout>
   );
}
