import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import Footer from './Components/Footer';

const Blog = () => {
  return (
    <>
    <div className="blog-bg">
    <Navbar/>

    <div className="blog-content">
        <h1 className='text-center text-white'>Latest  Blogs</h1>
        <p className='text-center'>Stay updated with the latest trends, tips, and insights from the construction industry. Our blog covers a wide range of topics to help you make informed decisions for your projects.</p>

    </div>

    </div>


     <div className="container-fluid">
          <div className="all-blog-section ">
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
    
                <div className="col-md-4 mt-md-5 pt-md-5 pt-0 mt-5">
                 <div className="blog-card">
                   <img src="./images/post-4.jpg" alt="Blog 3" />
                   <h5 className="cart-title"> Building Resilience Against Climate Change</h5>
                   <p className="cart-description">Climate change is reshaping the way we approach construction and infrastructure.</p>
                   <Link to="https://gharpedia.com/blog/guide-to-designing-and-building-home/" target='_blank' className='main-btn'>
                    <button className='btn-contact fs-6'>Read More <FaArrowRight className='ms-2'/> </button>
                   </Link>
                 </div>
               </div>

               <div className="col-md-4 mt-md-5 pt-md-5 pt-0 mt-5">
                 <div className="blog-card">
                   <img src="./images/post-5.jpg" alt="Blog 3" />
                   <h5 className="cart-title"> Innovative Materials in Construction</h5>
                   <p className="cart-description"> The construction industry is constantly evolving with the introduction of new and innovative materials.</p>
                   <Link to="https://gharpedia.com/blog/guide-to-designing-and-building-home/" target='_blank' className='main-btn'>
                    <button className='btn-contact fs-6'>Read More <FaArrowRight className='ms-2'/> </button>
                   </Link>
                 </div>
               </div>

                <div className="col-md-4 mt-md-5 pt-md-5 pt-0 mt-5 mb-md-0 mb-4">
                 <div className="blog-card">
                   <img src="./images/post-6.jpg" alt="Blog 3" />
                   <h5 className="cart-title"> Robotics Revolutionizing Construction</h5>
                   <p className="cart-description">Robotics are transforming the construction industry by automating repetitive tasks and processes faster and safer.</p>
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

export default Blog
