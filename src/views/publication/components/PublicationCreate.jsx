import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const PublicationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput> */}
      <TextInput source="title" />
      <TextInput multiline source="description" />
      <TextInput source="user_id" />
    </SimpleForm>
  </Create>
);
