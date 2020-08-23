import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import LandingPage from "./index-sections/LandingPage";
import { makeStyles, Box } from "@material-ui/core";
import Courses from "./index-sections/Courses";
import Triangle from "./index-sections/Triangle";

const useStyles = makeStyles(theme => ({
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
    paddingTop: 50,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 120,
    },
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout overlayContent>
      <SEO title="Home" />
      <LandingPage />
      <div className={classes.content}>
        <Triangle />
        <Box mt={16}>
          <Courses />
        </Box>
      </div>
    </Layout>
  );
};

export default IndexPage;
