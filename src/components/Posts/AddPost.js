import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../../store/features/posts/postsSlice"

const AddPost = () => {
    const titleRef = useRef()
    const contentRef = useRef()

    const dispatch = useDispatch()

    const savePost = () => {
        const title = titleRef.current.value
        const content = contentRef.current.value
        if (title && content) {
            dispatch(
                addPost(title, content)
            )
            titleRef.current.value = ""
            contentRef.current.value = ""
        }
    }

    return (
        <section className="add-post-wrapper">
            <h2>Add Post</h2>
            <form>
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