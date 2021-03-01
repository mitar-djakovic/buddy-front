import { createUseStyles } from 'react-jss';
import styled from 'styled-components';

export const useStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
  },
  outlineContainer: {
    borderRadius: 8,
    boxSizing: 'border-box',
    border: '2px solid #7480FF',
  },
});

export const Input = styled.input`
  width: 100%;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 18px;
  border-radius: 4px;

  ${({ errorStatus }) => (errorStatus
    ? {
      color: '#E25822',
    }
    : null)}
  &::placeholder {
    color: #aabbc6;
  }
  &:hover {
    cursor: pointer;
    // filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04));
    // filter: drop-shadow(0px 4px 4px rgba(52, 60, 68, 0.4));
  }
`;
