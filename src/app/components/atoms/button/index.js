import React from 'react';
import { Button, OutlineButton } from './style';

export default ({
  title,
  loading,
  onClick,
  size,
  fullWidth,
  type,
  backgroundColor = '#EDE8E2',
  color = '#2F3543',
  icon,
  variant,
}) => {
  const renderWhenLoading = () => <p>loading...</p>;

  const renderWhenNotLoading = () => (
    <div>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );

  if (variant === 'outline') {
    return (
      <OutlineButton
        fullWidth={fullWidth}
        onClick={onClick}
        type={type}
        backgroundColor={backgroundColor}
        disabled={loading}
        size={size}
        color={color}
      >
        {loading ? renderWhenLoading() : renderWhenNotLoading()}
      </OutlineButton>
    );
  }

  return (
    <Button
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
      disabled={loading}
      size={size}
      color={color}
    >
      {loading ? renderWhenLoading() : renderWhenNotLoading()}
    </Button>
  );
};
