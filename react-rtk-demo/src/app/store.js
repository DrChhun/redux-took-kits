import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './features/cake/cakeSlice'
// import reduxLogger from 'redux-logger'
import icecreamReducer from './features/icecream/icecreamSlice'
import userReducer from './features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    //specifiy all reducer that belong to features
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store