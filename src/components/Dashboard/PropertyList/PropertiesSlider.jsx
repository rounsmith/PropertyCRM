import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import CustomSlider from '../../common/Slider/Slider';

import styles from '../../../styles/components/Property.module.scss';

const PropertiesSlider = () => {
  const properties = [
    {
      id: 1,
      img: './property1.jpg',
      name: 'Star Sun Hotel & Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 2,
      img: './property2.jpg',
      name: 'Letdo Ji Hotel & Apartment',
      location: 'New York City, USA',
      value: '$500',
    },
    {
      id: 3,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 4,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 5,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
  ];

  return (
    <CustomSlider>
      {properties.map((property) => (
        <div className={styles['property-wrapper']} key={property.id}>
          <img
            className={styles['property-image']}
            src={property.img}
            alt="property-name"
          />
          <div className={styles['property-description']}>
            <div className={styles['property-description-wrapper']}>
              <span className={styles['property-name']}>{property.name}</span>
              <div className={styles['property-location']}>
                <MdLocationOn size={20} />
                <span>{property.location}</span>
              </div>
            </div>
            <div className={styles['property-price']}>{property.value}</div>
          </div>
        </div>
      ))}
    </CustomSlider>
  );
};

export default PropertiesSlider;
