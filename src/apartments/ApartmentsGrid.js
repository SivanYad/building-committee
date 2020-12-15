import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import data from './aparments.json';
import NewApartmentForm from './NewApartmentForm';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', flex: 1 },
    { field: 'last_name', headerName: 'Last Name', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'aparment_num', headerName: 'Apartment', flex: 1, type: 'number' },
    { field: 'floor_num', headerName: 'Floor', flex: 1, type: 'number' }
];

export const ApartmentsGrid = () => {

    const [selectedRow, setSelectedRow] = useState([]);

    const [apartments, setApartments] = useState(data)

    const addApartment = (apartment) => {
        setApartments([...apartments, apartment]);
    }

    return (
        <div>
            <div style={{ height: 1000, width: '100%' }}>
                <DataGrid
                    rows={apartments}
                    columns={columns}
                    pageSize={12}
                    checkboxSelection
                    //contain only rowID's
                    onSelectionChange={(newSelection => { console.log(newSelection) })}
                />
            </div>

            <NewApartmentForm addApartment={addApartment} />

        </div>
    )
}
