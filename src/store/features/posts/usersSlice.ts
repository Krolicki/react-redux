import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../store'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

interface User {
  id: number;
  name: string;
}
 
type UserType<T extends User> = T[]

const initialState = [] as UserType<User>

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return response.data
    }
    catch (err: any) {
        return err.message
    }
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsersFetch() { },
        getUsers: (state, action) => {
            return action.payload
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchUsers.fulfilled, (state, action) => {
    //             return action.payload
    //         })
    // }
})

export const getAllUsers = (state : RootState)  => state.users

export const { getUsersFetch, getUsers } = usersSlice.actions

export default usersSlice.reducer