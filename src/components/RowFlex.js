/** @format */

import React from "react";
import "../styles/RowFlex.css";

function RowFlex({ img, title, description }) {
  return (
    <div className='food-flex'>
      <img src={img} alt='food' />
      <h1 className='food-title text-2xl font-bold my-3'>{title}</h1>
      <p className='food-description'>{description}</p>
    </div>
  );
}

export default RowFlex;
