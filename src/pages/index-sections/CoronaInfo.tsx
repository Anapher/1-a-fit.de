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
            <Box display="flex">
               <Typography variant="h5" style={{ flex: 1 }}>
                  Wir haben geöffnet! Keine Terminvergabe mehr notwendig.
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
            <Typography style={{ marginTop: 8 }} component="span">
               Geöffnet mit Abstands- und Hygienekonzept. Das 1a fit freut sich über einen weiteren Schritt hin zur
               Normalität. <br /> Alle Bereiche geöffnet.
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
