import React from 'react'
import Navbar from './Components/Navbar'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import Footer from './Components/Footer';


const Project = () => {
  return (
   <>
   <div className="project-bg">

   <Navbar/>

    <div className="project-content">
        <h1 className='text-center text-white'>Our Projects</h1>
        <p className='text-center'>Explore our diverse portfolio of completed and ongoing construction projects. We take pride in delivering high-quality results across residential, commercial, and industrial sectors.</p>

    </div>

   </div>

   <div className="container-fluid">
    <div className="recent-project mt-5 mt-md-5 p-2 p-md-5 mb-0 mb-md-5 ">
      <h2 className='recent-title'>Recent Projects</h2>
      <p className='recent-description'>Tiny sub heading that focuses on the topic mentioned above.</p>

      <div className="row mt-5 mt-md-5 pt-md-5 pt-0">
        <div className="col-md-6 project-imgs">
          <img src="./images/project-1.jpg" alt="" />
        </div>

        <div className="col-md-6 project-details">
              <h2>Marina Azure Residences</h2>
              <div className="project-border"></div>
              <p>Marina Azure Residences is a luxury waterfront development that redefines coastal urban living. Nestled along the serene marina front, this prestigious enclave offers a perfect blend of elegance, modern design, and lifestyle convenience — ideal for discerning homeowners and investors alike.</p>
              <Link className='text-decoration-none '> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Luxury Condominiums / Apartments</span><br />
              </Link>

              <Link className='text-decoration-none text-black'> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Vacation Rentals or Timeshare Properties</span><br />
              </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
               <span className='ms-1'>Mixed-Use with Retail + Residential</span><br />
               </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
                <span className='ms-1'>Investment Property with High ROI Potential</span><br />
              </Link>

               <Link to="" className='main-btn ms-2 '>
                      <button className='btn-contact mt-4 fs-6'>Visite Project<FaArrowRight className='ms-2'/> </button>
                      </Link>


        </div>
      </div>

      <div className="row mt-5 mt-md-5 pt-md-5 pt-0">


        <div className="col-md-6 project-details project-details1 ">
              <h2> White Palm Villas</h2>
              <div className="project-border"></div>
              <p className=''>White Palm Villas is a premium twin-villa development that stands as a statement of minimalism, privacy, and architectural elegance. Characterized by its white façade, vertical fins, and clean-lined geometry, the project is designed for those who value luxury, light, and openness.</p>
              <Link className='text-decoration-none '> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Premium Modular Kitchen and Imported Fixtures</span><br />
              </Link>

              <Link className='text-decoration-none text-black'> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Infinity-edge Plunge Pool (optional)</span><br />
              </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
               <span className='ms-1'>Smart Home Automation</span><br />
               </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
                <span className='ms-1'>Architecture Enthusiasts</span><br />
              </Link>

               <Link to="" className='main-btn ms-2 '>
                      <button className='btn-contact mt-4 fs-6'>Visite Project<FaArrowRight className='ms-2'/> </button>
                      </Link>


        </div>

        <div className="col-md-6 project-imgs project-img1 ">
          <img src="./images/project-2.jpg" alt="" className='ps-md-2 ms-md-5' />
        </div>

        
      </div>

       <div className="row mt-5 pt-md-5 pt-0 mt-md-5 project-section">
        <div className="col-md-6 project-imgs project-section">
          <img src="./images/project-3.jpg" alt="" />
        </div>

        <div className="col-md-6 project-details project-details-office">
              <h2>Corporate Office Tower</h2>
              <div className="project-border"></div>
              <p>Nexus One Corporate Tower is a state-of-the-art commercial building designed for modern enterprises. With its sleek architectural form, expansive glazed façade, and high-end interior finishes, the tower redefines how businesses operate, collaborate, and grow in an inspiring environment.</p>
              <Link className='text-decoration-none '> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Co-Working Spaces & Start-Up Hubs</span><br />
              </Link>

              <Link className='text-decoration-none text-black'> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>IT/ITES Operations</span><br />
              </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
               <span className='ms-1'>Design & Innovation Labs</span><br />
               </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
                <span className='ms-1'>Legal/Finance/Consulting Firms</span><br />
              </Link>

               <Link to="" className='main-btn ms-2 '>
                      <button className='btn-contact mt-4 fs-6'>Visite Project<FaArrowRight className='ms-2'/> </button>
                      </Link>


        </div>
      </div> 

       <div className="row mt-5 mt-md-5 pt-md-5 pt-0">


        <div className="col-md-6 project-details project-details1 campus-details">
              <h2 className=''>  Campus One Tech Park</h2>
              <div className="project-border"></div>
              <p>Campus One Tech Park is a next-generation institutional/business complex thoughtfully designed to foster collaboration, learning, and innovation. With sleek architecture, green landscaping, and pedestrian-friendly pathways, it’s an ideal destination for corporate offices, research institutions, universities, or EdTech campuses.</p>
              <Link className='text-decoration-none '> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Medical or R&D Facilities</span><br />
              </Link>

              <Link className='text-decoration-none text-black'> <IoMdArrowDropright className='drop-right'/>
              <span className='ms-1'>Co-Working & Startup Incubators</span><br />
              </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
               <span className='ms-1'>Private Universities / B-Schools</span><br />
               </Link>

               <Link className='text-decoration-none text-black'> <IoMdArrowDropright  className='drop-right'/>
                <span className='ms-1'>IT/ITES Tech Campuses</span><br />
              </Link>

               <Link to="" className='main-btn ms-2 '>
                      <button className='btn-contact mt-4 fs-6'>Visite Project<FaArrowRight className='ms-2'/> </button>
                      </Link>


        </div>

        <div className="col-md-6 project-imgs project-img2 pt-md-0  mt-md-0">
          <img src="./images/project-4.jpg" alt="" />
        </div>

        
      </div> 

    </div>
   </div>

   <Footer/>
   </>
  )
}

export default Project
