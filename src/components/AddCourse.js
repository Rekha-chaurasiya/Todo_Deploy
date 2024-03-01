import axios from 'axios';
import React, { useState } from 'react';
import { Form,FormGroup,Input,Button,Container } from
"reactstrap"
;
import base_url from '../api/api';
import { toast } from 'react-toastify';




const AddCourse=()=>
{
    const [coursedata,setCoursedata]=useState({});
//form handler
const formHandeler =(e)=>{

    addData(coursedata);

    e.preventDefault();
}

const addData=(coursedata)=>
{
    axios.post(`${base_url}/addcourse`,coursedata).then(
        (res)=>{
            toast.success(res);
            console.log(res);

        },(error)=>{
            toast.error("something went wrong");

        }
    )
}
    return(

<Form onSubmit={formHandeler}>
    <FormGroup >
    <label>Course Id</label>
    <Input type="text" placeholder='Enter Course Id' onChange={(e)=>{setCoursedata({...coursedata,Id:e.target.value})}}/>
    </FormGroup>

    <FormGroup>
    <label>Course Title</label>
    <Input type="text" placeholder='Enter Course Title' onChange={(e)=>{setCoursedata({...coursedata,title:e.target.value})}}/>
    </FormGroup>

    <FormGroup>
    <label>Course Description</label>
    <Input type="textarea" placeholder='Enter Course Description' height="250" onChange={(e)=>{setCoursedata({...coursedata,description:e.target.value})}}/>
    </FormGroup>
     <Container>
        <Button className='bg-success m-4' type="submit" >Add Course</Button>
        <Button className='bg-danger'>Clear</Button>
     </Container>
    </Form>



    )
}

export default AddCourse;