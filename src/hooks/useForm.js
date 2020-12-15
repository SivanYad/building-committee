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

    return { handleChagne }
}

export default useForm;