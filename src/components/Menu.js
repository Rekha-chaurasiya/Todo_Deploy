import React from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';
import{Link} from 'react-router-dom';
import '../App.css';


 const Menu=()=>
 {
   return(
<div className="list-group py-5">
<ListGroup>

<Link to="/" className='menu'  ><ListGroupItem >Home</ListGroupItem></Link>
<Link to="/addCourse" className='menu'><ListGroupItem>AddCourse</ListGroupItem></Link>

<Link to="/view" className='menu' ><ListGroupItem>ViewCourse</ListGroupItem></Link>
<Link to="/about" className='menu' ><ListGroupItem>About</ListGroupItem></Link>
<Link to="/contact" className='menu' ><ListGroupItem>Contact</ListGroupItem></Link>
</ListGroup>



</div>
    
   ) 
 }
 export default Menu