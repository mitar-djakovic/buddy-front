import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  view: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#ede8e2',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    marginTop: 50,
    width: 250,
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: 40,
  },
});
