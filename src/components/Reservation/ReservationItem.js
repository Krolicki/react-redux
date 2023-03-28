import { useDispatch, useSelector } from 'react-redux'
import { nextCustomer } from '../../store/features/customerIDSlice'
import { addCustomer } from '../../store/features/customerSlice'
import { deleteReservation } from '../../store/features/reservationSlice'
import './Reservation.css'

const ReservationItem = ({ name, index }) => {
    const dispatch = useDispatch()
    const customerID = useSelector(state => state.customerID.value)

    const deleteItem = () => {
        dispatch(deleteReservation(index))
    }

    return (
        <div className='reservation-item'>
            <div
                className='reservation-name'
                onClick={() => {
                    dispatch(addCustomer({
                        id: customerID,
                        name,
                        food: []
                    }))
                    dispatch(nextCustomer())
                    deleteItem()
                }}
            >
                <p>{name}</p>
            </div>
            <button type='button' onClick={() => deleteItem()}>Delete</button>
        </div>
    )
}

export default ReservationItem