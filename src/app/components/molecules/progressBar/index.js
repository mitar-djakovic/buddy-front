/* eslint-disable max-len */
import React, { useState } from 'react';
import { useStyles } from './style';

const ProgressBar = ({ progressList }) => {
  const classes = useStyles();
  const [activeBar, setActiveBar] = useState(0);
  return (
    <div className={classes.wrapper}>
      <div className={classes.circleContainer}>
        {progressList.map((progressBlock, index) => (
          <div
            onClick={() => setActiveBar(index)}
            key={progressBlock}
            role="presentation"
            className={activeBar === index ? classes.active : classes.circle}
          />
        ))}
      </div>
      <div className={classes.lineThru} />
    </div>
  );
};

export default ProgressBar;
