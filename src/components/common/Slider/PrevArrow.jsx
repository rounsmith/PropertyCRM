import React from 'react';
import styles from './ArrowStyles.module.scss';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.prevArrow}`} onClick={onClick}>
      <img src="/arrow-left.png" alt="left-arrow" />
    </div>
  );
};

export default PrevArrow;
