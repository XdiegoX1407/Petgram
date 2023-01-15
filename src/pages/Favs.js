import React from "react";
import { GetFavorites } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

const Favs = () => (
  <Layout title="Tus favoritos" subtitle="Aquí podrás encontrar tus favoritos">
    <GetFavorites />
  </Layout>
);
export default Favs;
