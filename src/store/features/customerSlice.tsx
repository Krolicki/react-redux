import { PayloadAction, createSlice } from '@reduxjs/toolkit'



type Customer = {
    id: string;
    name: string;
    food: string[];
}

type CustomerState = {
    value: Customer[];
}

const initialState : CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: {
            reducer(state, action : PayloadAction<Customer>) {
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
        deleteCustomer: (state, action : PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        },
        addFood: (state, action : PayloadAction<{id: string, food: string}>) => {
            state.value.forEach(customer => {
                if(customer.id === action.payload.id)
                    customer.food.push(action.payload.food)
            })
        },

    }
})

export const { addCustomer, deleteCustomer, addFood } = customerSlice.actions

export default customerSlice.reducer