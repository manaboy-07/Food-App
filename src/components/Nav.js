/** @format */

import React from "react";
import "../styles/Nav.css";
import logo from "../images/Logo.svg";
function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo-img' />
        <h1 className='white'> Lilies</h1>
      </div>
      <div className='nav-options'>
        <ul className='nav-list'>
          <li className='nav-item white'>Home</li>
          <li className='nav-item white'>Login</li>
          <li className='nav-item sign'>
            <button className='sign__up'>Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
