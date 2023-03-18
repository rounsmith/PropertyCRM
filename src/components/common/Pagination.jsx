import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styles from '../../styles/components/Pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles['pagination-wrapper']}>
      <div className={styles['left-data']}>Showing 1 to 10 Properties</div>
      <div className={styles['right-data']}>
        <IoIosArrowBack />
        <ul className={styles['pagination']}>
          <li className={styles['active']}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Pagination;
