import { useRef } from "react"
import { useDispatch } from "react-redux"
import { add, subtract } from '../store/features/accountSlice'

const ChangeBalance = () => {
    const dispatch = useDispatch()

    const numberRef = useRef()

    return (
        <div>
            <input type="number" placeholder="number" ref={numberRef} /><br />
            <button
                type="button"
                onClick={() => {
                    dispatch(add(numberRef.current.value))
                }}
            >
                Add
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(subtract(numberRef.current.value))
                }}
            >
                Subtract
            </button>
        </div>
    )
}

export default ChangeBalance