import React, { useContext, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { User } from "./pages/User";
import { GlobalStyles } from "./styles/GlobalStyles";

const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={isAuth ? <Favs /> : <Navigate to="/login" />} />
          <Route path="/user" element={isAuth ? <User /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isAuth ? <NotRegisteredUser /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};
