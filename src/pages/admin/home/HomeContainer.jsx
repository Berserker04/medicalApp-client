import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../../api";
import HomeView from "./HomeView";

export default function HomeContainer() {
  const { user } = useSelector((state) => state.user);
  const [stadistics, setStadistics] = useState({
    employees: 0,
    professions: 0,
    specialties: 0,
  });

  useEffect(() => {
    API.GET("/home").then(({ data }) => {
      if (data.ok) setStadistics(data.body);
    });
  }, []);

  return (
    <div>
      <HomeView user={user} stadistics={stadistics} />
    </div>
  );
}
