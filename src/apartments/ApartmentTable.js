import React from 'react';
import { apartments } from '../data.json';
import ApartmentsTableHeaders from './ApartmentsTableHeaders';
import ApartmentsTableRows from './ApartmentsTableRows';


function ApartmentTable() {
    
    return (
        <table className="Apartments-Table">
            <ApartmentsTableHeaders />
            <ApartmentsTableRows apartmentsData={apartments} />
        </table>
    )
}

export default ApartmentTable;
