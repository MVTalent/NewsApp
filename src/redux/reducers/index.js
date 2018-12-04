import { combineReducers } from 'redux';
import auth from '../actions/auth';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;