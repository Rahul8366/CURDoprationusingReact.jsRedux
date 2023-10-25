import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { addStudent } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const AddStudents = () => {
    const[state,setState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
    })
    const { firstName, lastName, age, major } = state;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

     const [error,setError]=useState("");
     const [open, setOpen] = useState(false);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const handelSubmit= (e) => {
        e.preventDefault();
      if(!firstName || !lastName || !age || !major){
        setError("please input all the input Field")
        setOpen(true);
      }
      else{
       dispatch(addStudent(state));
       navigate('/');
       setOpen(true);
      }
     }
     const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <div>
      <h2 style={{ align:'center',width:'250px',marginTop:'20px', marginLeft:'575px'}}>Add Students</h2>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
      <Box
      sx={{
        width: 900,
        maxWidth: '150%',
        mx:'auto',
        
      }}
    >
     <TextField name="firstName" label="First Name" value={firstName} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br></br>
                    <TextField name="lastName" label="Last Name" value={lastName} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
                    <TextField name="age" label="Age" value={age} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
                    <TextField name="major" label="Major" value={major} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
              </Box>
    <Button variant="contained" color="success" style={{ alignSelf:'center',width:'150px',marginTop:'20px', marginLeft:'75px'}} onClick={handelSubmit} >
  Submit
</Button>
    </FormControl>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddStudents;
