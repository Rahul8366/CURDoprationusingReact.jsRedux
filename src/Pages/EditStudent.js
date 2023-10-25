import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getsinglestudent, updateStudent } from '../Redux/Actions';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditStudent = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getsinglestudent(id));
  }, [dispatch, id]);

  const { students } = useSelector((state) => state.data);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    age: '',
    major: '',
  });

  useEffect(() => {
    if (students) {
      setState({ ...students });
    }
  }, [students]);

  const { firstName, lastName, age, major } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState ({
      ...state,
      [name]: value,
    });
  };

  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !age || !major) {
      setError('Please input all the input fields');
      setOpen(true);
    } else {
      dispatch(updateStudent(state,id));
      navigate('/');
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', width: '250px', marginTop: '20px', marginLeft: '575px' }}>Edit Students</h2>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onSubmit={handleSubmit}>
        <TextField name="firstName" label="First Name" value={firstName || ''} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
        <TextField name="lastName" label="Last Name" value={lastName || ''} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
        <TextField name="age" label="Age" value={age || ''} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
        <TextField name="major" label="Major" value={major || ''} onChange={handleChange} id="fullWidth" style={{ width: '250px', marginTop: '20px' }} /><br />
        <Button variant="contained" color="success" style={{ alignSelf: 'center', width: '150px', marginTop: '20px', marginLeft: '75px' }} onClick={handleSubmit}>
          Update
        </Button>
      </FormControl>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditStudent;
