import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  messagesContainer: {
    marginTop: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 26,
    width: 360,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  errorMessage: {
    position: 'absolute',
    color: '#C70039',
  },
  underText: {
    fontSize: 20,
  },
  span: {
    color: '#f45c71',
    cursor: 'pointer',
  },
});
