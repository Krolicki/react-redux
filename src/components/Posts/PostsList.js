import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getAllPosts, getPostsError, getPostsStatus } from "../../store/features/posts/postsSlice"
import { useEffect } from "react"
import Post from "./Post"


const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(getAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    useEffect(()=>{
        if(postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    },[postsStatus, dispatch])

    let content

    if(postsStatus === 'loading'){
        content = <p>Loading...</p>
    }
    else if(postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => (
            <Post post={post} key={post.id} />
        ))
    }
    else if(postsStatus === 'failed'){
        content = <p>{postsError}</p>
    }


    return(
        <section className="posts-wrapper">
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList