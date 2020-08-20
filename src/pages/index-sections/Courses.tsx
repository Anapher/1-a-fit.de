import React from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  makeStyles,
  TableBody,
} from "@material-ui/core";
import { container } from "../../style/shared";
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles({
  container: {
    ...container,
  },
});

const times = ["07.00", "09.00", "11.00", "17.30", "19.00", "21.00"];

export default function Courses() {
  const {
    site: {
      siteMetadata: { courses },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          courses
        }
      }
    }
  `);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Montag</TableCell>
            <TableCell>Dienstag</TableCell>
            <TableCell>Mittwoch</TableCell>
            <TableCell>Donnerstag</TableCell>
            <TableCell>Freitag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((x, i) => (
            <TableRow key={i}>
              <TableCell>{times[i]} Uhr</TableCell>
              {x.map(y => (
                <TableCell key={y}>{y}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
