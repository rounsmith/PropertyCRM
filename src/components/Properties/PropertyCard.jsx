import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BiBed } from 'react-icons/bi';
import { RxRulerSquare } from 'react-icons/rx';

import useWindowSize from '../../libs/windowSize';

import styles from '../../styles/components/PropertyCard.module.scss';

const PropertyCard = ({ data }) => {
  const { width } = useWindowSize();
  return (
    <div className={styles['property-card-wrapper']}>
      <img
        className={styles['property-image']}
        src={data.img}
        alt={data.name}
      />
      <div className={styles['property-info']}>
        <div className={styles['property-price']}>{data.value}</div>
        <h4 className={styles['property-name']}>{data.name}</h4>
        <div className={styles['property-location']}>
          <IoLocationOutline size={width > 991 ? 26 : 16} />
          <span>{data.location}</span>
        </div>
        <div className={styles['property-location-info']}>
          <div className={styles['property-bedrooms']}>
            <BiBed size={width > 991 ? 20 : 16} />
            <span>{data.bedrooms}</span>
          </div>
          <div className={styles['property-footage']}>
            <RxRulerSquare size={width > 991 ? 20 : 16} />
            <span>{data.squareRoom}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
