import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"
import PostAuthor from "./PostAuthor"
import { useSelector } from "react-redux"
import { getPostById } from "../../store/features/posts/postsSlice"

const Post = ({ postId }) => {
    const post = useSelector(state => getPostById(state, postId))

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 150)}</p>
            <p className="post-info">
                <PostAuthor userID={post.userId} author={post.author}/>
                <TimeAgo timestapm={post.date} />
            </p>
            <Reactions reactions={post.reactions} postID={post.id} />
        </article>
    )
}

export default Post