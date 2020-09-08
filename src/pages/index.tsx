import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Courses from "./index-sections/Courses";
import FitnessInfo from "./index-sections/FitnessInfo";
import LandingPage from "./index-sections/LandingPage";
import Map from "./index-sections/Map";
import WhatWeOffer from "./index-sections/WhatWeOffer";

const useStyles = makeStyles(theme => ({
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 80,
    },
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout overlayContent transparentUntil={300}>
      <SEO />
      <LandingPage />
      <div className={classes.content}>
        <div id="studio">
          <FitnessInfo />
          <Box mt={8}>
            <WhatWeOffer />
          </Box>
        </div>
        <Box mt={16}>
          <Courses />
        </Box>
        <Map />
      </div>
    </Layout>
  );
};

export default IndexPage;
