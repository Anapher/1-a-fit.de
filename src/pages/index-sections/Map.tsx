import React from "react";
import { container } from "../../style/shared";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  container: {
    ...container,
    paddingTop: 32,
    paddingBottom: 32,
  },
}));

export default function Map() {
  const classes = useStyles();
  const {
    site: {
      siteMetadata: {
        maps: { vellmar, kassel },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          maps {
            kassel {
              src
              info
            }
            vellmar {
              src
              info
            }
          }
        }
      }
    }
  `);

  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Anfahrt
      </Typography>
      <Grid container spacing={3}>
        {[vellmar, kassel].map(m => (
          <Grid item xs={12} md={6}>
            <iframe
              src={m.src}
              frameBorder={0}
              allowFullScreen={false}
              tabIndex={0}
              width="100%"
              height={400}
            />
            <Typography>
              {m.info.split("\n").map((x, i) => (
                <>
                  {i !== 0 && <br />}
                  {x}
                </>
              ))}
            </Typography>
          </Grid>
        ))}
        <Grid xs={12} item>
          <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="body2">
              Geschäftsführer: Stefan Heiland
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
