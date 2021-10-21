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

export default function EmployeeContainer() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.authReducer);
  const { users, usersFilter } = useSelector(
    (state) => state.user
  );
  const { specialties } = useSelector((state) => state.specialty)
  const { professions } = useSelector((state) => state.profession);

  const [form, setForm] = useState({
    id: "",
    name: "",
  });

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
        users.filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const save = async () => {
    let isOk = false;
    isOk = await dispatch(registerUser(form, header));
    if (isOk) reset();
  };

  const update = async () => {
    let isOk = false;
    isOk = await dispatch(updateUser(form, header));
    if (isOk) reset();
  };

  const changeState = async (item) => {
    await dispatch(changeStateUser(item, header));
  };

  const reset = () => {
    setForm({
      id: "",
      name: "",
    });
    let btnClose = document.getElementsByClassName("btnModalClose");
    for (let i = 0; i < btnClose.length; i++) {
      btnClose[i].click();
    }
  };

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
