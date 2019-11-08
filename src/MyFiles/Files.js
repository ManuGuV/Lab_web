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
import { RadialChart } from 'react-vis';
import deleteFile from '../Actions/deleteFile';
import getGraph from '../Actions/getGraph';
import { Link } from 'react-router-dom';

/*const root = {
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: 'auto',
};

const table = {
  minWidth: 650,
};*/

class fileManager extends React.Component {
  constructor(props){
    super(props);
  } 
  
  deleteFile(id) {
    this.props.deleteFile(id);
    this.props.getGraph();
    this.setState({ state: this.state });
  }

  getGraph(){
    this.props.getGraph();
  }

  render() {
    
    this.files = this.props.state.fileArr;
    //this.getGraph();
    console.log(this.props.state.countArr);
    

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
                  <Button variant="outline-danger" onClick={() => this.deleteFile(files.id)}><img src={Delete} alt="delete" style={{height:'5%', width: '20px'}}/></Button>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Link className="btn btn-success" variant="outline" to="/QR">Share</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <RadialChart data={[{angle:this.props.state.countArr[0],label:'image'},{angle:this.props.state.countArr[1],label:'text'},{angle:this.props.state.countArr[2],label:'document'}]} width={300} height={300} showLabels={true}/>
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
  deleteFile,
  getGraph,
}

export default connect(mapStateToProps, mapDispatchToProps)(fileManager);