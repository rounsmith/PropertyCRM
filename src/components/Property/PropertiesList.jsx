import React from 'react';
import styles from '../../styles/components/Properties.module.scss';
const PropertiesList = () => {
  const properties = [
    {
      id: 1,
      img: './property1.jpg',
      name: 'Star Sun Hotel & Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '4',
      squareRoom: '28',
    },
    {
      id: 2,
      img: './property2.jpg',
      name: 'Letdo Ji Hotel & Apartment',
      location: 'New York City, USA',
      value: '$500',
      bedrooms: '4',
      squareRoom: '28',
    },
    {
      id: 3,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '6',
      squareRoom: '29',
    },
    {
      id: 4,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '3',
      squareRoom: '25',
    },
    {
      id: 5,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '3',
      squareRoom: '26',
    },
    {
      id: 6,
      img: './property1.jpg',
      name: 'Star Sun Hotel & Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '5',
      squareRoom: '28',
    },
    {
      id: 7,
      img: './property2.jpg',
      name: 'Letdo Ji Hotel & Apartment',
      location: 'New York City, USA',
      value: '$500',
      bedrooms: '2',
      squareRoom: '28',
    },
    {
      id: 8,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '5',
      squareRoom: '29',
    },
    {
      id: 9,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '4',
      squareRoom: '28',
    },
    {
      id: 10,
      img: './property3.jpg',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
      bedrooms: '4',
      squareRoom: '28',
    },
  ];
  return <div className={styles['properties-wrapper']}>Properties</div>;
};

export default PropertiesList;
