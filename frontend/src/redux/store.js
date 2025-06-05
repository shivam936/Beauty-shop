import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userRedux"

import cartReducer from "./cartRedux"

import {persistReducer, REHYDRATE, FLUSH , PAUSE, PERSIST} from "redux-persist"

import  storage from "redux-persist/lib/storage"

import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: "root",
    version:1,
    storage,
}

const rootReducer = combineReducers({user: userReducer, cart: cartReducer})

const persistReducer = persistReducer(persistConfig , rootReducer);

export const store = configureStore({
    reducer: persistReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH , REHYDRATE, PAUSE, PERSIST , PURGE, REGISTER]
        }
    })
})

export  let persister = persistStore(store)


