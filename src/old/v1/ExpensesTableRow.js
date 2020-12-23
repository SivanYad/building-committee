import React from 'react'

function ExpensesTableRow({ expenses }) {
    return (
        expenses.map(expense =>
            <tr key={expense.name}>
                <td>{expense.name}</td>
                <td>{expense.sum}</td>
                <td>{expense.date}</td>
                <td>{expense.isUniqueExpense && <i className="fas fa-check"></i>}</td>
            </tr>
        )
    )
}

export default ExpensesTableRow
