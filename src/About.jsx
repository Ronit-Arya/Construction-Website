import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import './Style.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,  
  });
  return (
    <>
    <div className="about-bg">
     <Navbar/>
     <div className="about-us-content">
      <h1 className="text-center text-white ">About Us</h1>
      <p className="text-center text-white">We are a leading construction company with over 10 years of experience in delivering high-quality projects. Our team of experts is dedicated to providing innovative solutions and exceptional service to our clients.</p>
     </div>
    </div>


       <div className="container-fluid hero-section">

      <div className="row p-md-4 mt-md-5 p-2 mt-5">
        <div className="col-md-5 about-img mt-3 col-12">
          <img src="./images/about-us-img.png" alt="" className='' />
        </div>

        <div className="col-md-6 ms-0 ms-md-5 about-content mt-md-0 mt-5">
          <span className=''>ABOUT US</span>
          <h1>Crafting structures that last a lifetime</h1>
          <p>Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design, regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.</p>

          <div className="bgcolor ps-4 pt-4 py-4">
            <h3 className='mt-2'><FaCheckCircle className='check-i' /> <span className='icon-list-item ms-2'>Comprehensive Services</span></h3>

            <h3 className='mt-2'><FaCheckCircle className='check-i' /> <span className='icon-list-item ms-2'>Advanced Technology</span></h3>

            <h3 className='mt-2'><FaCheckCircle className='check-i' /> <span className='icon-list-item ms-2'>Transparent Communication</span></h3>

             

          </div>

           <Link to="/About" className='main-btn-1 ms-0'>
        <button className='btn-contact btn-contact-1'>About Us<FaArrowRight className='ms-2'/> </button>
        </Link>
        </div>
      </div>
      
    </div>

    <div className="container-fluid our-history">
    <div className="row history-content">
      <div className="col-md-6">
        <img src="./images/company-history-img.jpg" alt="" className='img-fluid' />
        <div className="experience-box">
          <h2>10+</h2>
          <p>Years Of Experience</p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="">
          <h6 className='history'>OUR HISTORY</h6>
          <h1 className='history-title'>Crafting structures that last a lifetime</h1>
          <p className='history-description'>With over 10 years of experience, we have established ourselves as a trusted name in the construction industry. Our journey began with a vision to create structures that not only meet the needs of our clients but also stand the test of time.</p>
          <p className='history-description'>We have successfully completed numerous projects across various sectors, including residential, commercial, and industrial. Our commitment to quality and excellence has earned us a reputation for delivering projects on time and within budget.</p>
        </div>
      </div>
    </div>
    </div>

    <div className="container-fluid">
      <div className="our-mission">

        <div className="row ps-4 pe-4 mt-5">

            <div className="col-md-4  mt-5 mission-box">
            <img src="./images/mission1.png" alt=""  className='img-fluid mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>Our Mission</h1>
              <p className='mission-description'>Our mission is to deliver exceptional construction services that exceed our clients' expectations. We strive to create innovative solutions that enhance the quality of life for communities and contribute to sustainable development.</p>
            </div>
          </div>

           <div className="col-md-4  mt-5 mission-box">
            <Link to="" className='mission-link'>
            <FaEye  className='vision'/>

            </Link>
            <div className="mission-content">
              <h1 className='mission-title'>Our Vision</h1>
              <p className='mission-description'>Our vision is to be a leader in the construction industry, recognized for our commitment to quality, safety, and sustainability. We aim to build lasting relationships with our clients and partners, and to create innovative solutions that meet the evolving needs of our communities.</p>
            </div>
          </div>

           <div className="col-md-4  mt-5 mission-box">
            <img src="./images/value.png" alt=""  className='img-fluid mission-img3'/>
            <div className="mission-content">
              <h1 className='mission-title'>Our Values</h1>
              <p className='mission-description'>We are committed to integrity, quality, and sustainability in all our projects. Our values guide us in building lasting relationships with our clients and partners, and in delivering exceptional results that exceed expectations.</p>
            </div>
          </div>

        </div>
      

      </div>
    </div>

    <div className="container-fluid px-0 ps-0">
      <div className="future-section">
         <h6 className='future-title text-center'>what we do</h6>
          <h1 className='future-subtitle text-center'>Building the future on a
           foundation of excellence</h1>
          <p className='future-description text-center'>We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.</p>
          
          <div className="counter-number-section" ref={ref}>
          
            <div className="row p-1 p-md-5 mt-5 mt-md-0  mx-0">
            <div className="col-md-3 col-6 text-center text-md-start">
              <div className="counter-number">
                <h1 className='counter-number-title'>
                  {inView &&
                  <CountUp start={0} end={99}  duration={4.75}></CountUp>}%

                </h1>
                <p className='counter-number-description'>Buildings Control Approval Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-number">
                <h1 className='counter-number-title'>
                   {inView &&
                  <CountUp start={0} end={250}  duration={4.75}></CountUp>}+
                </h1>
                <p className='counter-number-description'>Active Construction Management</p>
              </div>
            </div>
             <div className="col-md-3 col-6 mt-5 mt-md-0">
              <div className="counter-number">
                <h1 className='counter-number-title'> 
                  {inView &&
                  <CountUp start={0} end={500}  duration={4.75}></CountUp>}+
                </h1>
                <p className='counter-number-description'>Completed Projects Every Year</p>
              </div>
            </div>

            <div className="col-md-3 col-6 mt-5 mt-md-0">
              <div className="counter-number">
                <h1 className='counter-number-title'>
                  {inView &&
                  <CountUp start={0} end={80}  duration={4.75}></CountUp>}M
                </h1>
                <p className='counter-number-description'>Million Euros Turnover In The 2020</p>
              </div>
            </div>
            </div>

          </div>
      </div>
    </div>


    <div className="container-fluid">
      <div className="our-team-section">

       <h6 className='future-title text-center mt-md-5 mt-5 pt-3 pt-md-5'>TEAM</h6>
       <h1 className='future-subtitle text-center'>Our team</h1>
        <p className='future-description text-center'>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>

        <div className="row gap-4 ps-md-4 ps-3 px-3 px-md-4 mt-md-5 mt-3">

          <div className="col-md-4 our-team-box  col-6 mt-5 mt-md-5  mx-0 px-0 ">
            <div className="team-member  ">
              <img src="./images/team-1.jpg" alt="" className='img-fluid' />
              <h4 className='team-member-name'>Benjamin Miller</h4>
              <p className='team-member-role'>Project Manager</p>

                        <div className="social-icon ms-3 mt-md-4 mt-4 mb-3 mb-md-0 text-start">

              <NavLink className="social-i-team ">
                <FaFacebookF />
              </NavLink>

              <NavLink className="social-i-team">
                <BiLogoInstagramAlt />
              </NavLink>

           <NavLink className="social-i-team">
                <FaTwitter />
             </NavLink>

            </div>
            </div>
          </div>

           <div className="col-md-4 our-team-box  col-6 mt-3 mt-md-5  mx-0 px-0 ">
            <div className="team-member">
              <img src="./images/team-2.jpg" alt="" className='img-fluid' />
              <h4 className='team-member-name'>Jane Smith</h4>
              <p className='team-member-role'>Lead Architect</p>

              <div className="social-icon ms-3 mt-md-4 mt-4 mb-3 mb-md-0 text-start ">

              <NavLink className="social-i-team ">
                <FaFacebookF />
              </NavLink>

           <NavLink className="social-i-team">
                <FaTwitter />
             </NavLink>

              <NavLink className="social-i-team">
                <BiLogoInstagramAlt />
              </NavLink>

            </div>
            </div>
          </div>

           <div className="col-md-4 our-team-box  col-6 mt-3 mt-md-5  mx-0 px-0 ">
            <div className="team-member  ">
              <img src="./images/team-3.jpg" alt="" className='img-fluid' />
              <h4 className='team-member-name'>Mike Johnson</h4>
              <p className='team-member-role'>Chief Engineer</p>

                        <div className="social-icon ms-3 mt-md-4 mt-4 mb-3 mb-md-0 text-start ">

              <NavLink className="social-i-team ">
                <FaFacebookF />
              </NavLink>

              <NavLink className="social-i-team">
                <BiLogoInstagramAlt />
              </NavLink>

           <NavLink className="social-i-team">
                <FaTwitter />
             </NavLink>
            </div>
            </div>
          </div>



        </div>
      </div>

    </div>

    <Footer/>
    </>
  )
}

export default About
