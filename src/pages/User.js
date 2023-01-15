import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <React.Fragment>
      <h1>Página del usuario</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </React.Fragment>
  );
};
