import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpecialtyView from "./SpecialtyView";
import {
  changeStateSpecialty,
  listSpecialties,
  registerSpecialty,
  SpecialtiesFilter,
  updateSpecialty,
} from "../../../redux/actions/specialty";
import { listProfessions } from "../../../redux/actions/profession";

const headCells = [
  {
    label: "Especialidad",
  },
  {
    label: "Profesión",
  },
  {
    label: "Estado",
  },
  {
    label: "Acciones",
  },
];

export default function SpecialtyContainer() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.authReducer);
  const { specialties, specialtiesFilter } = useSelector(
    (state) => state.specialty
  );
  const { professions } = useSelector((state) => state.profession);
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState({
    id: "",
    name: "",
    profession_id: "",
  });

  const getData = useCallback(async () => {
    await dispatch(listSpecialties(header));
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
      SpecialtiesFilter(
        specialties.filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const save = async () => {
    let isOk = false;
    console.log(form);
    isOk = await dispatch(registerSpecialty(form, header));
    if (isOk) reset();
  };

  const update = async () => {
    let isOk = false;
    isOk = await dispatch(updateSpecialty(form, header));
    if (isOk) reset();
  };

  const changeState = async (item) => {
    await dispatch(changeStateSpecialty(item, header));
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

  if (user.role_id !== 1)
    return <h1>No tienes permisos para ver esta pagina</h1>;

  return (
    <div>
      <SpecialtyView
        specialties={specialtiesFilter}
        professions={professions}
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
