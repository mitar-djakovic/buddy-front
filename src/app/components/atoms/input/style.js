import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  inputContainer: {
    marginBottom: 26,
    width: 360,
    position: 'relative',
  },
  errorMessage: {
    position: 'absolute',
    color: '#C70039',
  },
});
