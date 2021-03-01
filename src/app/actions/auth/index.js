/* eslint-disable max-len */
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../constants';

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
