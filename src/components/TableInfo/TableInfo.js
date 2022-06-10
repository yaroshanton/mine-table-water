import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import './TableInfo.scss';

const columns = [
  { id: 'collectiondate', label: 'Date', minWidth: 170 },
  { id: 'monitoringpoint', label: 'Outfall Indefication', minWidth: 170 },
  {
    id: 'parameter_smarts',
    label: 'Oil and Grease',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'report_year',
    label: 'Total Suspended Solids (TSS)',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'result_display',
    label: 'Biochemical Oxygen Demend (BDD) (5-day @ 20 Deg. C)',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'units',
    label: 'pH',
    minWidth: 170,
    align: 'left',
  },
];

const TableInfo = ({ data }) => {
  const { portal_qry_wq } = data;

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: '85vh' }}>
        <Table sx={{ padding: '10px' }} stickyHeader aria-label="sticky table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell className="tableCell" align="left" colSpan={2}>
                Sample Informations
              </TableCell>
              <TableCell className="tableCell" align="left" colSpan={5}>
                Analytical Parameters
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  className="tableCellInfo"
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {portal_qry_wq.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableInfo;
