import React from 'react'
import { Link } from 'react-router-dom'
import Budget from "../assets/Budget.jpg"
import studentspace from "../assets/Student_Space.png"
import news from "../assets/news_app.png"
import finance from "../assets/financial_portfolio.jpg"
import travel from "../assets/Travel.jpg"
import sign from "../assets/signlanguage.png"
import "../styles/project.css"

const Projects=()=> {
    return (
      <>
      <section className="project" id="project">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="project-container">

          <div className="project-box">
            <img src={studentspace} alt="project1" />
            <div className="project-layer">
              <h4>Student Space</h4>
              <p>One stop Learning & Teaching platform for All.</p>
              <div className="btns">
              <Link className="link" to="https://study-space-eight.vercel.app/"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/Student_Space"><i className='bx bx-link-external'><br />code</i></Link>
              </div>
            </div>
          </div>

          <div className="project-box">
            <img src={finance} alt="project2" />
            <div className="project-layer">
              <h4>Equity Edge</h4>
              <p>Your trusted Financial Advisor for maximizing profits through strategic investments.</p>
              <div className="btns">
              <Link className="link" to="#"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/Financial_Portfolio"><i className='bx bx-link-external'><br />code</i></Link>
              </div>           
              </div>
          </div>

          <div className="project-box">
            <img src={news} alt="project3" />
            <div className="project-layer">
              <h4>NEWS App</h4>
              <p>Always be updated with recent news of all Fields.</p>
              <div className="btns">
              <Link className="link" to="#"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/News_App"><i className='bx bx-link-external'><br />code</i></Link>
              </div>
            </div>
          </div>

          <div className="project-box">
            <img src={Budget} alt="project4" />
            <div className="project-layer">
              <h4>Budget Tracker</h4>
              <p>Keep Track of daily expenses without any kit-kit</p>
              <div className="btns">
              <Link className="link" to="#"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/Budget_Tracking_System"><i className='bx bx-link-external'><br />code</i></Link>
              </div>           
              </div>
          </div>


          <div className="project-box">
            <img src={travel} alt="project5" />
            <div className="project-layer">
              <h4>Travel App</h4>
              <p>One stop destination for all Trips and Tours planning across States.</p>
              <div className="btns">
              <Link className="link" to="https://travel-app-two-tau.vercel.app/"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/Travel_App"><i className='bx bx-link-external'><br />code</i></Link>
              </div>           
              </div>
          </div>

          <div className="project-box">
            <img src={sign} alt="project6" />
            <div className="project-layer">
              <h4>Digit Recognition</h4>
              <p>A Deep Learning Model for digit recognition through OpenCV </p>
              <div className="btns">
              <Link className="link" to="#"><i className='bx bx-link-alt'><br />demo</i></Link>
              <Link className="link" to="https://github.com/Kgaking/Sign_language_detection"><i className='bx bx-link-external'><br />code</i></Link>
              </div>           
              </div>
          </div>
        </div>
      </section>
      </>
    )
  
}
export default Projects