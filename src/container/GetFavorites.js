import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ListOfFavs } from "../components/ListOfFavs";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const GetFavorites = () => {
  const { data, loading, error } =  useQuery(GET_FAVORITES, { fetchPolicy: "cache-and-network" });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <ListOfFavs favs={data.favs} />;
};
