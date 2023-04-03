import { useDispatch } from "react-redux"
import { addReaction } from "../../store/features/posts/postsSlice"
import { useState } from "react"

const Reactions = ({ reactions, postID }) => {
    const [reactionAdded, setReactionAdded] = useState(false)

    const dispatch = useDispatch()

    const handleReaction = (reaction) => {
        if(!reactionAdded){
            dispatch(
                addReaction({ postID, reaction})
            )
            setReactionAdded(true)
        }
    } 

    return (
        <div className="reactions">
            <button
                type="button"
                onClick={()=> handleReaction("up")}
            >
                &#128077;{reactions.up}
            </button>
            <button
                type="button"
                onClick={()=> handleReaction("down")}
            >
                &#128078;{reactions.down}
            </button>
        </div>
    )
}
export default Reactions