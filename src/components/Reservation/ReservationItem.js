import { useDispatch } from 'react-redux'
import { addCustomer } from '../../store/features/customerSlice'
import { deleteReservation } from '../../store/features/reservationSlice'
import './Reservation.css'

const ReservationItem = ({ name, index, id }) => {
    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteReservation(index))
    }

    return (
        <div className='reservation-item'>
            <div
                className='reservation-name'
                onClick={() => {
                    dispatch(
                        addCustomer(id, name)
                    )
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