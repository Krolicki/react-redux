import { useDispatch, useSelector } from 'react-redux'
import AddPost from './AddPost'
import './Posts.css'
import PostsList from './PostsList'
import { useEffect } from 'react'
import { getUsersFetch } from '../../store/features/posts/usersSlice'

const Posts = () => {
    const users = useSelector(state => state.users)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsersFetch())
        console.log(users)
    },[])
    
    return(
        <div className='posts-container'>
            <AddPost />
            {/* <PostsList /> */}
        </div>
    )
}

export default Posts