import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: {
            reducer(state, action) {
                state.value.push(action.payload)
            },
            prepare(id, name) {
                return {
                    payload: {
                        id,
                        name,
                        food: []
                    }
                }
            }
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