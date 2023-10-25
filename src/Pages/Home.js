import React,{useEffect, useState} from 'react'
import { makeStyles, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from 'react-redux';
import { deleteStudent, loadStudent } from '../Redux/Actions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
     
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  
  
  


const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students }  = useSelector( state => state.data);
  
 

  // console.log(JSON.stringify(students));

  useEffect(() => {
    dispatch(loadStudent());
  }, [dispatch]);
 
  const [open, setOpen] = React.useState(false);

  const handleDelete = (id) => {
    setOpen(true);
    dispatch(deleteStudent(id))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      
      <Button variant="contained" sx={{marginTop:10}} onClick={()=> navigate('/addStudents')}>
      Add User
    </Button>
          <TableContainer component={Paper} >
      <Table sx={{ minWidth: 100 , marginTop:4}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">id</StyledTableCell>
            <StyledTableCell align="right">firstName</StyledTableCell>
            <StyledTableCell align="right">lastName</StyledTableCell>
            <StyledTableCell align="right">age</StyledTableCell>
            <StyledTableCell align="right">major</StyledTableCell>
            <StyledTableCell  align='center' >status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
   { students && Array.isArray(students) && students.map((students) => (
               <StyledTableRow key={students.id}>
                <StyledTableCell align="right">
                 {students.id}
               </StyledTableCell>
               <StyledTableCell align="right">
                 {students.firstName}
               </StyledTableCell>
               <StyledTableCell align="right">{students.lastName}</StyledTableCell>
               <StyledTableCell align="right">{students.age}</StyledTableCell>
               <StyledTableCell align="right">{students.major}</StyledTableCell>
             
               <Button variant="contained" color="success"  spacing={5} onClick={()=> navigate(`/editStudent/${students.id}`)}>
        EDIT
      </Button>
      <Button variant="contained"  color="error"  sx={{ mx: 'auto', m: 2}} onClick={()=> handleDelete(students.id)}>
        DELETE
      </Button>
      
             </StyledTableRow>
            ))} 
              <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Student Data will be deleted
        </Alert>
      </Snackbar>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home
