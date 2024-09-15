// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets'; // Ensure this path is correct

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} alt="Menu Icon" /> {/* Ensure image path is correct */}
      </div>
      <div className="bottom"></div>
    </div>
  );
};
