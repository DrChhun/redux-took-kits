const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')
const reduxLogger = require('redux-logger')
const icecreamReducer = require('./features/icecream/icecreamSlice')
const userReducer = require('./features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    //specifiy all reducer that belong to features
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store