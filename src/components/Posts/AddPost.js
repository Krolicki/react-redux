import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../../store/features/posts/postsSlice"

const AddPost = () => {
    const userRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()

    const dispatch = useDispatch()

    const savePost = () => {
        const author = userRef.current.value
        const title = titleRef.current.value
        const content = contentRef.current.value

        if (author && title && content) {
            dispatch(
                addPost(title, content, author)
            )
            userRef.current.value =""
            titleRef.current.value = ""
            contentRef.current.value = ""
        }
    }

    return (
        <section className="add-post-wrapper">
            <h2>Add Post</h2>
            <form>
                <label htmlFor="username">Your name</label>
                <input
                    type="text"
                    name="username"
                    ref={userRef}
                />
                <label htmlFor="title">Post title</label>
                <input
                    type="text"
                    name="title"
                    ref={titleRef}
                />
                <label htmlFor="content">Post content</label>
                <textarea
                    type="text"
                    name="content"
                    ref={contentRef}
                />
                <button type="button" onClick={savePost}>Save</button>
            </form>
        </section>
    )
}

export default AddPost