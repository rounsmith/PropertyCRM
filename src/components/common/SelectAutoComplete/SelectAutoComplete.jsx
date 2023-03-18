import Select from 'react-select';
import Input from './Input';

const SelectAutoComplete = ({ options, placeholder }) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 'none',
      backgroundColor: '#f4f4f4',
      color: '#808191',
      fontSize: '12px',
      fontFamily: 'Manrope',
      width: '160px',
      borderRadius: '8px',
      padding: '8px',
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({
      ...styles,
      borderRadius: '8px',
      border: 'none',
      boxShadow: '0 0 0 transparent',
      color: '#808191',
    }),
    option: (styles, state) => ({
      ...styles,
      fontSize: '14px',
      backgroundColor: state.isSelected ? '#475be8' : '',
      borderRadius: state.isSelected ? '8px' : '',
      ':hover': {
        backgroundColor: '#475be8',
        color: '#fcfcfc',
        borderRadius: '8px',
      },
    }),
  };

  return (
    <Select
      styles={styles}
      components={{ Input }}
      options={options}
      placeholder={placeholder}
    />
  );
};

export default SelectAutoComplete;
