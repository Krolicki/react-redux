import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
//import axios from 'axios'
import { sub } from 'date-fns'
import { RootState } from '../../store';

//const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

type Post = {
    id: number
    userId: number
    title: string
    body: string
    date: string
    reactions: {
      up: number
      down: number
    }
  }

const postsAdapter = createEntityAdapter<Post>({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null
})

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//     try {
//         const response = await axios.get(POSTS_URL)
//         return response.data
//     }
//     catch (err) {
//         return err.message
//     }
// })

// export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
//     try {
//         const response = await axios.post(POSTS_URL, initialPost)
//         return response.data
//     }
//     catch (err) {
//         return err.message
//     }
// })

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsFetch: (state) => {
            state.status = "loading"
        },
        getPostsSucceeded: (state, action : PayloadAction<Post[]>) => {
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
            postsAdapter.upsertMany(state, fetchedPosts)
        },
        getPostsRejected: (state, action: PayloadAction<{ error: { message: string } }>) => {
            state.status = "failed"
            state.error = action.payload.error.message
        },
        addPost: (state,action : PayloadAction<Post>) => {},
        setPost: (state, action : PayloadAction<Post>) => {
            action.payload.userId = Number(action.payload.userId)
            action.payload.date = (new Date()).toISOString()
            action.payload.reactions = {
                up: 0,
                down: 0
            }
            postsAdapter.addOne(state, action.payload)
        },
        // addPost: {
        //     reducer(state, action) {
        //         state.posts.push(action.payload)
        //     },
        //     prepare(title, content, author) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 content,
        //                 author,
        //                 date: new Date().toISOString(),
        //                 reactions: {
        //                     up: 0,
        //                     down: 0
        //                 }
        //             }
        //         }
        //     }
        // },
        addReaction(state, action :  PayloadAction<{ postID: string; reaction: "up" | "down" }>) {
            const { postID, reaction } = action.payload
            const postToAdd = state.entities[postID]
            if (postToAdd) {
                postToAdd.reactions[reaction]++
            }
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchPosts.pending, (state) => {
    //             state.status = "loading"
    //         })
    //         .addCase(fetchPosts.fulfilled, (state, action) => {
    //             state.status = "succeeded"
    //             let minutes = 1
    //             const fetchedPosts = action.payload.map(post => {
    //                 post.date = sub(new Date(), { minutes: minutes++ }).toISOString()
    //                 post.reactions = {
    //                     up: Math.floor(Math.random() * 10),
    //                     down: Math.floor(Math.random() * 6)
    //                 }
    //                 return post
    //             })
    //             state.posts = state.posts.concat(fetchedPosts)
    //         })
    //         .addCase(fetchPosts.rejected, (state, action) => {
    //             state.status = "failed"
    //             state.error = action.error.message
    //         })
    //         .addCase(addNewPost.fulfilled, (state, action) => {
    //             action.payload.userId = Number(action.payload.userId)
    //             action.payload.date = (new Date()).toISOString()
    //             action.payload.reactions = {
    //                 up: 0,
    //                 down: 0
    //             }
    //             state.posts.push(action.payload)
    //         })
    //}
})

export const {
    selectAll: getAllPosts,
    selectById: getPostById,
    selectIds: getPostsIds
} = postsAdapter.getSelectors((state : RootState) => state.posts)

export const getPostsStatus = (state : RootState) => state.posts.status
export const getPostsError = (state : RootState) => state.posts.error

export const {
    getPostsFetch,
    getPostsSucceeded,
    getPostsRejected, 
    addPost, 
    setPost, 
    addReaction 
} = postsSlice.actions

export default postsSlice.reducer