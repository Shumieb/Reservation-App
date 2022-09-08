import React from 'react'
import { useDispatch } from "react-redux"
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid } from "uuid"

interface ReservationsCardTypes{
    name: string
    index: number
}

export default function ReservationsCard({ name, index }: ReservationsCardTypes) {

    const dispatch = useDispatch()

    const handleReservationCardClick = () =>{
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id: uuid(),
            name,
            food: []
        }))
    }

  return (
    <div 
        onClick={handleReservationCardClick} 
        className="card pt-3 pb-3 bg-primary text-white w-75 m-auto mb-4"
        style={{cursor: "pointer"}}
    > 
        <div className='card-content'>
            <p className='m-0 d-inline'>Reservation for: </p>
            <p className='m-0 d-inline ms-1'>{name}</p>
        </div>   
    </div>
  )
}
