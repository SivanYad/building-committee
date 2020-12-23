import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    NumberField, 
    DateField, 
    BooleanField, 
    EditButton,
    Edit,
    Create,
    DateInput,
    SimpleForm,
    NumberInput,
    BooleanInput,
    TextInput
} from 'react-admin';


export const ExpenseList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <NumberField source="sum" />
            <DateField source="date" />
            <BooleanField source="isUniqueExpense" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ExpenseEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="sum" />
            <DateInput source="date" />
            <BooleanInput source="isUniqueExpense" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);

export const ExpenseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="sum" />
            <DateInput source="date" />
            <BooleanInput source="isUniqueExpense" />
            <TextInput source="id" />
        </SimpleForm>
    </Create>
);