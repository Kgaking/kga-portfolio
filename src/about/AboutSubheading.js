import React from 'react'
import classNames from 'classnames'
const AboutSubheading = ({title,content,active,onClick,menuItem}) => {
    const subContainer=`sub-container-${menuItem}`
  return (
    <div className={classNames(subContainer,{"active-subheading":active})}>
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
