import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="user_id" />
            <TextField source="role_id" />
            <TextField source="state" />
            {/* <TextField source="description" />
            <TextField source="user_id" />
            <TextField source="state" /> */}
            {/* <TextField source="created_at" />
            <TextField source="updated_at" /> */}
        </Datagrid>
    </List>
);