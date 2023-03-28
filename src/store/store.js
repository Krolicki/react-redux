import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/accountSlice'
import customerIDReducer from './features/customerIDSlice'
import customerReducer from './features/customerSlice'
import reservationReducer from './features/reservationSlice'
import themeReducer from './features/themeSlice'

export const store = configureStore({
    reducer:{
        account: accountReducer,
        theme: themeReducer,
        reservation: reservationReducer,
        customer: customerReducer,
        customerID: customerIDReducer,
    }
})