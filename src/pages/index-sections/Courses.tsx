import React from 'react';
import {
   Table,
   TableRow,
   TableCell,
   TableHead,
   makeStyles,
   TableBody,
   Typography,
   ThemeProvider,
   createTheme,
   Box,
} from '@material-ui/core';
import { container, logoProportion } from '../../style/shared';
import { graphql, useStaticQuery } from 'gatsby';
import { sectionHeaderText } from '../../style/theme-shared';
import LogoIcon from '../../assets/logo_full_white.svg';
import StaticImageParallax from '../../components/StaticImageParallax';
import { StaticImage } from 'gatsby-plugin-image';

const darkTheme = createTheme({
   palette: {
      type: 'dark',
   },
});

const useStyles = makeStyles({
   container: {
      ...container,
   },
   tableCell: {
      backgroundColor: '#27ae60',
      color: 'white',
      width: 'auto',
      padding: 8,
      textAlign: 'center',
      borderRadius: 8,
   },
   table: {
      width: '100%',
      whiteSpace: 'nowrap',
   },
   sectionHeaderText: {
      ...sectionHeaderText,
   },
});

const times = ['07.00', '09.00', '11.00', '17.30', '19.00', '21.00'];
const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

const cellColors = {
   ['Bauch-Fit']: 'rgba(39, 174, 96, 0.75)',
   ['Rücken-Fit']: 'rgba(52, 152, 219, 0.75)',
   ['Bauch/Beine/Po']: 'rgba(22, 160, 133, 0.75)',
};

export default function Courses() {
   const {
      site: {
         siteMetadata: { courses },
      },
   } = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               courses
            }
         }
      }
   `);

   const classes = useStyles();
   return (
      <ThemeProvider theme={darkTheme}>
         <StaticImageParallax
            aspectRatio={1.77}
            image={
               <StaticImage
                  src="../../assets/landing-page/background-courses.jpg"
                  layout="fullWidth"
                  alt="Courses"
                  objectFit="cover"
               />
            }
            style={{
               paddingTop: 80,
               paddingBottom: 80,
               maxWidth: '100vw',
            }}
         >
            <div className={classes.container} id="kurse">
               <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                  <Typography variant="h3" className={classes.sectionHeaderText} color="textPrimary" gutterBottom>
                     Kurse
                  </Typography>
                  <LogoIcon width={80} height={80 * logoProportion} />
               </Box>
               <div style={{ overflowX: 'auto', marginTop: 16 }}>
                  <Table className={classes.table}>
                     <TableHead>
                        <TableRow>
                           <TableCell />
                           {days.map((x) => (
                              <TableCell key={x} align="center">
                                 {x}
                              </TableCell>
                           ))}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {courses.map((x, i) => (
                           <TableRow key={i}>
                              <TableCell>{times[i]} Uhr</TableCell>
                              {x.map((y, j) => (
                                 <TableCell key={j} align="center">
                                    {y && (
                                       <div className={classes.tableCell} style={{ backgroundColor: cellColors[y] }}>
                                          {y}
                                       </div>
                                    )}
                                 </TableCell>
                              ))}
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </div>
            </div>
         </StaticImageParallax>
      </ThemeProvider>
   );
}
