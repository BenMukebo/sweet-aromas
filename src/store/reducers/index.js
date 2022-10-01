import { combineReducers } from 'redux';
import recipes from './recipes';
import filter from './filter';
import categories from './categories';
import recipeDetails from './recipeDetails';
import signUp from './signUp';
import logIn from './logIn';
import users from './users';

const reducer = combineReducers({
  recipes,
  filter,
  categories,
  recipeDetails,
  signUp,
  logIn,
  users,
});

export default reducer;
