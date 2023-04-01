import AddPost from './AddPost'
import './Posts.css'
import PostsList from './PostsList'

const Posts = () => {

    return(
        <div className='posts-container'>
            <AddPost />
            <PostsList />
        </div>
    )
}

export default Posts