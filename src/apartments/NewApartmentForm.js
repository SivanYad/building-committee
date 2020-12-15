import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { v4 as uuidv4 } from 'uuid';

const NewApartmentForm = ({addApartment}) => {

    const { handleChange, handleSubmit, values } = useForm();
    
    addApartment({id: uuidv4()})

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name</label>
            <input 
                type="text" 
                name="first_name" 
                required 
                placeholder="First Name" 
                value = {values.first_name}
                onChange={handleChange}
            />

            <label htmlFor="last_name">Last Name</label>
            <input 
                type="text" 
                name="last_name" 
                required 
                placeholder="Lastt Name"
                value={values.last_name}
                onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input 
                type="text" 
                name="phone" 
                required 
                placeholder="Telephone" 
                value={values.phone}
                onChange={handleChange}
            />

            <label htmlFor="email">E-mail</label>
            <input 
                type="email" 
                name="email" 
                required 
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
            />

            <label htmlFor="aparment_num">Aprtment Number</label>
            <input 
                type="number" 
                name="aparment_num" 
                required 
                placeholder="Apartment Number"
                value={values.aparment_num}
                onChange={handleChange}
            />

            <label htmlFor="floor_num">Floor Number</label>
            <input 
                type="number" 
                name="floor_num" 
                required 
                placeholder="Floor Number"
                value={values.floor_num}
                onChange={handleChange}
                />

            <input type="submit" value="add apartment" />
        </form>
        
    )
}

export default NewApartmentForm
