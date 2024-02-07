import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import IQuery from "../../types/IQuery";

function Tablle({ consultas }: { consultas: IQuery[] | null }) {
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
            {consultas?.map((line) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">{line.data}</TableCell>
                  <TableCell>{line.horario}</TableCell>
                  <TableCell>{line.nome}</TableCell>
                  <TableCell>{line.profissional[0].nome}</TableCell>
                  <TableCell>{line.profissional[0].especialidade}</TableCell>
                  <TableCell>{line.paciente}</TableCell>
                  <TableCell>{line.modalidade}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tablle;