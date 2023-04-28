import axios, { AxiosResponse } from 'axios'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPostsSucceeded, setPost } from './features/posts/postsSlice'
import { PayloadAction } from '@reduxjs/toolkit'


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

function* workGetPosts() : Generator<any, any, any>{
    const response = yield call(() => axios.get(POSTS_URL))
    const posts = yield response.data
    yield put(getPostsSucceeded(posts))
}

function* workAddPost(action : PayloadAction): Generator<any, void, AxiosResponse<any>> {
    try {
        const response: AxiosResponse = yield axios.post(POSTS_URL, action.payload)
        yield put(setPost(response.data))
    }
    catch (err : any) {
        yield put(setPost(err.message))
    }
}

function* postsSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPosts)
    yield takeLatest('posts/addPost', workAddPost)
}

export default postsSaga