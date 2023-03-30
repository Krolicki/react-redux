import { useSelector } from "react-redux"
import { getAllPosts } from "../../store/features/posts/postsSlice"


const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const allPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,150)}</p>
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