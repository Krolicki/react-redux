import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Sint et esse labore cupidatat dolore exercitation veniam dolor dolore mollit magna veniam veniam Lorem.',
        author: "lorem",
        date: sub(new Date(), { minutes: 15}).toISOString(),
        reactions: {
            up: 2,
            down: 1
        }
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Et officia ut ea cupidatat amet nulla reprehenderit eiusmod.',
        author: "ipsum",
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            up: 5,
            down: 0
        }
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
                        date: new Date().toISOString(),
                        reactions: {
                            up: 0,
                            down: 0
                        }
                    }
                }
            }
        },
        addReaction(state, action) {
            const { postID, reaction} = action.payload
            const postToAdd = state.find(post => post.id === postID)
            if(postToAdd) {
                postToAdd.reactions[reaction]++
            }
        }
    }
})

export const getAllPosts = state => state.posts

export const { addPost, addReaction } = postsSlice.actions

export default postsSlice.reducer