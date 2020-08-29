import React from 'react';
import './Header.css';
import Background from '../../../src/img/header.jpg'

const Header = () => {

  
  return (
    <div className="header">
      <h2 className="font-weight-bold text-success ml-2">myDemy</h2>

      <div className="h-100 w-100 text-center">
        <h1 className="text-capitalize font-weight-bold text-dark">Online Learning Platform</h1>
        <h4>Learn form anywhere</h4>
      </div>
    </div>
  );
};

export default Header;