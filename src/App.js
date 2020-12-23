import * as React from "react";
import { Admin, Resource } from 'react-admin';
import apartmentsData from './aparments.json';
import expensesData from './expenses.json';
import fakeDataProvider from 'ra-data-fakerest';
import { ApartmentsList } from './ApartmentsList';
import { ExpenseList, ExpenseEdit, ExpenseCreate } from './expenses';


const dataProvider = fakeDataProvider({
  apartments:apartmentsData,
  expenses: expensesData
});

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="expenses" list={ExpenseList} edit={ExpenseEdit} create={ExpenseCreate} />
    <Resource name="apartments" list={ApartmentsList} />
  </Admin>
);



export default App;
