import React from 'react';


function ApartmentsTableRows({ apartmentsData }) {
        // const getRenterData = () => {
        //     let rentersData;
        //     apartmentsData.map(apartment => {
        //         if (apartment.renters) {
        //             rentersData = [
        //                 apartment.renters.name,
        //                 apartment.renters.phone,
        //                 apartment.renters.email
        //             ]
        //         } else {
        //             rentersData ='';
        //         }
        //         return rentersData;
        //     });
        // }
        // const [name , phone, email] = getRenterData();
    return (
        <tbody className="Apartments-table-rows">
            {apartmentsData.map(apartment=> 
                <tr key={apartment.apartment_num} >
                    <td>{apartment.apartment_num}</td>
                    <td>{apartment.floor}</td>
                    <td>{apartment.owners.name}</td>
                    <td>{apartment.owners.phone}</td>
                    <td>{apartment.owners.email}</td>
                    <td>{apartment.isRented && <i className="fas fa-check"></i>}</td>
                    <td>{apartment.paymentsByRenters && <i className="fas fa-check"></i>}</td>
                    <td>{(apartment.renters) ? apartment.renters.name : ''}</td>
                    <td>{(apartment.renters) ? apartment.renters.phone : ''}</td>
                    <td>{(apartment.renters) ? apartment.renters.email : ''}</td>
                    <td>{apartment.totalSum}</td>
                    <td>{(apartment.notes) ? [...apartment.notes] : ''}</td>
                </tr>
            )}
        </tbody>
    )
}

export default ApartmentsTableRows;
