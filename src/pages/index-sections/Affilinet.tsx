import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { container } from "../../style/shared";

const useStyles = makeStyles({ container });

export default function Affilinet() {
  const {
    site: {
      siteMetadata: {
        affilinet: { bodyattackImg, bodyattackUrl },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          affilinet {
            bodyattackImg
            bodyattackUrl
          }
        }
      }
    }
  `);
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      className={classes.container}
    >
      <Typography gutterBottom>
        Unterstütze uns, indem du über folgenden Link bei Body Attack einkaufst:
      </Typography>
      <a href={bodyattackUrl}>
        <img src={bodyattackImg} style={{ width: "100%" }} />
      </a>
    </Box>
  );
}
