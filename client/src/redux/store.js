import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducerSlice from "./reducerSlice";


export const store = createStore(reducerSlice, applyMiddleware(thunk))

export default store;


