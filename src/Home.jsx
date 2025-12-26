import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import './Style.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Footer from './Components/Footer'; 

const faqData = [
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in a wide range of construction projects, including residential homes, commercial buildings, industrial facilities, and renovation works",
  },
  {
    question: "How do I start a project with your company?",
    answer: "To start a construction project with us, simply get in touch via our contact form, phone, or email.",
  },
  {
    question: "Do you offer a free, no obligation quotation?",
    answer: "Yes, we offer free, no-obligation quotations for all types of construction projects.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a full range of construction services including project planning, architectural design, site preparation, new construction, renovations, interior fit-outs, and post-construction support.",
  },
   {
    question: "We use technology to do the job more quickly?",
    answer: "Yes, we leverage advanced technology and construction management software to streamline processes, improve communication, and enhance project efficiency.",
  },
];

const Home = () => {
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <div className="video-banner">
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src="./public/images/brixo-video.mp4" type="video/mp4" className='bg-gradient'/>
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <Navbar />
        {/* Page Content */}
        <div className="text-white text-start ps-md-5 ps-2 ms-4 ms-md-4">
          <h1 className="font-bold">Building dreams with precision <br/>  and excellence</h1>
          <p className=" mt-4 col-md-9">we specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail. With years of experience and a commitment to quality.</p>
        <Link to="/Contact" className='main-btn'>
        <button className='btn-contact'>Contact Now <FaArrowRight className='ms-2'/> </button>
        </Link>
         <Link to="/Project" className='main-btn ms-0 ms-md-5'>
        <button className='btn-contact'>View Projects <FaArrowRight className='ms-2'/> </button>
        </Link>
        </div>

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

    <div className="container-fluid px-0 ps-0">
      <div className="our-services">
        <div className="our-service-text text-center">

          <h6 className=''>Our services</h6>
          <h1>Our construction services</h1>
          <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        </div>

           <div className="container  p-0 servive-all">
           <div className="row gap-4 mt-5 mt-md-5">
            <div className="col-md-6 col-12 col-lg-6  our-service-content py-0 px-0 mt-3 mt-md-4">
              <div className="image-container">

                 <div  className='all-service-img1'>
                  <div className="img-inside-text">
                 <h5 className=''>Building Construction</h5>
                 <Link to="/" className='view-more text-center ms-5 ms-md-5'>
                 View More <FaArrowRight className='ms-2'/>
                 </Link>
                 </div>
                  </div>
               </div>

           
             </div>

             <div className="col-md-6 col-12 col-lg-6  our-service-content py-0 px-0 mt-2 mt-md-4">
              <div className="image-container">

                 <div  className='all-service-img2'>
                  <div className="img-inside-text">
                 <h5 className=''>Architecture Design</h5>
                 <Link to="/" className='view-more text-center ms-5 ms-md-5'>
                 View More <FaArrowRight className='ms-2'/>
                 </Link>
                 </div>
                  </div>
               </div>

           
             </div>

             <div className="col-md-6 col-12 col-lg-6 our-service-content py-0 px-0 mt-md-0 mt-2">
              <div className="image-container">

                 <div  className='all-service-img3'>
                  <div className="img-inside-text">
                 <h5 className=''>Building Renovation</h5>
                 <Link to="/" className='view-more text-center ms-5 ms-md-5'>
                 View More <FaArrowRight className='ms-2'/>
                 </Link>
                 </div>
                  </div>
               </div>

           
             </div>

                <div className="col-md-6 col-12 col-lg-6 our-service-content py-0 px-0 mt-md-0 mt-2">
              <div className="image-container">

                 <div  className='all-service-img4'>
                  <div className="img-inside-text">
                 <h5 className=''>Building Maintenance</h5>
                 <Link to="/" className='view-more text-center ms-5 ms-md-5'>
                 View More <FaArrowRight className='ms-2'/>
                 </Link>
                 </div>
                  </div>
               </div>

           
             </div>
            </div>
               <Link to="/Services" className='main-btn-1 ms-0'>
        <button className='btn-contact btn-our-service text-center'>View All Services<FaArrowRight className='ms-2'/> </button>
        </Link>

           
           </div>



      </div>
    </div>


    <div className="container-fluid mt-5 ps-0 px-0">
      <div className="choose p-4 p-md-5">

        <div className="choose-text mt-md-0 mt-4">
          <span>WHY CHOOSE US</span>
          <h1>WHY WE'RE YOUR BEST CHOICE</h1>

        </div>
        <hr className='hr mt-4'/>

        <div className="row mt-4 mt-md-4">
            <div className="col-md-6 ms-0 mx-0">
                <div className="why-choose-img">

                </div>

            </div>

            <div className="col-md-6 p-3 why-choose">
              <div className="why-choose-content">
                <h4 ><span>01.&nbsp;</span>Comprehensive Services</h4>
                <p>Offering comprehensive solar services, from installation to maintenance, ensuring efficient, eco-friendly energy solutions.</p>
                <hr />
              </div>

              <div className="why-choose-content mt-5">
                <h4 ><span>02.&nbsp;</span>Advanced Technology</h4>
                <p>Utilizing advanced solar technology, we provide cutting-edge solutions for maximum energy efficiency and savings.</p>
                <hr />
              </div>

              <div className="why-choose-content mt-5">
                <h4 ><span>03.&nbsp;</span>Transparent Communication</h4>
                <p>Committed to transparent communication, we ensure clarity and trust throughout your entire solar journey.</p>
              </div>

            </div>
        </div>

      </div>

    </div>



     <div className="container-fluid px-0 ps-0">
      <div className="project-demo">
        <div className="our-service-text text-center">

          <h6 className=''>Our Projects</h6>
          <h1>Explore our diverse range of projects</h1>
          <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        </div>

           <div className="container  p-0 servive-all">
           <div className="row gap-4 mt-5">
            
            <div className="col-md-4 col-12 col-lg-4  project-service-content py-0 px-0 mt-3 mt-md-4">
              <div className="image-container">

                 <div  className='project-service-img1'>
                  <div className="img-inside-text">
                 <h5 className=''>Building Construction</h5>
                 </div>
                  </div>
               </div>

           
             </div>

              <div className="col-md-4 col-12 col-lg-4  project-service-content py-0 px-0 mt-3 mt-md-4">
              <div className="image-container">

                 <div  className='project-service-img2'>
                  <div className="img-inside-text">
                 <h5 className=''>Harborview Residences</h5>
                 </div>
                  </div>
               </div>

           
             </div>
            </div>
               <Link to="/Project" className='main-btn-1 ms-0'>
        <button className='btn-contact btn-our-service text-center'>View All Projects<FaArrowRight className='ms-2'/> </button>
        </Link>

           
           </div>



      </div>
    </div>


    <div className="container-fluid ps-0 px-0">
      <div className="need-help">
        <div className="row   mx-0 py-0">

          <div className="col-md-6 col-12 need-help-inner">
            <div className="need-help-text">
            <span className=''>Need Help?</span>
            <h1>Let's build something great together!</h1>
            <p>Don’t wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.</p>

             <Link to="/Contact" className='main-btn'>
        <button className='btn-contact fs-6'>Get Free Quate<FaArrowRight className='ms-3'/> </button>
        </Link>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-md-0 need-help-inner text-md-end text-center">
            <div className="need-help-image">
              <img src="./images/cta-box-img.png" alt="Need Help" width={100} />
            </div>

          </div>

        </div>

      </div>
    </div>

    <div className="main-faqs">
     <div className="faq-section">
      <h2 className="faq-title text-center">Frequently Asked Questions</h2>
      <p className="faq-subtitle text-center">
        We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
      </p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>

              <span className="faq-icon">{activeIndex === index ? "×" : "+"}</span>
              
            </div>
            
            {activeIndex === index && (
              
              <div className="faq-answer">
              <div className="faq-border" ></div>

                <p>{item.answer}</p>
                
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className="container-fluid">
      <div className="blog-section">
        <h6 className="blog-title text-center">News & blog</h6>
        <h1 className="blog-subtitle text-center">
          Articles & blog posts
        </h1>
        <p className='blog-para text-center'>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>

        <div className="row mt-5 mt-md-5">
          <div className="col-md-4 ">
            <div className="blog-card">
              <img src="./images/post-1.jpg" alt="Blog 1" />
              <h5 className="cart-title"> 10 Essential Tips for Choosing the Right Builder</h5>
              <p className="cart-description">Detailed analyses of successful construction projects, highlighting challenges, solutions.</p>
              <Link to="https://abilgroup.com/blogs/8-essential-tips-for-choosing-the-right-builder/" target='_blank' className='main-btn ms-0'>
                <button  className='btn-contact fs-6'>Read More <FaArrowRight className='ms-2'/> </button>
              </Link>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-5">
            <div className="blog-card">
              <img src="./images/post-2.jpg" alt="Blog 2" />
              <h5 className="cart-title"> The Future of Sustainable Construction Innovations</h5>
              <p className="cart-description">Exploring innovative materials and techniques for eco-friendly building.</p>
             <Link to="https://shubham.biz/blogs/the-future-of-sustainable-construction-trends-and-innovations/" target='_blank' className='main-btn ms-0'>
              <button className='btn-contact fs-6'> Read More <FaArrowRight className='ms-2'/> </button>
             </Link>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-5">
            <div className="blog-card">
              <img src="./images/post-3.jpg" alt="Blog 3" />
              <h5 className="cart-title"> How to Design Your Dream Home: A Step-by-Step Guide</h5>
              <p className="cart-description">Exploring innovative materials and techniques for eco-friendly building.</p>
               <Link to="https://gharpedia.com/blog/guide-to-designing-and-building-home/" target='_blank' className='main-btn'>
                <button className='btn-contact fs-6'>Read More <FaArrowRight className='ms-2'/> </button>
               </Link>
            </div>
          </div>



        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Home

