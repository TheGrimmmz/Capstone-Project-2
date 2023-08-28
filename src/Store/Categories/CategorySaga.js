import { takeLatest, all, call, put } from 'redux-saga/effects'
import { getCategories } from '../../Utils/Firebase/Firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './CategoryAction';
import { CATEGORIES_ACTION_TYPE } from './CategoryTypes';

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategories, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (e) {
        yield put(fetchCategoriesFailed(e))
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}
