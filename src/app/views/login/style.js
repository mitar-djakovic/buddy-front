import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: '#ede8e2',
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
  },
  infoContainer: {
    position: 'relative',
    width: '50%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
  },
  info: {
    zIndex: 2,
    position: 'absolute',
    bottom: 140,
  },
  img: {
    width: '100%',
    zIndex: 1,
  },
  adopt: {
    color: '#2f3543',
    fontSize: 80,
  },
  dontShop: {
    color: '#ff6b81',
    fontSize: 80,
  },
  underline: {
    width: '100%',
    height: 4,
    backgroundColor: '#2f3543',
    marginTop: 20,
    marginBottom: 20,
  },
  underlineText: {
    fontSize: 30,
    color: '#2f3543',
  },
  formContainer: {
    width: '50%',
  },
  logoContainer: {
    boxSizing: 'border-box',
    padding: 40,
  },
  logo: {
    width: 200,
  },
});
