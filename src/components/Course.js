import React from 'react';
import { Button } from 'reactstrap';

 const Course=({courses})=>{

    return(
    <div className='text-center'>
   <p>{courses.title}</p>
   <p>{courses.description}</p>
   <Button className="bg-success m-2">Add</Button>
   <Button className="bg-danger">Delete</Button>
   </div>
    );
}
export default Course;