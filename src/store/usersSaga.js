import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getUsers } from './features/posts/usersSlice'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function* workGetUsers(){
    const response = yield call(()=> axios.get(USERS_URL))
    const users = yield response.data
    console.log(users)
    yield put(getUsers(users))
}

function* usersSaga() {
    yield takeEvery('users/getUsersFetch', workGetUsers)
}

export default usersSaga