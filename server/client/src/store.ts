import { applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { IApplicationState } from './core/interfaces';

const initialState: IApplicationState = {
	users: []
} as IApplicationState;

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk]
});

export default store;