import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"
import PostAuthor from "./PostAuthor"

const Post = ({ post }) => {
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