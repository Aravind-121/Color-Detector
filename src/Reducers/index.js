import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {modelReducer} from './modelReducer';

const rootReducers = combineReducers({ 
    result: modelReducer,
    form: formReducer
})

export default rootReducers;