import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';
import axios from "axios";
import base_url from '../api/api';
import {toast}  from 'react-toastify';
 const AllCourse=()=>{
const [courses,setCourse]=useState([
// {id:1,title:"java",description:"java is programing language"},
// {id:2,title:"python",description:"python is programming language"},
// {id:3,title:"c++",description:"c++ is programming language"},

]);

useEffect(()=>{
    axios.get(`${base_url}/course`).then(
        (Response)=>{
            setCourse(Response.data);
            toast.success("done is loaded");
        },(error)=>{
         toast.error("something went wrong"); 
        }

        
    )
  
},[]) 
return(    
   <div>
    {
    courses.length>0?courses.map((item)=> 
    {
        return(
            <div key={item.id}>
                <Course courses={item}/>

                </div>
        )
    }):"no data present"

    }
    </div>
 
)
 }

export default AllCourse;