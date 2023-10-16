import { takeLatest, all, call, put } from 'redux-saga/effects'
import { getCategories } from '../../Utils/Firebase/Firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './CategoryAction';
import { CATEGORIES_ACTION_TYPE } from './CategoryTypes';

/**
 * Fetches categories asynchronously.
 *
 * @return {Generator} A generator function.
 */
export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategories, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (e) {
        yield put(fetchCategoriesFailed(e))
    }
}

/**
 * Generates a generator function that listens for the FETCH_CATEGORIES_START action
 * and executes the fetchCategoriesAsync function.
 *
 * @return {Generator} The generator function.
 */
export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

/**
 * Generates a generator function for handling categories.
 *
 * @return {Generator} A generator function that yields a call to onFetchCategories.
 */
export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}
