import React, { Component } from 'react'
import AboutMenuItem from "./AboutMenuItem"
import subheadingData from "./SubheadingData"
import personalIcon from "../assets/moebius-triangle.png"
import educationIcon from "../assets/upgrade.png"
import AboutSubheading from './AboutSubheading'
import "../styles/aboutMenu.css"
export default class AboutMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeMenuItem:1,
            activeSubheading:1,
        }
    }


    handleMenuItemClick=(menuItem)=>{
        this.setState({
            activeMenuItem:menuItem,
            activeSubheading:1,
        });
    };
    handleSubheadingClick=(subheading)=>{
        this.setState({
            activeSubheading:subheading,
            });
        }

  render() {
    const {activeMenuItem,activeSubheading} = this.state;
    const menuItems=["PERSONAL","EDUCATION"];
    const activeMenuTitle=menuItems[activeMenuItem-1];
    const activeMenuIcon=
    activeMenuTitle==="PERSONAL"
    ? personalIcon
    :educationIcon;

    const subheadings=subheadingData[activeMenuItem];

    return (
        <>
      <div className='menu'>
        {menuItems.map((item,index) =>(
            <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={()=>this.handleMenuItemClick(index + 1)}
            />
        ))}
      </div>
      <div className='sub-container'>
        <div className='icon-title-container'>
            <img src={activeMenuIcon} alt={activeMenuTitle} className='icon'/>
            <h3>{activeMenuTitle}</h3>
        </div>
      {subheadings.map((subheading,index) =>(
          <AboutSubheading
          key={index}
          title={subheading.title}
          content={subheading.content}
          active={activeSubheading === index + 1}
          onClick={()=>this.handleSubheadingClick(index + 1)}
          menuItem={activeMenuItem}
          />
      ))}
    </div>
    </>
    );
  }
}
