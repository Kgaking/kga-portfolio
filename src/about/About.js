import React, { Component } from 'react'
import aboutimg from "../assets/About.png";
import AboutMenu from './AboutMenu';
import "../styles/about.css"
export default class About extends Component {
  render() {
    return (
      <>
      <div className='about-img'>
        <img src={aboutimg} alt="aboutpic"/>
        <span className='circle-spin'></span>
      </div>
      <AboutMenu/>
      </>
    )
  }
}
