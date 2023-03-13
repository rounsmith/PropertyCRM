import PropertiesSlider from './PropertiesSlider';

import styles from '../../../styles/components/PropertyList.module.scss';

const PropertyList = () => {
  return (
    <div className={styles['property-list-wrapper']}>
      <div className={styles['topData']}>
        <h2>Property List</h2>
        <div className={styles['sortBy']}>
          <button
            type="button"
            className={`${styles.sortByButton} ${styles.activeButton}`}
          >
            Popular
          </button>
          <button type="button" className={styles['sortByButton']}>
            Recommended
          </button>
          <button type="button" className={styles['sortByButton']}>
            Newest
          </button>
          <button type="button" className={styles['sortByButton']}>
            Most Recent
          </button>
        </div>
      </div>
      <PropertiesSlider />
    </div>
  );
};

export default PropertyList;
