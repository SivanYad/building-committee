import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const NewApartmentForm = ({addApartment}) => {

    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form>
            <label for="first_name">First Name</label>
            <input 
                type="text" 
                name="first_name" 
                required 
                placeholder="First Name" 
            />

            <label for="last_name">Last Name</label>
            <input 
                type="text" 
                name="last_name" 
                required 
                placeholder="Lastt Name" 
            />

            <label for="phone">Phone</label>
            <input 
                type="text" 
                name="phone" 
                required 
                placeholder="Telephone" 
            />

            <label for="email">E-mail</label>
            <input 
                type="email" 
                name="email" 
                required 
                placeholder="E-mail"
            />

            <label for="aparment_num">Aprtment Number</label>
            <input 
                type="number" 
                name="aparment_num" 
                required 
                placeholder="Apartment Number"
            />

            <label for="floor_num">Floor Number</label>
            <input type="number" name="floor_num" required />

            <input type="submit" value="add apartment" />
        </form>
        
    )
}

export default NewApartmentForm
