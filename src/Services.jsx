import React from 'react'
import Navbar from './Components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import Footer from './Components/Footer';
const Services = () => {
  return (
    <>
    <div className="services-bg">
    <Navbar/>

    <div className="services-content">
        <h1 className='text-center text-white'>Our Services</h1>
        <p className='text-center text-white'>We provide a wide range of services to meet your construction needs.</p>

    </div>

    </div>

    <div className="services">
      <div className="container">

        <div className="row mt-5 pt-5 mt-md-5 pt-md-5">

          <div className="col-md-4 mt-0 mt-md-0">
            <img src="./images/service1.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Zero Harm Everyday</h5>
            <p className='services-description'>We are committed to ensuring the safety and well-being of our workers and clients. Our goal is to achieve zero harm every day through rigorous safety protocols and training.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>

        <div className="col-md-4 mt-5 mt-md-0">
            <img src="./images/service2.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Virtual Construction</h5>
            <p className='services-description'>We utilize advanced technology to create virtual models of construction projects, allowing for better planning, visualization, and collaboration among stakeholders.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>

          <div className="col-md-4 mt-5 mt-md-0">
            <img src="./images/service3.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Build To Last</h5>
            <p className='services-description'>Our construction practices focus on durability and, ensuring that every project undertake is built to last. We use high-quality materials and craftsmanship to achieve this goal.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>

           <div className="col-md-4 mt-5">
            <img src="./images/service4.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Exterior Design</h5>
            <p className='services-description'>Our exterior design services focus on creating visually appealing and functional outdoor spaces for commercial properties. We combine innovative design concepts with practical appeal and value of your property.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>

            <div className="col-md-4 mt-5">
            <img src="./images/service5.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Renovation</h5>
            <p className='services-description'>We work closely with clients to understand their vision and deliver tailored solutions that maximize comfort, efficiency, and value. Trust us to revitalize your property with professionalism and attention to detail.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>

          <div className="col-md-4 mt-5">
            <img src="./images/service6.jpg" alt="service1" className='service-img-box'/>
            <h5 className='services-title'>Sefety management</h5>
            <p className='services-description'>Our safety management services are healthy environment on every construction site. We implement comprehensive safety protocols and conduct regular training to minimize risks and prevent accidents.</p>
            <Link to="/Services" className='services-link'>LEARN MORE <FaArrowRight /></Link>

          </div>



        </div>
      
      </div>
    </div>

       <div className="container-fluid">
        <div className="service-section mt-5">
            <h1 className='text-start text-white ms-5'>Additional Services</h1>
            <p className='text-start text-white ms-5'>We also offer a range of additional services to enhance your construction experience.</p>
            <Link to="" className='main-btn ms-5'>
                <button  className='btn-contact fs-6'>Read More <FaArrowRight className='ms-2'/> </button>
              </Link>
        </div>
    </div>

 <div className="all-services">
        <div className="container-fluid">
            <h6 className='future-title text-center mt-md-5 mt-5 pt-3 pt-md-5'>INCLUDED</h6>
       <h1 className='services-subtitle text-center'>Services</h1>
            <div className="row ps-4 pe-4 mt-0">

            <div className="col-md-3  mt-5 mission-box">
            <img src="./images/service-icon.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>WOOD CUTTING</h1>
              <p className='mission-description'>Wood Cutting is a critical step in construction, involving precise shaping, trimming, and sizing of timber for framing, flooring, roofing, and custom structures. High-grade equipment and skilled craftsmanship ensure accuracy, durability, and seamless integration in building projects.</p>
            </div>
          </div>

           <div className="col-md-3  mt-5 mission-box">
            <img src="./images/service-icon1.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>EXCAVATOR</h1>
              <p className='mission-description'>Excavation is a crucial phase in construction, involving the removal of earth to create foundations, trenches, and other structures. Our excavators are operated by skilled professionals who ensure precision and safety in every project.</p>
            </div>
          </div>

           <div className="col-md-3  mt-5 mission-box">
            <img src="./images/service-icon2.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>ELECTRICIAN</h1>
                <p className='mission-description'>Our electricians are experts in installing, maintaining, and repairing electrical systems. They ensure that all wiring and electrical components meet safety standards and function efficiently, providing reliable power solutions for residential and commercial projects.</p>
            </div>
          </div>

           <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon3.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>SITE SAFETY</h1>
                <p className='mission-description'>Our site safety experts are dedicated to ensuring a safe working environment on all construction projects. They implement safety protocols, conduct regular inspections, and provide training to minimize risks and protect workers.</p>
            </div>
          </div>

           <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon4.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>BRICKWALL</h1>
                <p className='mission-description'>Our brickwall experts specialize in the construction and repair of brick walls, ensuring durability and aesthetic appeal. They are skilled in various bricklaying techniques and work with high-quality materials to deliver exceptional results.</p>
            </div>
          </div>

          <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon5.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>TOOLBOX</h1>
                <p className='mission-description'>Our toolbox experts specialize in providing a wide range of tools and equipment for construction projects. They ensure that all tools are well-maintained, safe to use, and readily available, supporting the efficiency and effectiveness of our construction teams.</p>
            </div>
          </div>

          <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon7.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>CIRCULAR SAW</h1>
                <p className='mission-description'>Our circular saw experts specialize in the operation and maintenance of circular saws for various cutting applications. They ensure that all saws are properly calibrated, safe to use, and capable of delivering precise cuts for both residential and commercial projects.</p>
            </div>
          </div>

          <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon8.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>RULERS</h1>
                <p className='mission-description'>Our rulers experts specialize in providing precise measurement solutions for construction projects. They ensure that all measuring tools are accurate, reliable, and suitable for various applications, supporting the efficiency and effectiveness of our construction teams.</p>
            </div>
          </div>

          <div className="col-md-3 mt-5 mission-box">
            <img src="./images/service-icon9.png" alt=""  className='mission-img'/>
            <div className="mission-content">
              <h1 className='mission-title'>CLAMP</h1>
                <p className='mission-description'>Our clamp experts specialize in providing secure holding solutions for various construction applications. They ensure that all clamps are properly installed, safe to use, and capable of delivering reliable performance for both residential and commercial projects.</p>
            </div>
          </div>

        </div>
        </div>
    </div>

    <div className="container-fluid ps-0 px-0">
        <div className="services-experience">
            <h1 className='text-center'>We have 10 years experience in Constrution</h1>
            <p className='text-center'>Over the years, we have built a reputation for reliability, professionalism, and attention to detail. Our skilled workforce, combined with advanced technology and proven processes, ensures that every project is executed efficiently and safely.</p>
            <Link to="" className='main-btn ms-5'>
                <button  className='btn-contact btn-contact3 fs-6 text-center'>Contact Us<FaArrowRight className='ms-2'/> </button>
              </Link>
        </div>
    </div>

    <Footer/>

    </>
  )
}

export default Services
