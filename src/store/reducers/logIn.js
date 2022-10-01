import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/user';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default logIn;
