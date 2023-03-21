import Select from 'react-select';
import { AiOutlineSearch } from 'react-icons/ai';

import SelectAutoComplete from '../common/SelectAutoComplete/SelectAutoComplete';

import styles from '../../styles/components/Filters.module.scss';

const Filters = () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  return (
    <div className={styles['filters-wrapper']}>
      <div className={styles['search-wrapper']}>
        <AiOutlineSearch size={20} className={styles['search-icon']} />
        <input type="text" placeholder="Enter an address,city or Zip code" />
      </div>
      <SelectAutoComplete
        options={options}
        className={styles['select']}
        placeholder="Any Status"
      />
      <SelectAutoComplete
        options={options}
        className={styles['select']}
        placeholder="Any Type"
      />
      <SelectAutoComplete
        options={options}
        className={styles['select']}
        placeholder="All Countries"
      />
      <SelectAutoComplete
        options={options}
        className={styles['select']}
        placeholder="Any States"
      />
    </div>
  );
};

export default Filters;
