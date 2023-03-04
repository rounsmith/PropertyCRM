import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import '../../../styles/components/Property.scss';

const Property = ({ property }) => {
  return (
    <div className="property-wrapper" id={property.id}>
      <img className="property-image" src={property.img} alt="property-name" />
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
  );
};

export default Property;
