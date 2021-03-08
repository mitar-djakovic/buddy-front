/* eslint-disable max-len */
import React from 'react';
import { Input } from '@chakra-ui/react';
import { useStyles } from './style';

export default ({
  placeholder, value, onChange, name, type, errorMessage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <Input
        onChange={onChange}
        value={value}
        name={name}
        colorScheme="teal"
        placeholder={placeholder}
        type={type}
        maxWidth
      />
      <p className={classes.errorMessage}>{errorMessage}</p>
    </div>
  );
};
