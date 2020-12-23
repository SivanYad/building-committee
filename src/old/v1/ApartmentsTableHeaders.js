import React from 'react';
// import '../styles/ApartmentsTableHeaders.css';

function ApartmentsTableHeaders() {
    return (
        <thead className="Apartments-table-headers">
            <tr>
                <th>Apartment Number</th>
                <th>Floor</th>
                <th>Owner's Name</th>
                <th>Owner's Phone</th>
                <th>Owner's E-mail</th>
                <th>Is Rented</th>
                <th>Payments by renters</th>
                <th>Renters Name</th>
                <th>Renters Phone</th>
                <th>Renters E-mail</th>
                <th>Total Paid Sum</th>
                <th>Notes</th>
            </tr>
        </thead>
    )
}

export default ApartmentsTableHeaders;
