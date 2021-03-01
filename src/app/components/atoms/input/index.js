import React from 'react';
import { Input, useStyles } from './style';

export default ({
  placeholder, value, onChange, type, name, errorStatus, variant,
}) => {
  const classes = useStyles();
  if (variant === 'outline') {
    return (
      <div className={classes.outlineContainer}>
        <Input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          errorStatus={errorStatus}
          variant={variant}
        />
      </div>
    );
  }
  return (
    <div className={classes.inputContainer}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        errorStatus={errorStatus}
      />
    </div>
  );
};
