import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { addFoodToCustomer } from '../features/customerSlice'

interface CustomerCardType {
    id: string;
    name: string;
    food: string[]
}

export default function CustomerCard({id, name, food}: CustomerCardType) {

    const dispatch = useDispatch()
    const [customerFoodInput, setCustomerFoodInput] = useState("")
    const foodlastIndex = food.length - 1

    const handleAddFood = () =>{
        if(!customerFoodInput) return
        dispatch(addFoodToCustomer({id: id, food: customerFoodInput}))
        setCustomerFoodInput("")
    }

  return (
    <div className='card mb-4 p-3 bg-primary text-white'>
        <div className='card-content'>
            <p className='text-start m-0 text-capitalize fs-4'>{name}</p>
            <div className='m-0 text-start d-flex mt-1'>
                <span className='me-1 fst-italic'>Order: </span>
                {food.map((food, index) => {
                    return (
                        <div className='d-flex' key={index}>
                            <p className='m-0 text-capitalize me-1 fst-italic'>{food}</p>
                            { index !== foodlastIndex && <p className='m-0 me-1'> - </p>}
                        </div>                      
                )
                })}
            </div>
            <div className='d-flex float-end'>
                <input 
                    type="text" 
                    value={customerFoodInput} 
                    onChange={(e) => setCustomerFoodInput(e.target.value)}
                    className="form-control m-0 me-1"
                    placeholder='Add Food'
                />
                <button 
                    onClick={handleAddFood}
                    className="btn btn-light"
                >Add</button>
            </div>
        </div>        
    </div>
  )
}
