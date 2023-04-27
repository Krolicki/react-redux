import { useRef } from "react"
import { useDispatch } from "react-redux"
import { add, subtract } from '../store/features/accountSlice'

const ChangeBalance = () => {
    const dispatch = useDispatch()

    const numberRef = useRef<HTMLInputElement>(null)

    function handleBalanceChange( action : "add" | "subtract") {
        if(numberRef.current){
            if(action === "add")
                dispatch(add(numberRef.current.value))
            else
                dispatch(subtract(numberRef.current.value))
            
            numberRef.current.value = ""
        }
    }

    return (
        <div>
            <input type="number" placeholder="number" ref={numberRef} /><br />
            <button
                type="button"
                onClick={() => {
                    handleBalanceChange("add")
                }}
            >
                Add
            </button>
            <button
                type="button"
                onClick={() => {
                    handleBalanceChange("subtract")
                }}
            >
                Subtract
            </button>
        </div>
    )
}

export default ChangeBalance