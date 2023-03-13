import React from 'react';
import styles from './ArrowStyles.module.scss';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles['nextArrow']}`} onClick={onClick}>
      <img src="/arrow-right.png" alt="left-arrow" />
    </div>
  );
};

export default NextArrow;
