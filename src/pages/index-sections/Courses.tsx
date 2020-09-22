import React from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  makeStyles,
  TableBody,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Box,
} from "@material-ui/core";
import { container, logoProportion } from "../../style/shared";
import { graphql, useStaticQuery } from "gatsby";
import { sectionHeaderText } from "../../style/theme-shared";
import BackgroundImage from "gatsby-background-image";
import LogoIcon from "../../assets/logo_full_white.svg";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles({
  container: {
    ...container,
  },
  tableCell: {
    backgroundColor: "#27ae60",
    color: "white",
    width: "auto",
    padding: 8,
    textAlign: "center",
    borderRadius: 8,
  },
  table: {
    width: "100%",
    whiteSpace: "nowrap",
  },
  sectionHeaderText: {
    ...sectionHeaderText,
  },
});

const times = ["07.00", "09.00", "11.00", "17.30", "19.00", "21.00"];
const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

const cellColors = {
  ["Bauch-Fit"]: "rgba(39, 174, 96, 0.75)",
  ["Rücken-Fit"]: "rgba(52, 152, 219, 0.75)",
  ["Bauch/Beine/Po"]: "rgba(22, 160, 133, 0.75)",
};

export default function Courses() {
  const {
    site: {
      siteMetadata: { courses },
    },
    background,
  } = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: { eq: "landing-page/background_alt_darker_edited.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      <BackgroundImage
        fluid={background.childImageSharp.fluid}
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          maxWidth: "100vw",
        }}
      >
        <div className={classes.container} id="kurse">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography
              variant="h3"
              className={classes.sectionHeaderText}
              color="textPrimary"
              gutterBottom
            >
              Kurse
            </Typography>
            <LogoIcon
              style={{
                width: 80,
                height: 80 * logoProportion,
                display: "block",
              }}
            />
          </Box>
          <div style={{ overflowX: "auto", marginTop: 16 }}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {days.map(x => (
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
                          <div
                            className={classes.tableCell}
                            style={{ backgroundColor: cellColors[y] }}
                          >
                            {y}
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>{" "}
        </div>
      </BackgroundImage>
    </ThemeProvider>
  );
}
