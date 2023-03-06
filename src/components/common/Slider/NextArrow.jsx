import React from 'react';
import './ArrowStyles.scss';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} nextArrow`} onClick={onClick}>
      <img src="/arrow-right.png" alt="left-arrow" />
    </div>
  );
};

export default NextArrow;
