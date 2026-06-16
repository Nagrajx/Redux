import { configureStore } from "@reduxjs/toolkit";
import searchReducers from './Features/searchSlice'
import collectionReducer from './Features/collectionSlice'

export const store = configureStore({
    reducer:{
        search:searchReducers,
        collection:collectionReducer
    }
})