import { CATEGORIES_ACTION_TYPE } from "./CategoryTypes";
import { createAction } from "../../Utils/Reducer/Reducer";

export const fetchCategoriesStart=()=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess=(categoriesArray)=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed=(error)=>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)
