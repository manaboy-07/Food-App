/** @format */

import React from "react";
import "../styles/Nav.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";

function Header() {
  let navigate = useNavigate();
  return (
    <div className='navbar nav'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabindex='0' class='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabindex='0'
            className='menu  menu-compact dropdown-content mt-3 p-2 shadow bg-green  w-52'>
            <li className='nav-item white px-3 transition-all hover:bg-green-900 text-2xl'>
              Home
            </li>

            <li
              className='nav-item white px-3 transition-all hover:bg-green-900 text-2xl'
              onClick={() => navigate("/Login")}>
              Login
            </li>
          </ul>
        </div>
        <main className='btn btn-ghost normal-case text-xl'>
          <div className='logo'>
            <img src={logo} alt='logo' className='logo-img' />
            <h1 className='white text-3xl'> Lilies</h1>
          </div>
        </main>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li className='text-white text-2xl px-4'>Home</li>

          <li
            className='text-white text-2xl px-4'
            onClick={() => navigate("/Login")}>
            Login
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <button onClick={() => navigate("/SignUp")} className='sign__up'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
