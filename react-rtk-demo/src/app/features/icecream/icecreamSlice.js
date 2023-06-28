import { ordered as cakeOrderd } from '../cake/cakeSlice'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIcecreams: 10
}

const icecreamSlice = createSlice({ //add 3 argument (name, initialState, reducer)
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrderd, state => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions