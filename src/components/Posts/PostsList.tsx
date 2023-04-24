import { useSelector } from "react-redux"
import { StatusType, getPostsError, getPostsIds, getPostsStatus } from "../../store/features/posts/postsSlice"
import Post from "./Post"

const PostsList = () => {
    const orderedPostsIds = useSelector(getPostsIds)
    const postsStatus = useSelector(getPostsStatus) as StatusType
    const postsError = useSelector(getPostsError)

    let content

    if (postsStatus === 'loading') {
        content = <p>Loading...</p>
    }
    else if (postsStatus === 'succeeded') {
        content = orderedPostsIds.map(postId => (
            <Post postId={postId} key={postId} />
        ))
    }
    else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>
    }


    return (
        <section className="posts-wrapper">
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList