import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'Post 1', content: 'Sint et esse labore cupidatat dolore exercitation veniam dolor dolore mollit magna veniam veniam Lorem.'},
    {id: 2, title: 'Post 2', content: 'Et officia ut ea cupidatat amet nulla reprehenderit eiusmod.'}
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const getAllPosts = state => state.posts

export const { addPost } = postsSlice.actions

export default postsSlice.reducer