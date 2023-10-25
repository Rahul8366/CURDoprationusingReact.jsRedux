import { ActionType } from './ActionType'
import axios from 'axios'
const baseUrl = process.env.REACT_APP_API;

const getStudents = ( students ) => {

    return {

        type : ActionType.GET_STUDENTS,
    payload: students
    
}
}

const deleteStudents = (  ) => {

    return {

        type : ActionType.DELETE_STUDENTS,
   
    
}
}

const getSingleStudents = ( students  ) => {

    return {

        type : ActionType.GET_SINGLE_STUDENT,
        payload: students
    
}
}

const studentsAdded = (  ) => {

    return {

        type : ActionType.ADD_STUDENTS,
   
    
}
}

const updateStudents = () =>{

    return {
        type: ActionType.UPDATE_STUDENTS,
    }
}

export const loadStudent = () => ( dispatch) => {

    
     axios
    .get(`${baseUrl}`)
    .then( (resp) =>{
        dispatch( getSingleStudents(resp.data)  );
        // console.log("res",resp);
    }) 
    // console.log(response);
}


export const deleteStudent = (id) => ( dispatch) => {

    
    axios
   .delete(`${baseUrl}/${id}`)
   .then( (resp) =>{
       dispatch( deleteStudents(resp.data)  );
       dispatch( loadStudent()  );
       // console.log("res",resp);
   }) 
   // console.log(response);
}

export const addStudent = (students) => ( dispatch) => {

    
    axios
   .post(`${baseUrl}`,students)
   .then( (resp) =>{
       dispatch( studentsAdded(resp.data)  );
    //    dispatch( loadStudent()  );
       // console.log("res",resp);
   }) 
   // console.log(response);
}

export const getsinglestudent = (id) => ( dispatch) => {

    
    axios
   .get(`${baseUrl}/${id}`)
   .then( (resp) =>{
       dispatch( getStudents(resp.data)  );
    //    console.log("res",resp);
   }) 
   // console.log(response);
}

export const updateStudent = (students,id) => ( dispatch) => {

    
    axios
   .put(`${baseUrl}/${id}`,students)
   .then( (resp) =>{
       dispatch( updateStudents(resp.data)  );
    //    dispatch( loadStudent()  );
       // console.log("res",resp);
   }) 
   // console.log(response);
}