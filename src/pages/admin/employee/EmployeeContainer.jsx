import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProfessions } from "../../../redux/actions/profession";
import { listSpecialties } from "../../../redux/actions/specialty";
import {
  changeStateUser,
  listUsers,
  UsersFilter,
  registerUser,
  updateUser,
} from "../../../redux/actions/users";
import EmployeeView from "./EmployeeView";

const headCells = [
  {
    label: "Nombres",
  },
  {
    label: "Cargo",
  },
  {
    label: "Documento",
  },
  {
    label: "Celular",
  },
  {
    label: "Estado",
  },
  {
    label: "Acciones",
  },
];

const initialState = {
  id: "",
  password: "",
  email: "",
  role_id: "",
  state: "",
  firstName: "",
  lastName: "",
  document: "",
  cellPhone: "",
  image: "",
  profession_id: "",
  specialty_id: "",
};

export default function EmployeeContainer() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.authReducer);
  const { users, usersFilter } = useSelector((state) => state.user);
  const { specialties } = useSelector((state) => state.specialty);
  const { professions } = useSelector((state) => state.profession);
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState(initialState);

  const getData = useCallback(async () => {
    await dispatch(listUsers(header));
    dispatch(listSpecialties(header));
    dispatch(listProfessions(header));
  }, [dispatch, header]);

  useEffect(() => {
    getData();
  }, [getData]);

  const setItem = async (item) => {
    await reset();
    setForm({ ...item });
  };

  const formChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const changeFilter = ({ value }) => {
    dispatch(
      UsersFilter(
        users.filter(
          (p) =>
            p.employee.firstName.toLowerCase().includes(value.toLowerCase()) ||
            p.employee.lastName.toLowerCase().includes(value.toLowerCase()) ||
            p.employee.document.toLowerCase().includes(value.toLowerCase()) ||
            p.employee.cellPhone.toLowerCase().includes(value.toLowerCase()) ||
            p.email.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const save = async () => {
    let isOk = false;

    form.user = {
      password: form.password ? form.password : null,
      email: form.email,
      role_id: 2,
    };

    isOk = await dispatch(registerUser(form, header));
    if (isOk) reset();
  };

  const update = async () => {
    let isOk = false;
    form.user = {
      password: form.password ? form.password : null,
      role_id: form.role_id,
      state: form.state,
    };
    isOk = await dispatch(updateUser(form, header));
    if (isOk) reset();
  };

  const changeState = async (item) => {
    await dispatch(changeStateUser(item, header));
  };

  const reset = () => {
    setForm(initialState);
    let btnClose = document.getElementsByClassName("btnModalClose");
    for (let i = 0; i < btnClose.length; i++) {
      btnClose[i].click();
    }
  };

  if (user.role_id !== 1)
    return <h1>No tienes permisos para ver esta pagina</h1>;

  return (
    <div>
      <EmployeeView
        users={usersFilter}
        headCells={headCells}
        setItem={setItem}
        form={form}
        formChange={formChange}
        save={() => save()}
        update={() => update()}
        changeFilter={changeFilter}
        changeState={changeState}
        specialties={specialties}
        professions={professions}
      />
    </div>
  );
}
