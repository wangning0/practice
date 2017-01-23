/**
 * Created by wangning on 2017/1/23.
 */
import { createAction } from 'redux-actions';
import WebApi from '../utils/WebApi';

import {
  GET_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  SET_RECIPE,
} from '../constants/actionTypes';

export const getRecipes = createAction(GET_RECIPES, WebApi.getRecipes);
export const addRecipes = createAction(ADD_RECIPE, WebApi.addRecipes);
export const updateRecipe = createAction('UPDATE_RECIPE', WebAPI.updateRecipe);
export const deleteRecipe = createAction('DELETE_RECIPE', WebAPI.deleteRecipe);
export const setRecipe = createAction('SET_RECIPE');