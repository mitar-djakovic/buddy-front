import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  inputContainer: {
    width: 350,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 40,
  },
  errorMessage: {
    marginTop: 10,
    color: '#E25822',
  },
  signup: {
    marginTop: 40,
    fontSize: 20,
    cursor: 'pointer',
  },
  signupSpan: {
    color: '#ff6b81',
  },
  message: {
    color: '#E25822',
    fontSize: 20,
    marginTop: 40,
  },
});
