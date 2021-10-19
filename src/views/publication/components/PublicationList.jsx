import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  //   EmailField,
  //   ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const PublicationList = (props) => (
  <List filters={Filters} {...props}>
    <Datagrid>
      <TextField source="title" />
      {/* <TextField source="description" /> */}
      {/* <ReferenceField source="user_id" reference="user">
        <TextField source="user_name" />
      </ReferenceField> */}
      {/* <TextField source="user_id" /> */}
      <TextField source="state" />
      {/* <TextField source="created_at" />
            <TextField source="updated_at" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

const Filters = [
  <TextInput source="q" label="Buscar publicación" alwaysOn />,
  // <ReferenceInput source="title" label="Publicaciones" reference="publication" allowEmpty>
  //   <SelectInput optionText="name" />
  // </ReferenceInput>,
];
