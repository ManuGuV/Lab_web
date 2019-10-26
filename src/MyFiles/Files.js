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
import { connect } from 'react-redux';

class fileManager extends React.Component {
  constructor(props){
    super(props);
  }

  useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));
  

  render() {
    
    this.files = this.props.state.fileArr;
    

    return (
      <Paper >
        <Table>
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
            {this.files.map(files => (
              <TableRow>
                <TableCell component="th" scope="row">{files.name}</TableCell>
                <TableCell align="right">{files.type}</TableCell>
                <TableCell align="right">{files.date}</TableCell>
                <TableCell component="th" scope="row">
                  <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Button onClick={() => alert('File deleted')}><img src={Delete} alt="delete" style={{height:'5%', width: '20px'}}/></Button>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Button onClick={() => alert('File Shared')} variant="success">Share</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.rootReducer,
  }
}

const mapDispatchToProps = {
  /*getContact,
  deleteContact,
  setCurrentContact,*/
}

export default connect(mapStateToProps, mapDispatchToProps)(fileManager);