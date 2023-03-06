import PropertiesSlider from './PropertiesSlider';

import '../../../styles/components/PropertyList.scss';

const PropertyList = () => {
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
      <PropertiesSlider />
    </div>
  );
};

export default PropertyList;
