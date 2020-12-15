import { useState, useEffect } from 'react';

const useForm = () => {

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        aparment_num: 0,
        floor_num: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return { handleChange, handleSubmit, values }
}

export default useForm;