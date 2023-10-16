import { CATEGORIES_ACTION_TYPE } from "./CategoryTypes";
import { createAction } from "../../Utils/Reducer/Reducer";

/**
 * Fetch categories start.
 *
 * @return {Action} The fetch categories start action.
 */
export const fetchCategoriesStart=()=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

/**
 * Creates a success action for fetching categories.
 *
 * @param {Array} categoriesArray - An array of categories.
 * @return {Object} The created action.
 */
export const fetchCategoriesSuccess=(categoriesArray)=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

/**
 * Creates an action for when fetching categories fails.
 *
 * @param {Error} error - The error that occurred during fetching.
 * @return {Action} The action object representing the failure.
 */
export const fetchCategoriesFailed=(error)=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)
