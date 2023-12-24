import React from 'react';
import Home from './Home';
import About from './About'
import Service from './Service';
import Gallery from './Gallery';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Footer from './Footer';
import {  BrowserRouter, Routes, Route, } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () => {
  return (
  <>
  <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path= '/' element ={<Home/>}/>
      <Route exact path= '/About' element ={<About/>}/>
      <Route exact path= '/Service' element ={<Service/>}/>
      <Route exact path= '/Gallery' element ={<Gallery/>}/>
      <Route exact path= '/Contact' element ={<Contact/>}/>
      <Route exact path= '/Login' element ={<Login/>}/>
      <Route exact path= '/Register' element ={<Register/>}/>
     </Routes>
     <Footer/>
     
     </BrowserRouter>
  </>
  );
};
export default App;