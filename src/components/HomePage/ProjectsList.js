import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const rows = [
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
];

const ProjectsList = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Project A</TableCell>
            <TableCell align="right">Project A</TableCell>
            <TableCell align="right">Project A</TableCell>
            <TableCell align="right">Project A</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell padding="normal" component="th" scope="row">
                {row.column1}
              </TableCell>
              <TableCell align="right">{row.column2}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsList;
