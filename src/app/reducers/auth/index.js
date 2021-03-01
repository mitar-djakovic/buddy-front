import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../constants';

const initialState = {
  loading: false,
  error: false,
  message: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: payload.message,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
