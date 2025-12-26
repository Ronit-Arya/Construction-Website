import React from 'react';
import { NavLink } from "react-router-dom";
// import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container-fluid">
        <div className="row pt-5 pb-5  ps-3 px-3">

          <div className="col-md-4 ">
            <NavLink to="/home" className="navbar-brand ms-1 ms-md-4">
              <img src="./images/logo-light.png" alt="" width={220} height={40} />
            </NavLink>

            <p className=' logo-p'>  We are a trusted construction company committed to 
              delivering quality projects on time. 
              With advanced technology and expert teams, we ensure durability, efficiency, and 
              sustainable solutions for all types of construction needs.
            </p>

          </div>

          <div className="col-md-3  mt-5 mt-md-0">
            <h3 style={{ color: '#ffb703' }} className='mb-md-3 mb-4'>Our Services</h3>
            <ul className="navbar-nav   mb-2 mb-lg-0 ">
              <li className="nav-item p-0">
                <NavLink to="/" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />
Building Construction</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Architecture Design</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Building Renovation</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Flooring & Roofing</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Building Maintenance</NavLink>
              </li>
            </ul>

          </div>

          <div className="col-md-2 mt-5 mt-md-0">
            <h3 style={{ color: '#ffb703' }} className='mb-md-3 mb-4'>Company</h3>
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item  p-0">
                <NavLink to="/About" className="nav-link a link-fs text-md-start" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />About Us</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/Services" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Services</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/Blog" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Blog</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/Project" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Project</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/Contact" className="nav-link a link-fs" aria-current="page"><FaRegArrowAltCircleRight className='me-2' />Contact Us</NavLink>
              </li>

            </ul>
          </div>

          <div className="col-md-3 mt-5 mt-md-0">
            <h3 style={{ color: '#ffb703' }} className='mb-md-4 mb-4'>Contact Us</h3>
            <div className="mt-3">
              <NavLink className=" phone">
                <FaPhoneVolume />
              </NavLink>
              <span className='ms-3 phone-num'>+91 12353 45241</span>
            </div>
            <div className="mt-2">
              <NavLink className="email ">
                <MdEmail />
                <span className='ms-3 email-id'>construct24@gmail.com</span>
              </NavLink>
            </div>

            <div className="mt-2">
              <NavLink className="addreass-i">
                <FaLocationDot />
                <span className='ms-3 address-id'>37 San Juan Graaf Florisstraat 22A,3021 CH</span>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
      <div className='footer-border'></div>
      <div className=" mt-4 ms-md-5 ms-4 me-1 me-md-5 copyright"><span className='copyright-text ms-md-0'>Copyright © 2025 Construction | All Rights Reserved. Built with by Ravi Narigara</span>
          <div className="social-icon mt-md-0 mt-4 mb-3 mb-md-0 text-md-start text-center">

              <NavLink className="social-i ">
                <FaFacebookF />
              </NavLink>

              <NavLink className="social-i">
                <BiLogoInstagramAlt />
              </NavLink>

              <NavLink className="social-i">
                <FaTwitter />
              </NavLink>

              <NavLink className="social-i">

                <FaGithub />
              </NavLink>

              <NavLink className="social-i">
                <FaLinkedinIn />
              </NavLink>






            </div>
      </div>
     <div className='footer-border'></div>
    </footer>
  )
}

export default Footer
