const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')

const store = configureStore({
    //specifiy all reducer that belong to features
    reducer: {
        cake: cakeReducer
    }
})

module.exports = store