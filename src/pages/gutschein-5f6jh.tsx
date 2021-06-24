import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import { container } from "../style/shared";

const useStyles = makeStyles({
  container: {
    ...container,
    paddingTop: 32,
    paddingBottom: 32,
  },
});

export default function Gutschein2021() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <Typography variant="h4">
          Gutschein für einen Monat Gratis trainieren im 1a fit!
        </Typography>
      </div>
    </Layout>
  );
}
