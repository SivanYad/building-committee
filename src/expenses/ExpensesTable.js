import React from 'react';
import ExpensesTableHeaders from './ExpensesTableHeaders';
import ExpensesTableRow from './ExpensesTableRow';
import { expenses } from '../data.json';

function ExpensesTable() {
    return (
        <table>
            <thead>
                <ExpensesTableHeaders expenses={expenses} />
            </thead>
            <tbody>
                <ExpensesTableRow expenses={expenses} />
            </tbody>
        </table>
    )
}

export default ExpensesTable;
