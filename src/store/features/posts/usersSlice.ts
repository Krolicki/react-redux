import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../store'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

const initialState = [] as UserType[]

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