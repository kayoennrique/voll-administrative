import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

function Tablle() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="custom-table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Horário</TableCell>
              <TableCell>Profissional</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Modalidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">22/03/2022</TableCell>
              <TableCell>08:30</TableCell>
              <TableCell>Kayo Ennrique</TableCell>
              <TableCell>Clinica Geral</TableCell>
              <TableCell>Caroline Carvalho</TableCell>
              <TableCell>Particular</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tablle;