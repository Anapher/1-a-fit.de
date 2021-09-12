import {
   Box,
   Button,
   ButtonBase,
   Grid,
   makeStyles,
   Typography,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
} from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { container, fixedFullWidthGrid } from '../../style/shared';
import _ from 'lodash';
import InfoDialog from '../../components/InfoDialog';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
   container,
   fixedFullWidthGrid,
   roundedButton: {
      borderRadius: 24,
      boxShadow: theme.shadows[11],
      marginBottom: 16,
      [theme.breakpoints.down('xs')]: {
         marginLeft: 48,
         marginRight: 48,
      },
   },
   gridItemFill: {
      display: 'flex',
      flexDirection: 'column',
   },
   roundedImage: {
      width: '100%',
      borderRadius: 24,
   },
   membershipButton: {
      borderRadius: 36,
      color: 'black',
      minWidth: 400,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[6],

      [theme.breakpoints.down('xs')]: {
         minWidth: 0,
         width: '100%',
      },
      '&:hover': {
         backgroundColor: theme.palette.secondary.light,
      },
   },
}));

export default function FitnessInfo() {
   const classes = useStyles();

   const {
      allMdx: { edges },
      contract,
   } = useStaticQuery(graphql`
      query {
         allMdx(filter: { fileAbsolutePath: { regex: "/fitnessinfo/" } }) {
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
                  }
                  body
               }
            }
         }
         contract: file(relativePath: { eq: "downloads/Mitgliedsvertrag.pdf" }) {
            publicURL
            name
         }
      }
   `);

   const [dialogOpen, setDialogOpen] = useState(false);
   const [dialogChild, setDialogChild] = useState(null);

   const handleCloseDialog = () => setDialogOpen(false);

   const descriptionElementRef = React.useRef<HTMLElement>(null);
   React.useEffect(() => {
      if (dialogOpen) {
         const { current: descriptionElement } = descriptionElementRef;
         if (descriptionElement !== null) {
            descriptionElement.focus();
         }
      }
   }, [dialogOpen]);

   return (
      <div className={classes.container}>
         <Grid container spacing={6} className={classes.fixedFullWidthGrid}>
            {_.orderBy(edges, (x) => x.node.frontmatter.orderNumber).map(({ node }) => (
               <Grid item key={node.frontmatter.orderNumber} sm={4} xs={12} className={classes.gridItemFill}>
                  <ButtonBase
                     className={classes.roundedButton}
                     onClick={() => {
                        setDialogOpen(true);
                        setDialogChild(node);
                     }}
                     aria-label={node.frontmatter.title}
                  >
                     <GatsbyImage
                        alt={node.frontmatter.title}
                        image={getImage(node.frontmatter.image)}
                        className={classes.roundedImage}
                        imgClassName={classes.roundedImage}
                     />
                  </ButtonBase>
                  <Box display="flex" justifyContent="center">
                     <Typography variant="h6">{node.frontmatter.title}</Typography>
                  </Box>
               </Grid>
            ))}
         </Grid>
         <InfoDialog open={dialogOpen} onClose={handleCloseDialog}>
            {dialogChild && (
               <>
                  <DialogTitle>{dialogChild.frontmatter.title}</DialogTitle>
                  <DialogContent>
                     <DialogContentText tabIndex={-1} ref={descriptionElementRef}>
                        {dialogChild && <MDXRenderer>{dialogChild.body}</MDXRenderer>}
                     </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                     <Button onClick={handleCloseDialog} color="primary">
                        Schließen
                     </Button>
                  </DialogActions>
               </>
            )}
         </InfoDialog>
         <Box display="flex" justifyContent="center" mt={4}>
            <Button
               variant="outlined"
               color="secondary"
               href={contract.publicURL}
               className={classes.membershipButton}
               target="_blank"
            >
               Jetzt Mitglied werden
            </Button>
         </Box>
      </div>
   );
}
