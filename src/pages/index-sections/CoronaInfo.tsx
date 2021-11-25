import { Box, alpha, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import LogoIcon from '../../assets/logo_full.svg';
import { container, logoProportion } from '../../style/shared';
import to from '../../utils/to';

const useStyles = makeStyles((theme) => ({
   root: {
      ...container,
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: 64,
   },
   attentionBox: {
      borderWidth: 0,
      borderLeftWidth: 8,
      marginLeft: -16,
      borderStyle: 'solid',
      borderColor: theme.palette.secondary.light,
      backgroundColor: alpha(theme.palette.secondary.light, 0.15),
      paddingLeft: 8,
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 8,
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.down(576)]: {
         marginLeft: 0,
         paddingRight: 16,
      },
   },
}));

export default function CoronaInfo() {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <div className={classes.attentionBox}>
            <Box display="flex" mb={2}>
               <Typography variant="h5" style={{ flex: 1 }}>
                  Neue Regelungen auf Basis des Bundesinfektionsschutzgesetzes
               </Typography>
               <LogoIcon
                  style={{
                     width: 80,
                     height: 80 * logoProportion,
                     display: 'block',
                     marginRight: 16,
                     marginLeft: 16,
                  }}
               />
            </Box>
            <Typography style={{ marginTop: 16 }} component="span">
               2G = geimpft oder genesen. Ausgenommen sind Kinder und Jugendliche unter 18 Jahre &amp; Menschen, die
               sich aus medizinischen Gründen nicht impfen lassen können.
            </Typography>
         </div>

         <Link to="/gutschein-wo2gmc">
            <StaticImage
               src="../../assets/landing-page/voucher_wo2gmc_banner.png"
               layout="fullWidth"
               alt="Jetzt 1a fit starten, ab 2022 zahlen!"
               objectFit="contain"
               style={{ maxWidth: 280, marginLeft: 'auto', marginRight: 'auto', marginTop: 32 }}
            />
         </Link>
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <Button variant="contained" color="secondary" {...to('/gutschein-wo2gmc')}>
               Mehr erfahren
            </Button>
         </div>
      </div>
   );
}
