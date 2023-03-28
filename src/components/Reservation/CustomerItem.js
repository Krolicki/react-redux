import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addFood, deleteCustomer } from '../../store/features/customerSlice'
import './Reservation.css'

const CustomerItem = ({ name, id, food, index }) => {
    const dispatch = useDispatch()

    const foodRef = useRef()

    const deleteItem = () => {
        dispatch(deleteCustomer(index))
    }

    return (
        <div className='reservation-item'>
            <p>{name}</p>
            <span className='food'>
                Orders:
                {food.map(food => {
                    return (
                        <p key={food}>{food}</p>
                    )
                })}
            </span>
            <span className='add-food'>
                <input type="text" placeholder='enter food' ref={foodRef} />
                <button
                    type='button'
                    onClick={()=>{
                        dispatch(addFood({id, food: foodRef.current.value}))
                        foodRef.current.value = ""
                    }}
                >
                    Add
                </button>
            </span>
            <button type='button' onClick={() => deleteItem()}>Delete</button>
        </div>
    )
}

export default CustomerItem