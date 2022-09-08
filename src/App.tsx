import React, { useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { RootState } from './app/store';
import ReservationsCard from './Components/ReservationsCard';
import { addReaservation } from './features/reservationSlice';
import CustomerCard from './Components/CustomerCard';

function App() {

    const [ reservationNameInput, setReservationNameInput] = useState("")

    const dispatch = useDispatch();

    const reservations = useSelector((state: RootState)=> state.reservations.value)
    const customers = useSelector((state: RootState)=> state.customers.value)

    const handleAddReservations = () => {
      if(!reservationNameInput) return
      dispatch(addReaservation(reservationNameInput))
      setReservationNameInput("")
    }

  return (
    <div className="container">
      <h2 className='text-center mt-4'><u>Reservations App</u></h2>
      <section className='mt-5 p-2 row text-center'>
        <div className='col-5 border-end border-primary border-3'>
          <h5 className='mb-4'>Reservations</h5>
          <div className='d-flex justify-content-center align-items-center'>
            <input 
              className='form-control me-2 w-50'
              type="text" 
              value={ reservationNameInput } 
              onChange={(e) => setReservationNameInput(e.target.value)} 
              placeholder="Add New Reservation"
            />
            <button 
              className='btn btn-primary'
              onClick={handleAddReservations}
            >Add</button>
          </div>
          <div className='mt-4 mb-4'>
            {reservations.map((name, index) =>{
              return <ReservationsCard key={index} name={name} index={index}/>
            })}
          </div>          
        </div>
        <div className='col-7'>
          <h5 className='mb-4'>Customers</h5>
          <div>
            {customers.map(customer => {
              return <CustomerCard key={customer.id} id={customer.id} name={customer.name} food={customer.food} />            
            })}
          </div>
        </div>
      </section>      
    </div>
  );
}

export default App;
