import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { sub } from 'date-fns'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL)
        return response.data
    }
    catch (err) {
        return err.message
    }
})

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.posts.push(action.payload)
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
            const { postID, reaction } = action.payload
            const postToAdd = state.posts.find(post => post.id === postID)
            if (postToAdd) {
                postToAdd.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                let minutes = 1
                const fetchedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: minutes++ }).toISOString()
                    post.reactions = {
                        up: Math.floor(Math.random() * 10),
                        down: Math.floor(Math.random() * 6)
                    }
                    return post
                })
                state.posts = state.posts.concat(fetchedPosts)
                console.log(state.posts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const getAllPosts = state => state.posts.posts
export const getPostsStatus = state => state.posts.status
export const getPostsError = state => state.posts.error

export const { addPost, addReaction } = postsSlice.actions

export default postsSlice.reducer