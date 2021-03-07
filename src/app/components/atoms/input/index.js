/* eslint-disable max-len */
import React from 'react';
import { StandardInput, OutlineInput, UnderLineInput } from './style';

export default ({
  placeholder, value, onChange, type, name, errorMessage, variant,
}) => {
  if (variant === 'outline') {
    return (
      <div>
        <OutlineInput placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} />
      </div>
    );
  }

  if (variant === 'underline') {
    return (
      <div>
        <UnderLineInput placeholder={placeholder} id={name} name={name} type={type} value={value} onChange={onChange} />
      </div>
    );
  }

  return (
    <div>
      <StandardInput placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
};
