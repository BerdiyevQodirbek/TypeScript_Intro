import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/auth";
import logger from 'redux-logger'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const rootReducers = combineReducers({
    auth: authReducer,

})

const store = createStore(rootReducers, applyMiddleware(logger))
const persistor = persistStore(store)


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ["auth"]

}

export { store as default, persistor };