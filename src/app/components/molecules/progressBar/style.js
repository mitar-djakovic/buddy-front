import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: 100,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  circleContainer: {
    zIndex: 2,
  },
  circle: {
    backgroundColor: '#FFF',
    width: 40,
    height: 40,
    borderRadius: '50%',
    margin: '20px 0px',
    boxSizing: 'border-box',
    border: '2px solid #C7C7C7',
    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
  lineThru: {
    width: 2,
    height: '100%',
    backgroundColor: '#C7C7C7',
    position: 'absolute',
    zIndex: 1,
  },
  active: {
    backgroundColor: '#7AB893',
    width: 40,
    height: 40,
    borderRadius: '50%',
    margin: '20px 0px',
    boxSizing: 'border-box',
    border: '2px solid #7AB893',
    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
});
