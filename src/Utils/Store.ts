import { applyMiddleware, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducers";

export default function configureStore(persistedState: Object): Store {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );

  return store;
}
