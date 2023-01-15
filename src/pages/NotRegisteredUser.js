import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { UserForm } from "../components/UserForm";
import { LoginMutation } from "../container/LoginMutation";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const {
    registerMutation,
    loading: registerLoading,
    error: registerError,
  } = RegisterMutation();
  const {
    loginMutation,
    loading: loginLoading,
    error: loginError,
  } = LoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    loginMutation({ variables: variable }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const registerErrorMsg =
    registerError && "El usuario ya existe o hay algún problema";
  const loginErrorMessage =
    loginError && "El usuario no existe o la contraseña no es correcta";
  return (
    <React.Fragment>
      <UserForm
        disabled={registerLoading}
        error={registerErrorMsg}
        title="Registrarse"
        onSubmit={onSubmitRegister}
      />
      <UserForm
        disabled={loginLoading}
        error={loginErrorMessage}
        title="Iniciar sesión"
        onSubmit={onSubmitLogin}
      />
    </React.Fragment>
  );
};
