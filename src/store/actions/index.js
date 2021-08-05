import axios from 'axios';

const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const categoriesEndPoint = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const LOAD_RECIPES_SUCCESS = 'LOAD_RECIPES_SUCCESS';
export const LOAD_RECIPES_FAILURE = 'LOAD_RECIPES_FAILURE';
export const API_CALL_START = 'API_CALL_START';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';
export const LOAD_CATEGORIES_START = 'LOAD_CATEGORIES_START';

const loadRecipesSuccess = (data) => ({
  type: LOAD_RECIPES_SUCCESS,
  payload: data,
});

const apiCallStart = () => ({
  type: API_CALL_START,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const loadRecipesFailure = (error) => ({
  type: LOAD_RECIPES_FAILURE,
  payload: error,
});

const loadCategoriesSuccess = (categories) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: categories,
});

const loadCategoriesFailure = (error) => ({
  type: LOAD_CATEGORIES_FAILURE,
  payload: error,
});

const loadCategoriesStart = () => ({
  type: LOAD_CATEGORIES_START,
});

export const loadRecipesAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const response = await axios.get(endPoint);
    dispatch(loadRecipesSuccess(response.data.meals));
  } catch (error) {
    dispatch(loadRecipesFailure(error.message));
  }
  axios.get(endPoint);
};

export const loadCategoriesAsync = () => async (dispatch) => {
  dispatch(loadCategoriesStart());
  try {
    const response = await axios.get(categoriesEndPoint);
    dispatch(loadCategoriesSuccess(response.data.categories));
  } catch (error) {
    dispatch(loadCategoriesFailure(error.message));
  }
  axios.get(endPoint);
};
