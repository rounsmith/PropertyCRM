import { AiOutlinePlus } from 'react-icons/ai';
import Pagination from '../../components/common/Pagination';

import useWindowSize from '../../libs/windowSize';

import Filters from '../../components/Property/Filters';
import PropertiesList from '../../components/Property/PropertiesList';

import styles from '../../styles/components/Properties.module.scss';

const Properties = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles['properties-page-wrapper']}>
      <div className={styles['topData']}>
        <h1>Property List</h1>
        <button
          type="button"
          title="addproperty"
          className={styles['add-property']}
        >
          <AiOutlinePlus size={width > 991 ? 15 : 12} />
          <span>Add Property</span>
        </button>
      </div>
      <div className={styles['properties-list']}>
        <Filters />
        <PropertiesList />
        <Pagination />
      </div>
    </div>
  );
};

export default Properties;
