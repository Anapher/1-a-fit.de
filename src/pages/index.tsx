import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import LandingPage from "./index-sections/LandingPage";
import { makeStyles } from "@material-ui/core";
import Courses from "./index-sections/Courses";

const useStyles = makeStyles({
  content: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout overlayContent>
      <SEO title="Home" />
      <LandingPage />
      <div className={classes.content}>
        <Courses />
      </div>
    </Layout>
  );
};

export default IndexPage;
