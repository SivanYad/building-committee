import React from 'react';

function ExpensesTableHeaders({ expenses }) {
    // const headers = Object.keys(expenses[0]).forEach(header => headers[header] = header[0].toUpperCase() + header.slice(1))) 
    
    // headers2.forEach((i,k) => console.log(headers2[k] = headers2[k].toUpperCase()))    
    
    // const correctedHeaders = () => {
    //     headers.forEach(header => headers.push(header[0].toUpperCase() + header.slice(1)));
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
