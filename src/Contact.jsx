import React from 'react'
import Navbar from './Components/Navbar'
import { NavLink } from 'react-router';
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Footer from './Components/Footer';

const Contact = () => {
  return (
    <>
      <div className="contact-bg">
         <Navbar/>
          <div className="project-content">
              <h1 className='text-center text-white'>Contact Us</h1>
              <p className='text-center'>Let’s work together to turn your vision into reality. Contact us today and discover how we can make your next project a success!</p>
          </div>
         </div>

        <div className="container-fluid">
            <div className="contact-info">
                <div className="row">
                    <div className="col-md-6 p-4 p-md-5 ">
                       <h6 className="contact-title">CONTACT US</h6>
                       <h1 className='contact-subtitle'>Get In Touch We're Here for You</h1>
                       <p className='contact-description'>Connect with us for any inquiries or support. We’re here to help and look forward to hearing from you.</p>
                       <hr />

                     <div className="contact-icon d-inline-block mt-md-0 mt-5">
                          <NavLink className="contact-phone">
                          <FaPhoneVolume />
                           </NavLink>
                           <h3 className="Contact-heading "> Contact 

                           </h3>
                           <p className=' contact-num '>+91 12353 45241</p>
                     </div>
                        <br />
                     <div className="contact-icon d-inline-block mt-md-0 mt-3">
                          <NavLink className="contact-phone">
                          <MdEmail />
                           </NavLink>
                           <h3 className="Contact-heading "> Email 

                           </h3>
                           <p className=' contact-email-id '>construct24@gmail.com</p>
                     </div>  
                        <br />

                         <div className="contact-icon d-inline-block mt-md-0 mt-3">
                          <NavLink className="contact-phone">
                          <FaLocationDot />
                           </NavLink>
                           <h3 className="Contact-heading "> Location

                           </h3>
                           <p className=' contact-address-id'>37 San Juan Graaf Florisstraat 22A,3021 CH</p>
                     </div> 

                    </div>

                    <div className="col-md-6 col-12 contact-form ms-md-0 ms-2  p-4 p-md-5 mt-md-2 mt-5">
                            <h3 className="text-md-start text-center mt-5 mt-md-0">Have Any Questions</h3>
                            <p className="text-md-start text-center mt-md-2 mt-3"> If you have any questions about our construction services, project process, or need guidance on your next build, our team is here to help.</p>
                            <form className="row g-3 mt-4">
                                <div className="mb-3 col-sm-6 col-12">
                                    
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-3">
                                    
                                    <input type="text" className="form-control" id="text" placeholder="Enter your subject" />
                                </div>

                            <div className="mb-3 col-sm-6">
                                    
                                    <input type="text" className="form-control" id="name" placeholder="Enter your Company" />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    
                                    <input type="number" className="form-control" id="phone" placeholder="Enter your phone"/>
                                </div>
                                
                                <div className="mb-3">
                                    
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                                </div>
                                <div to="" className='main-btn ms-0 ms-md-0'>
                                    <button className='btn-contact'>View Projects<FaArrowRight  className='ms-2'/> </button>
                               </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>

          <div class="container-fluid p-4">

        <div class="row mt-5 mt-md-0 p-0 mb-0 mb-md-5">

            <div class="iframe-section mb-0">

                <iframe
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                    title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom" width="100%" height="550px" class="mb-0">
                </iframe>

            </div>

        </div>

    </div>

        <Footer/>
    </>
  )
}

export default Contact
