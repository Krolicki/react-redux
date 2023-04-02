import { useSelector } from "react-redux"
import { getAllPosts } from "../../store/features/posts/postsSlice"
import TimeAgo from "./TimeAgo"


const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const allPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,150)}</p>
            <p className="post-info">
                <span>
                    author: <b>{post.author}</b>
                </span>
                <TimeAgo timestapm={post.date} />
            </p>
        </article>
    ))

    return(
        <section className="posts-wrapper">
            <h2>Posts</h2>
            {allPosts}
        </section>
    )
}

export default PostsList