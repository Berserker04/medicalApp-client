import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import API from "../../api";

export const Dashboard = () => {
  const [user, setUser] = useState({ user_name: "" });

  const getMe = useCallback(async () => {
    const token = localStorage.getItem("username");
    if (token) {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };

      API.POST("/auth/me", {}, config)
        .then((data) => {
          setUser(data);
        })
        .catch((e) => console.log(e));
    }
  }, [setUser]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <Card>
      <CardHeader title={`Bienvenido a la Administración ${user.user_name}`} />
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia
        quod fugit cum doloremque laborum corrupti facilis corporis, quos
        repellendus, sapiente quis? Alias nulla quis perferendis, unde in
        delectus aspernatur.
      </CardContent>
    </Card>
  );
};
