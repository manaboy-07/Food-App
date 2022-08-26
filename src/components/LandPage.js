/** @format */

import React from "react";
import "../styles/LandPage.css";
import LandingImg from "../images/LandingPage1.svg";
import PlayStore from "../images/PlayStore.svg";
import Spag from "../images/Spag.svg";
import RowFlex from "./RowFlex";
import MeatBalls from "../images/FlexedImage2.svg";
import Hamburger from "../images/FlexedImage3.svg";

function LandPage() {
  return (
    <div className='land-pg'>
      <div className='land-container'>
        <div className='land-flex'>
          <h1 className='land-text'>
            Order <span className='peach'>food</span> anytime, anywhere
          </h1>
          <div>
            <small className='land-text-small'>
              Browse from our list of specials to place your order and have food
              <p>delivered to you in no time. Affordable, tasty and fast!</p>
            </small>
          </div>
          <div className='playstore'>
            <img src={PlayStore} alt='' />
          </div>
        </div>
        <div className=' land-img'>
          <img src={LandingImg} alt='' className='land-img' />
        </div>
      </div>
      <div className='food-items'>
        <RowFlex
          img={Spag}
          title='Stir Fry Pasta'
          description='Stir fry pasta , made by our best chefs. Get ready for an incredible
          taste'
        />
        <RowFlex
          img={MeatBalls}
          title='MeatBalls'
          description='Meat Balls . we got spicy , we got salty...we got it all'
        />
        <RowFlex
          img={Hamburger}
          title='Hamburger'
          description="Perhaps you are a junkie , well we got hamburgers, pizza's and more "
        />
      </div>
    </div>
  );
}

export default LandPage;
