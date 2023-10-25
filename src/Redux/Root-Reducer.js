import { combineReducers } from 'redux';
import useReducers from './Reducer';

const rootReducer = combineReducers({
  
    data: useReducers,
    
})

export default rootReducer;