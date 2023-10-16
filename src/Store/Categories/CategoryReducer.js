import { CATEGORIES_ACTION_TYPE } from "./CategoryTypes";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
}

/**
 * Reduces the state based on the given action.
 *
 * @param {object} state - The current state.
 * @param {object} action - The action object.
 * @param {string} action.type - The type of the action.
 * @param {*} action.payload - The payload of the action.
 * @return {object} The new state after reducing.
 */
export const categoriesReducer = (state=CATEGORIES_INITIAL_STATE, action={})=>{
    const {type, payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {...state, isLoading: true}
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
        return {...state, categories: payload, isLoading: false};
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
        return {...state, error: payload, isLoading: false};
        default:
            return state
    }
}
