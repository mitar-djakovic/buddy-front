import styled from 'styled-components';
import { createUseStyles } from 'react-jss';

export const Button = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  ${({ color }) => (color ? { color } : { color: '#FBFBFB' })}
  ${({ backgroundColor }) => (backgroundColor ? { backgroundColor } : { backgroundColor: '#ff6b81' })}
  ${({ disabled }) => disabled && { opacity: '0.9' }}
  ${({ size }) => {
    if (size === 'big') {
      return {
        fontSize: 20,
        letterSpacing: '0.15px',
        padding: '10px 48px',
        lineHeight: '24px',
      };
    }
    if (size === 'medium') {
      return {
        letterSpacing: '0.5px',
        fontSize: 16,
        padding: '8px 26.5px',
        lineHeight: '20px',
      };
    }
    return {
      fontSize: 14,
      padding: '8px 12px',
      lineHeight: '16px',
    };
  }}
`;

export const OutlineButton = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  box-sizing: border-box;
  ${({ color }) => color && { color, border: `2px solid ${color}` }}
  ${({ backgroundColor }) => backgroundColor && { backgroundColor }}
  ${({ disabled }) => disabled && { opacity: '0.9' }}
  ${({ size }) => {
    if (size === 'big') {
      return {
        fontSize: 20,
        letterSpacing: '0.15px',
        padding: '10px 48px',
        lineHeight: '24px',
      };
    }
    if (size === 'medium') {
      return {
        letterSpacing: '0.5px',
        fontSize: 16,
        padding: '8px 26.5px',
        lineHeight: '20px',
      };
    }
    return {
      fontSize: 14,
      padding: '8px 12px',
      lineHeight: '16px',
    };
  }}
  &:hover {
    ${({ color }) => ({ backgroundColor: color, color: '#FFF' })}
  }
`;

export const useStyles = createUseStyles({
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});
