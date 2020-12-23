import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';


export const ApartmentsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="phone" />
            <EmailField source="email" />
            <NumberField source="aparment_num" />
            <NumberField source="floor_num" />
        </Datagrid>
    </List>
);