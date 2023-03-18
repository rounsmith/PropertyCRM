import React from 'react';
import { components } from 'react-select';

const Input = (props) => {
  const { autoComplete = props.autoComplete } = props.selectProps;
  return <components.Input {...props} autoComplete={autoComplete} />;
};

export default Input;
