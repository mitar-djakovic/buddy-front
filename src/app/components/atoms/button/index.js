import React from 'react';
import { Button } from '@chakra-ui/react';
import { useStyles } from './style';

export default ({ title, type }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} type={type} colorScheme="teal" variant="outline">
      {title}
    </Button>
  );
};
