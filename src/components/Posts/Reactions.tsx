import { useDispatch } from "react-redux"
import { addReaction } from "../../store/features/posts/postsSlice"
import { useState } from "react"

type ReactionsProps = {
    reactions: {
        up: number
        down: number
    } | undefined
    postID: number | undefined
}

const Reactions = ({ reactions, postID } : ReactionsProps) => {
    const [reactionAdded, setReactionAdded] = useState(false)

    const dispatch = useDispatch()

    const handleReaction = (reaction :  "up" | "down") => {
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
                &#128077;{reactions?.up}
            </button>
            <button
                type="button"
                onClick={()=> handleReaction("down")}
            >
                &#128078;{reactions?.down}
            </button>
        </div>
    )
}
export default Reactions