import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const customerIDSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        nextCustomer: (state) => {
            state.value++
        },
    }
})

export const { nextCustomer } = customerIDSlice.actions

export default customerIDSlice.reducer