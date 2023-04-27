import { createSlice } from '@reduxjs/toolkit'

type Theme = {
    color: string
}

const initialState : Theme = {
    color: ""
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
    }
})

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer