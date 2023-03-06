import React from 'react';
import './ArrowStyles.scss';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} prevArrow`} onClick={onClick}>
      <img src="/arrow-left.png" alt="left-arrow" />
    </div>
  );
};

export default PrevArrow;
