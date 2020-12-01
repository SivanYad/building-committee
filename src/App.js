import React from 'react';
import './App.css';
import ApartmentTable from './apartments/ApartmentTable';
import ExpensesTable from './expenses/ExpensesTable';

function App() {
  return (
    <div className="App">
      <ApartmentTable />
      <br />
      <ExpensesTable />
    </div>
  );
}

export default App;
