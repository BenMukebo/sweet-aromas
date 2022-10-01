import {
  USERS_SUCCESS,
  USERS_FAILURE,
} from '../actions/user';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
      };
    case USERS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default users;
