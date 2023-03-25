import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    balance: 0
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        add: (state, action) => {
            state.balance += Number(action.payload)
        },
        subtract: (state, action) => {
            state.balance -= Number(action.payload)
        }
    }
})

export const {add, subtract} = accountSlice.actions

export default accountSlice.reducer