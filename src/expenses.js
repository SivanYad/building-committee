import * as React from "react";
import { List, Datagrid, TextField, NumberField, DateField, BooleanField } from 'react-admin';


export const ExpenseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <NumberField source="sum" />
            <DateField source="date" />
            <BooleanField source="isUniqueExpense" />
        </Datagrid>
    </List>
);