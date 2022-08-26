/** @format */

import React from "react";
import "../styles/FooterLand.css";
import AppleStore from "../images/App Store Badge.svg";
import GoogleStore from "../images/Google Play Badge.svg";
import Divider from "../images/Divider.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function FootLand() {
  return (
    <div className='footer-land'>
      <footer className='land column'>
        <div className='footer-flex row'>
          <div className='flex-item'>
            <div>
              <h3 className='footer-header'>Company</h3>
              <ul className='footer-list'>
                <li className='footer-list-item'>About Us</li>
                <li className='footer-list-item'>Careers</li>
                <li className='footer-list-item'>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='flex-item'>
            <div>
              <h3 className='footer-header'>Support</h3>
              <ul className='footer-list'>
                <li className='footer-list-item'>Help Center</li>
                <li className='footer-list-item'>Safety Center</li>
              </ul>
            </div>
          </div>
          <div className='flex-item'>
            <div>
              <h3 className='footer-header'>Legal</h3>
              <ul className='footer-list'>
                <li className='footer-list-item'>Cookies Policy</li>
                <li className='footer-list-item'>Privacy Policy</li>
                <li className='footer-list-item'>Terms of Service</li>
                <li className='footer-list-item'>Dispute resolution</li>
              </ul>
            </div>
          </div>
          <div className='flex-item'>
            <div>
              <h3 className='footer-header'>Install App</h3>
              <ul className='footer-list'>
                <li className='footer-list-item list-image'>
                  <img src={AppleStore} alt='app store' />
                  <img src={GoogleStore} alt='google store' />
                </li>
                <li className='footer-list-item'></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-flex '>
          <div>
            <img src={Divider} alt='' />
          </div>
          <div className='footer-copy-socials'>
            <div className='copy-right'>
              &copy; 2021, LILIES All rights reserved
            </div>
            <div className='socials'>
              <div className='footer-icons'>
                <FaInstagram className="icon"/>
              </div>
              <div className='footer-icons'>
                <FaTwitter className="icon"/>
              </div>
              <div className='footer-icons'>
                 <FaYoutube className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FootLand;
