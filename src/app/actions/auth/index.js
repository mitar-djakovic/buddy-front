/* eslint-disable max-len */
import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../constants';

export const signup = (firstName, lastName, email, password, repeatPassword) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/auth/signup', {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        message: data.message,
      },
    });
  } catch (error) {
    const { data } = error.response;

    dispatch({
      type: SIGNUP_ERROR,
      payload: {
        message: data.message,
      },
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/auth/login', {
      email,
      password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        message: data.message,
      },
    });

    return data;
  } catch (error) {
    const { data } = error.response;

    dispatch({ type: LOGIN_ERROR, payload: { message: data.message } });
  }
};
