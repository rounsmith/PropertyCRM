import { AiOutlinePlus } from 'react-icons/ai';

import Filters from '../components/Property/Filters';
import PropertiesList from '../components/Property/PropertiesList';

import styles from '../styles/components/Properties.module.scss';

const Property = () => {
  return (
    <div className={styles['properties-page-wrapper']}>
      <div className={styles['topData']}>
        <h1>Property List</h1>
        <button
          type="button"
          title="addproperty"
          className={styles['add-property']}
        >
          <AiOutlinePlus size={15} />
          <span>Add Property</span>
        </button>
      </div>
      <div className={styles['properties-list']}>
        <Filters />
        <PropertiesList />
      </div>
    </div>
  );
};

export default Property;
