import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReservation } from '../../store/features/reservationSlice'
import { nextCustomer } from '../../store/features/customerIDSlice'
import CustomerItem from './CustomerItem'
import './Reservation.css'
import ReservationItem from './ReservationItem'
import { RootState } from '../../store/store'

const Reservation = () => {
    const dispatch = useDispatch()
    const reservations = useSelector((state : RootState) => state.reservation.value)
    const customers = useSelector((state: RootState) => state.customer.value)
    const customerID = useSelector((state : RootState) => state.customerID.value)

    const reservationRef = useRef<HTMLInputElement>(null)

    return (
        <div className='reservation-container'>
            <div className='reservations'>
                <h2>Reservations:</h2>
                {reservations.map((reserv, index) => {
                    return (
                        <ReservationItem 
                            name={reserv.name} 
                            index={index}
                            id={reserv.id} 
                            key={index} 
                        />
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
                            dispatch(
                                addReservation({
                                    id: customerID,
                                    name: reservationRef.current?.value,
                                })
                            )
                            if(reservationRef.current)
                                reservationRef.current.value = ""
                            dispatch(nextCustomer())
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