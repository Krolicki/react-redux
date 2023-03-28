import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReservation } from '../../store/features/reservationSlice'
import CustomerItem from './CustomerItem'
import './Reservation.css'
import ReservationItem from './ReservationItem'

const Reservation = () => {
    const dispatch = useDispatch()
    const reservations = useSelector((state) => state.reservation.value)
    const customers = useSelector((state) => state.customer.value)

    const reservationRef = useRef()

    return (
        <div className='reservation-container'>
            <div className='reservations'>
                <h2>Reservations:</h2>
                {reservations.map((reserv, index) => {
                    return (
                        <ReservationItem name={reserv} index={index} key={index} />
                    )
                })
                }
                <span>
                    <input
                        type="text"
                        ref={reservationRef}
                    />
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(addReservation(reservationRef.current.value))
                            reservationRef.current.value = ""
                        }}
                    >
                        Add
                    </button>
                </span>
            </div>
            <div className='customers'>
                {customers.map((customer, index) => {
                    return (
                        <CustomerItem
                            name={customer.name}
                            id={customer.id}
                            food={customer.food}
                            index={index}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Reservation