import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/posts/postsSlice'
// import accountReducer from './features/accountSlice'
// import themeReducer from './features/themeSlice'

// import customerIDReducer from './features/customerIDSlice'
// import customerReducer from './features/customerSlice'
// import reservationReducer from './features/reservationSlice'

export const store = configureStore({
    reducer:{
        //account: accountReducer,
        //theme: themeReducer,

        // reservation: reservationReducer,
        // customer: customerReducer,
        // customerID: customerIDReducer,

        posts: postsReducer,
    }
})