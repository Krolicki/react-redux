import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/accountSlice'
import reservationSlice from './features/reservationSlice'
import themeSlice from './features/themeSlice'

export const store = configureStore({
    reducer:{
        account: accountReducer,
        theme: themeSlice,
        reservation: reservationSlice,
    }
})