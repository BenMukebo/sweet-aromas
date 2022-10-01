import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/user';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default signUp;
