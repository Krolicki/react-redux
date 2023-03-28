import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload)
        },
        deleteCustomer: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        addFood: (state, action) => {
            state.value.forEach(customer => {
                if(customer.id === action.payload.id)
                    customer.food.push(action.payload.food)
            })
        },

    }
})

export const { addCustomer, deleteCustomer, addFood } = customerSlice.actions

export default customerSlice.reducer