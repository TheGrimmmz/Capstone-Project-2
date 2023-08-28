import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../Root/RootReducer';
import { rootSaga } from '../RootSaga/RootSaga';

// import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const Store = configureStore({
//   reducer: rootReducer,
//   middleware: middleWares
// })

export const Store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(Store);
