import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // redux persist para almancenar datos de sesión o de forma local: https://www.npmjs.com/package/redux-persist
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // crea una version persistente del store previamente creado

export default { store, persistor };