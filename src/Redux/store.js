import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Root-Reducer'; // Replace this with the correct path to your root reducer
import thunk from 'redux-thunk'


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
     
     );

 export default store;