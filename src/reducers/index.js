import { combineReducers } from 'redux';
import * as heroReducers from './hero';

export default combineReducers({
    ...heroReducers
});
