import React, { useState } from 'react';
import './FAQItem.css'
import ExpandIcon from '../images/expand-arrow.png';
import CollapseIcon from '../images/collapse-arrow.png';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" data-aos='fade-up' onClick={() => setIsActive(!isActive)}>
      <div className="accordion-title">
        <div>{title}</div>
        <img src={isActive ? CollapseIcon : ExpandIcon} className='faq-item-icon' alt='arrow-icon'></img>
      </div>
      <div className={isActive ? "accordion-content content-active" : "accordion-content"}>{content}</div>
    </div>
  );
};

export default Accordion;