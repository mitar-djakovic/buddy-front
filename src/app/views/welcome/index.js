import React from 'react';
import { useStyles } from './style';
import { ProgressBar } from '../../components/molecules';

const WelcomeView = () => {
  const classes = useStyles();
  const progressList = [1, 2, 3, 4, 5];
  return (
    <div className={classes.wrapper}>
      <div
        style={{
          backgroundColor: '#FFF',
          width: '100%',
          height: '100%',
          borderRadius: 6,
        }}
      >
        <ProgressBar progressList={progressList} />
      </div>
    </div>
  );
};

export default WelcomeView;
