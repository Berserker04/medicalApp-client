import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateProfession,
  listProfessions,
  ProfessionsFilter,
  registerProfession,
  updateProfession,
} from "../../../redux/actions/profession";
import ProfessionView from "./ProfessionView";

const headCells = [
  {
    id: "profession",
    numeric: false,
    disablePadding: true,
    label: "Profesión",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: true,
    label: "Estado",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: true,
    label: "Acciones",
  },
];

export default function ProfessionContainer() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.authReducer);
  const { professions, professionsFilter } = useSelector(
    (state) => state.profession
  );

  const [form, setForm] = useState({
    id: "",
    name: "",
  });

  const getData = useCallback(async () => {
    await dispatch(listProfessions(header));
  }, [dispatch, header]);

  useEffect(() => {
    getData();
  }, [getData]);

  const setItem = (item) => {
    setForm(item);
  };

  const setState = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const changeFilter = ({ value }) => {
    dispatch(
      ProfessionsFilter(
        professions.filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const save = async () => {
    let isOk = false;
    console.log(form);
    isOk = await dispatch(registerProfession(form, header));
    if (isOk) reset();
  };

  const update = async () => {
    let isOk = false;
    isOk = await dispatch(updateProfession(form, header));
    if (isOk) reset();
  };

  const changeState = async (item) => {
    await dispatch(changeStateProfession(item, header));
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
      <ProfessionView
        professions={professionsFilter}
        headCells={headCells}
        setItem={setItem}
        form={form}
        setState={setState}
        save={() => save()}
        update={() => update()}
        changeFilter={changeFilter}
        changeState={changeState}
      />
    </div>
  );
}
