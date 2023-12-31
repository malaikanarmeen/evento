import React from 'react';
import {NavLink} from 'react-router-dom';
const About = () => {
    return(
        <>
        <div className='Container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">

           
           
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">EventHub</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">Contact</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn " type="submit">
          <NavLink className="nav-link" to="Login">
          Login</NavLink></button>
          <button className="btn " type="submit">
             <NavLink className="nav-link" to="Register">
            Register </NavLink></button>

      </form>
    </div>
  </div>
</nav>
</div>
          </div>

        </div>
        

        </>
    );
};
export default About;