import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from '../Categories/CategorySaga'

export function* rootSaga() {
    yield all([call(categoriesSaga)])
}
