import location_tree from './state';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
    const rootReducer = combineReducers({location_tree});
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;

