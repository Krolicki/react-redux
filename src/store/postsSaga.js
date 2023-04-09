import axios from 'axios'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPostsSucceeded, setPost } from './features/posts/postsSlice'


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

function* workGetPosts() {
    const response = yield call(() => axios.get(POSTS_URL))
    const posts = yield response.data
    yield put(getPostsSucceeded(posts))
}

function* workAddPost(action) {
    try {
        const response = yield axios.post(POSTS_URL, action.payload)
        console.log(response)
        yield put(setPost(response.data))
    }
    catch (err) {
        yield put(setPost(err.message))
    }
}

function* postsSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPosts)
    yield takeLatest('posts/addPost', workAddPost)
}

export default postsSaga