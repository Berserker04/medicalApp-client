import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProfessions } from '../../../redux/actions/profession';
import { listSpecialties } from '../../../redux/actions/specialty';
import { getUser, updateUser } from '../../../redux/actions/users';
import ProfileView from './ProfileView'
export default function ProfileContainer() {

    const dispatch = useDispatch();
    const { header } = useSelector((state) => state.authReducer);
    const { me, user } = useSelector((state) => state.user);
    const { specialties } = useSelector((state) => state.specialty)
    const { professions } = useSelector((state) => state.profession);

    const [form, setForm] = useState({
        id: "",
        firstName: "",
        lastName: "",
        document: "",
        cellPhone: "",
        image: "",
        profession_id: "",
        specialty_id: "",
        password: "",
        role_id: "",
        state: "",
    });

    const getData = useCallback(
        async () => {
            console.log(header);
            dispatch(listSpecialties(header));
            dispatch(listProfessions(header));
            setForm(user)
        },
        [dispatch, setForm, getUser]
    )

    useEffect(() => {
        getData()
    }, [getData])

    const formChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    };

    const update = async () => {
        let isOk = false;

        form.user = {
            password: form.password ? form.password : null,
            role_id: form.role_id,
            state: form.state
        }

        isOk = await dispatch(updateUser(form, header));
        //if (isOk) reset();
    };

    return (
        <div>
            <ProfileView formChange={formChange} form={form} update={update} user={user} specialties={specialties} professions={professions} />
        </div>
    )
}
