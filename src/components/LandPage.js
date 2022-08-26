/** @format */

import React from "react";
import "../styles/LandPage.css";
import LandingImg from "../images/LandingPage1.svg";
import PlayStore from "../images/PlayStore.svg";
function LandPage() {
  return (
    <div className='land-pg'>
      <div className='land-container'>
        <div className='land-flex'>
          <h1 className='land-text'>
            Order <span className='peach'>food</span> anytime, anywhere
          </h1>
          <p>
            <small>
              Browse from our list of specials to place your order and have food
              <p>delivered to you in no time. Affordable, tasty and fast!</p>
            </small>
          </p>
          <div className='playstore'>
            <img src={PlayStore} alt='' />
          </div>
        </div>
        <div className='land-flex'>
          <img src={LandingImg} alt='' className='land-img' />
        </div>
      </div>
    </div>
  );
}

export default LandPage;
