import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const rows = [
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
  { column1: "Project A", column2: "Project A" },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& td, & th": {
      border: "none",
      padding: "2rem",
    },
  },
});

const ProjectsList = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
      <Table size="small" className={classes.table} sx={{ border: "none" }}>
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
