import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  if (!product || !product.category || !product.name) {
    return <div>Error: Product information is incomplete</div>;
  }

  return (
    <div className='breadcrum'>
      <a href="/">HOME</a> <img src={arrow_icon} alt="arrow" /> 
      <a href="/shop">SHOP</a> <img src={arrow_icon} alt="arrow" /> 
      <span>{product.category}</span> <img src={arrow_icon} alt="arrow" /> 
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
