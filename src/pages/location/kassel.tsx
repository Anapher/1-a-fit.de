import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import { container } from "../../style/shared";

const useStyles = makeStyles({
  container: { ...container, paddingTop: 32, paddingBottom: 32 },
});

export default function kassel() {
  const {
    site: {
      siteMetadata: {
        maps: { kassel },
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
          }
        }
      }
    }
  `);

  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Kassel" />
      <div id="kassel">
        <iframe
          src={kassel.src}
          frameBorder={0}
          allowFullScreen={false}
          tabIndex={0}
          style={{ border: 0 }}
          width="100%"
          height={400}
        />
        <div className={classes.container}>
          <Typography variant="h6" gutterBottom>
            Eindrücke von unserem Fitnessstudio in Kassel
          </Typography>
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src={
                "https://player.vimeo.com/video/469550596?title=0&byline=0&portrait=0"
              }
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
