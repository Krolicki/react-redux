import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Sint et esse labore cupidatat dolore exercitation veniam dolor dolore mollit magna veniam veniam Lorem.',
        author: "lorem",
        date: sub(new Date(), { minutes: 15}).toISOString()
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Et officia ut ea cupidatat amet nulla reprehenderit eiusmod.',
        author: "ipsum",
        date: sub(new Date(), { minutes: 10}).toISOString()
    }
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, author) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        author,
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
})

export const getAllPosts = state => state.posts

export const { addPost } = postsSlice.actions

export default postsSlice.reducer