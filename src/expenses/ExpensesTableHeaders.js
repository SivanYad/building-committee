import React from 'react';

function ExpensesTableHeaders({ expenses }) {
    // const headers = Object.keys(expenses[0]);
    // const correctedHeaders = () => {
    //     headers.forEach(header => header[0].toUpperCase() + header.slice(1));
    //     headers[headers.length - 1] = "Unique Expense";
    //     return headers;
    // }
    return (    
        <tr>
            <th>Name</th>
            <th>Sum</th>
            <th>Date</th>
            <th>Unique</th>
        </tr>
    )
}

export default ExpensesTableHeaders;
