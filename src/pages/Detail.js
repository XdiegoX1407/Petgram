import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = () => {
  const params = useParams();
  return (
    <Layout title={`Fotografía ${params.id}`}>
      <PhotoCardWithQuery id={params.id} />
    </Layout>
  );
};
