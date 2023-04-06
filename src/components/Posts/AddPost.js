import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addNewPost } from "../../store/features/posts/postsSlice"

const AddPost = () => {
    const userRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()

    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const savePost = () => {
        const author = userRef.current.value
        const title = titleRef.current.value
        const body = contentRef.current.value

        if (author && title && body && addRequestStatus === 'idle') {
            try{
                setAddRequestStatus('pending')
                dispatch(
                    addNewPost({title, body, author})
                ).unwrap()
                userRef.current.value =""
                titleRef.current.value = ""
                contentRef.current.value = ""
            }
            catch (err){
                console.log(err)
            }
            finally {
                setAddRequestStatus('idle')
            }
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