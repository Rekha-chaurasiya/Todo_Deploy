import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Homes from './components/homess';


import Menu from './components/Menu';
import { Container,Col ,Row} from 'reactstrap';
import AllCourse from './components/AllCourse';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddCourse from './components/AddCourse';



function App() {
  return (
    <Router>
    <div>
     
    <Header/>
    <Container >
    <Row >
    <Col md="4">
    <Menu/>
    </Col>
      <Col md="8" className='mt-5'>
<Routes>
      <Route path="/"element={<Homes/>}/>
        
      <Route path="/addCourse" element={<AddCourse/>}/>
      
      <Route path="/view" element={<AllCourse/>}/>
      
      </Routes>
    
    </Col>
   
    </Row>
    </Container>
   
    </div>
    </Router>
  );
}

export default App;
