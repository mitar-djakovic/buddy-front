import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../constants';

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
        message: payload.message,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: payload.message,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: payload.message,
      };
    default:
      return state;
  }
};
