import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import postsReducer from './features/posts/postsSlice'
import usersReducer from './features/posts/usersSlice'
import usersSaga from './usersSaga'
import postsSaga from './postsSaga'

// import accountReducer from './features/accountSlice'
// import themeReducer from './features/themeSlice'

// import customerIDReducer from './features/customerIDSlice'
// import customerReducer from './features/customerSlice'
// import reservationReducer from './features/reservationSlice'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        //account: accountReducer,
        //theme: themeReducer,

        // reservation: reservationReducer,
        // customer: customerReducer,
        // customerID: customerIDReducer,

        posts: postsReducer,
        users: usersReducer,
    },
    middleware: [saga]
})

saga.run(usersSaga)
saga.run(postsSaga)