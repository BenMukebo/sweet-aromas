import axios from 'axios';

const baseUrl = 'https://sweetaromas.herokuapp.com';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

const signUpSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

const logInSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const logInFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const usersSuccess = (data) => ({
  type: USERS_SUCCESS,
  payload: data,
});

const usersFailure = (error) => ({
  type: USERS_FAILURE,
  payload: error,
});

export const signUpAsync = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, { user });
    dispatch(signUpSuccess(response.data.SignUp));
  } catch (error) {
    const { statusText, data } = error.response;
    dispatch(signUpFailure(error.message, statusText, data));
  }
  axios.get(baseUrl);
};

export const logInAsync = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { user });
    dispatch(logInSuccess(response.headers.authorization));
  } catch (error) {
    const { statusText, data } = error.response;
    dispatch(logInFailure(error.message, statusText, data));
  }
  axios.get(baseUrl);
};

export const usersAsync = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };

  try {
    const response = await axios.get(`${baseUrl}/users/5`, config);
    dispatch(usersSuccess(response.data.user_name));
  } catch (error) {
    const { statusText, data } = error.response;
    dispatch(usersFailure(error.message, statusText, data));
  }
  axios.get(baseUrl);
};
