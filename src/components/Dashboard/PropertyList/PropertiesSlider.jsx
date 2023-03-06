import React from 'react';
import Slider from 'react-slick';
import { MdLocationOn } from 'react-icons/md';

import '../../../styles/components/Property.scss';
import CustomSlider from '../../common/Slider/Slider';

const PropertiesSlider = ({ properties }) => {
  return (
    <CustomSlider>
      {properties.map((property) => (
        <div className="property-wrapper" key={property.id}>
          <img
            className="property-image"
            src={property.img}
            alt="property-name"
          />
          <div className="property-description">
            <div className="property-description-wrapper">
              <span className="property-name">{property.name}</span>
              <div className="property-location">
                <MdLocationOn size={20} />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="property-price">{property.value}</div>
          </div>
        </div>
      ))}
    </CustomSlider>
  );
};

export default PropertiesSlider;
