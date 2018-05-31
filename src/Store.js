import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

export const Store = createStore(
    RootReducer,
    applyMiddleware(thunk, logger)
);