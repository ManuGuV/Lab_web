import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '../delete.png';
import {Button} from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, type, date) {
  return { name, type, date };
}

const rows = [
  createData('Imagen prueba', 'imagen', '24/10/2019'),
  createData('Texto prueba', 'texto', '24/10/2019'),
  createData('Documento prueba', 'documento', '24/10/2019'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell > Share File </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell component="th" scope="row" className = {classes.tableCell} >
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Delete} alt="delete" style={{height:'5%', width: '20px'}}/>
                </div>
              </TableCell>
              <TableCell component="th" scope="row" className = {classes.tableCell} >
                  <Button variant="success">Share</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}