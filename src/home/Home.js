import React from 'react'
import "../styles/home.css";
import { Link } from "react-router-dom";
import Typed from 'typed.js'
import resume from "../assets/CV_KG_Aniruddha_ENG21CS0172.pdf"
// import video from "../assets/Home.mp4"

// import homeimg from "../assets/Home.png"
const Home=()=> {
  const el=React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to my portfolio", "I'm a Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
      });

      return()=>{
        typed.destroy();
        };
        // eslint-disable-next-line
      },[]);


    return(
      <>
      <section className='home' id='home'>
         <div className="home-content">
          <h3>Hello,I'm</h3>
          <h1>K G Aniruddha</h1>
          <h3><span ref={el}/></h3>
          <p>I Create Innovative Web projects<br/>and also a Machine Learning Enthusiast <br />Contact Me to work together.</p>
          <div className="social-media">
            <Link to="https://www.youtube.com/@KGANIRUDDHA"><i className='bx bxl-youtube'></i></Link>
            <Link to="https://instagram.com/kgaking_._._?igshid=NzZlODBkYWE4Ng=="><i className='bx bxl-instagram'></i></Link>
            <Link to="https://www.linkedin.com/in/karnam-aniruddha-80745b248/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin'></i></Link>
            <Link to="https://github.com/Kgaking"><i className='bx bxl-github' ></i></Link>
          </div>
          <div className="btn-container">
          <div className='button mx-2'>
          <Link to={resume} className='btn' target='_blank' download={resume}>Download&nbsp;CV</Link>
          </div>
          <div className='button mx-2'>
          <Link to="/contact" className='btn'>Let's&nbsp;Connect</Link>
          </div>
          </div>
        </div>
        {/* <div className='home-img'>
            <img  src={homeimg} alt="MyPic"/>
            <video muted loop autoPlay className='-z-10'>
            <source src={video}/>
            </video>
        </div> */}
      </section>
      </>
    )
  }
export default Home
