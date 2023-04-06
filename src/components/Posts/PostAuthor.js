import { useSelector } from "react-redux"
import { getAllUsers } from "../../store/features/posts/usersSlice"

const PostAuthor = ({ userID }) => {
    const users = useSelector(getAllUsers)

    const author = users.find(user => user.id === userID)

    return (
        <span>author: {author ? author.name : "Unknow"}</span>
    )
}

export default PostAuthor