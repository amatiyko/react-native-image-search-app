import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import devtools from 'remote-redux-devtools';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, logger);

export const Store = createStore(
    RootReducer,
    compose (
        middleware,
        devtools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
    )
);