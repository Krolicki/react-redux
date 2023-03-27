import { useDispatch } from 'react-redux'
import { deleteReservation } from '../../store/features/reservationSlice'
import './Reservation.css'

const ReservationItem = ({name, index}) => {
    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteReservation(index))
    }

    return(
        <div className='reservation-item'>
            <p>{name}</p>
            <button type='button' onClick={()=>deleteItem() }>Delete</button>
        </div>
    )
}

export default ReservationItem