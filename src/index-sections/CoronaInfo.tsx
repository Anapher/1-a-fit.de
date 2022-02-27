import { Box, alpha, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import LogoIcon from '../assets/logo_full.svg';
import { container, logoProportion } from '../style/shared';
import to from '../utils/to';

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
         <Link to="/gutschein-wo2gmc">
            <StaticImage
               src="../assets/landing-page/voucher_wo2gmc.png"
               layout="fullWidth"
               alt="4,95€ für die ersten fünf Monate!"
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
