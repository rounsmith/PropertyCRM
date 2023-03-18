import React from 'react';
import { IoLocationOutline } from 'react-icons/io';
import { BiBed } from 'react-icons/bi';
import { RxRulerSquare } from 'react-icons/rx';

import styles from '../../styles/components/PropertyCard.module.scss';

const PropertyCard = ({ data }) => {
  return (
    <div className={styles['property-card-wrapper']}>
      <img className={styles['property-image']} />
      <div className={styles['property-info']}>
        <div className={styles['property-price']}>{data.value}</div>
        <h6 className={styles['property-name']}>{data.name}</h6>
        <div className={styles['property-location']}>
          <IoLocationOutline />
          <span>{data.location}</span>
        </div>
        <div className={styles['property-location-info']}>
          <div className={styles['property-bedrooms']}>
            <BiBed />
            <span>{data.bedrooms}</span>
          </div>
          <div className={styles['property-footage']}>
            <RxRulerSquare />
            <span>{data.squareRoom}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
