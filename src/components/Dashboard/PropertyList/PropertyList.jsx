import PropertiesSlider from './PropertiesSlider';

import '../../../styles/components/PropertyList.scss';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      img: './property1.png',
      name: 'Star Sun Hotel & Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 2,
      img: './property2.png',
      name: 'Letdo Ji Hotel & Apartment',
      location: 'New York City, USA',
      value: '$500',
    },
    {
      id: 3,
      img: './property3.png',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 4,
      img: './property3.png',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
    {
      id: 5,
      img: './property3.png',
      name: 'Metro Jayakar Apartment',
      location: 'North Carolina, USA',
      value: '$500',
    },
  ];

  return (
    <div className="property-list-wrapper">
      <div className="topData">
        <h2>Property List</h2>
        <div className="sortBy">
          <button type="button" className="sortByButton activeButton">
            Popular
          </button>
          <button type="button" className="sortByButton">
            Recommended
          </button>
          <button type="button" className="sortByButton">
            Newest
          </button>
          <button type="button" className="sortByButton">
            Most Recent
          </button>
        </div>
      </div>

      {/* <div className="list-of-properties">
        <div className="previous">
          <button
            type="button"
            className="slider-button"
            onClick={handleBackSlider}
          >
            &#60;
          </button>
        </div>
        <div className="properties-wrapper">
          <div className="properties" ref={propertiesRef} id="properties">
            {properties.map((property) => (
              <Property key={property.id} property={property} />
            ))}
          </div>
        </div>
        <div className="next">
          <button
            type="button"
            className="slider-button"
            onClick={handleNextSlider}
          >
            &#62;
          </button>
        </div>
      </div> */}

      <PropertiesSlider properties={properties} />
    </div>
  );
};

export default PropertyList;
