import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/accountSlice'
import themeSlice from './features/themeSlice'

export const store = configureStore({
    reducer:{
        account: accountReducer,
        theme: themeSlice
    }
})