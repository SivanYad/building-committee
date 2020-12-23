import { useState } from 'react';

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
        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            };
        });
    }

    return { handleChange, values }
}

export default useForm;