import { useRef } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from '../store/features/themeSlice'

const ChangeTheme = () => {
    const dispatch = useDispatch()

    const colorRef = useRef()

    return (
        <div>
            <input type="color" ref={colorRef} />
            <button type="button" onClick={() => { dispatch(changeColor(colorRef.current.value))}}>Change color</button>
        </div>
    )
}

export default ChangeTheme