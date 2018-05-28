import AppReducer from './AppReducer';
import { combineReducers } from 'redux';

export default combineReducers ({
    app: AppReducer
});