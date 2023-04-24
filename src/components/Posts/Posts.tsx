import { useDispatch } from 'react-redux'
import AddPost from './AddPost'
import './Posts.css'
import PostsList from './PostsList'
import { useEffect } from 'react'
import { getUsersFetch } from '../../store/features/posts/usersSlice'

const Posts = () => {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsersFetch())
    },[dispatch])
    
    return(
        <div className='posts-container'>
            <AddPost />
            <PostsList />
        </div>
    )
}

export default Posts