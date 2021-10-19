import * as React from "react";
import {
  //   List,
  //   Datagrid,
  //   TextField,
  ReferenceField,
  //   EditButton,
  ReferenceInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PublicationEdit = (props) => (
  <Edit {...props} title={<TitleMenu />}>
    <SimpleForm>
      {/* <ReferenceInput source="user_id" reference="user">
        <TextInput source="user_name" />
      </ReferenceInput> */}
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput multiline source="description" />
      {/* <TextInput source="state" /> */}
    </SimpleForm>
  </Edit>
);

const TitleMenu = ({ record }) => {
  return <span>Editando {record ? `"${record.title}"` : ""}</span>;
};
