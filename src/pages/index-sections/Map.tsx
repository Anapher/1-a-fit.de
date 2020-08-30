import React, { Fragment } from "react";
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
    <div className={classes.container} id="anfahrt">
      <Typography variant="h5">Anfahrt</Typography>
      <Typography variant="body2">Geschäftsführer: Stefan Heiland</Typography>
      <Grid container spacing={3} style={{ marginTop: 8 }}>
        {[vellmar, kassel].map((m, i) => (
          <Grid item xs={12} md={6} key={i.toString()}>
            <iframe
              src={m.src}
              frameBorder={0}
              allowFullScreen={false}
              tabIndex={0}
              style={{ border: 0 }}
              width="100%"
              height={400}
            />
            <Typography>
              {m.info.split("\n").map((x, i) => (
                <Fragment key={x}>
                  {i !== 0 && <br />}
                  {x}
                </Fragment>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
