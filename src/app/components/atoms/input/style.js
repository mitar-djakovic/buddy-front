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
  statusBar: {
    boxSizing: 'border-box',
    width: 'calc(100% - 4px)',
    marginLeft: 2,
    height: 3,
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    transition: 'all 0.3s ease',
    boxShadow: '0px 10px 20px -13px rgba(32, 56, 117, 0.35)',
    backgroundColor: '#7480FF',
  },
  statusBarError: {
    backgroundColor: 'red',
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
