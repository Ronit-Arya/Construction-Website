import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default class Navbar extends Component {
  constructor(){
      super();
      this.state={
          show: true,
      }
      
  }
  render() {
  return (
    <>
    
<div className="bg-gradient">
    <nav className="navbar navbar-expand-lg py-4">
       <div className="container-fluid  mx-0 px-2 px-md-5 mx-md-0">
          <Link to="/Home" className="navbar-brand ms-4">
              <img  src='./images/logo-light.png' alt="Logo" width={200}/>
          </Link>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
           {this.state.show ? <FiMenu /> : <IoCloseSharp />}
      
           </button>
        
          <div className={this.state.show ? 'collapse navbar-collapse col-md-5' : 'collapse navbar-collapse active'}>

          <ul className="navbar-nav text-start  text-md-center">
           <li className="nav-item">
           <Link to="/Home" className="nav-link a mt-2 mt-md-0" aria-current="page">Home</Link>
           </li>

          <li className="nav-item">
           <Link to="/About" className="nav-link a" aria-current="page" >About Us</Link>
          </li>

          <li className="nav-item">
           <Link to="/Services" className="nav-link a" aria-current="page" >Services</Link>
          </li>

          <li className="nav-item">
           <Link to="/Blog" className="nav-link a" aria-current="page" >Blog</Link>
          </li>

           <li className="nav-item">
           <Link to="/Project" className="nav-link a" aria-current="page" >Project</Link>
           </li>

          <li className="nav-item">
           <Link to="/Contact" className="nav-link a mb-md-0 mb-2" aria-current="page" >Contact Us</Link>
          </li>
       </ul> 


      </div>
     

       

     </div>
   </nav>
 </div>

    </>
  )
}
}
