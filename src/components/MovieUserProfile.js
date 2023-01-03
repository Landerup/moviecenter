import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// profilsida som visar namnet på den inloggade, samt en loadingscreen
const MovieUserProfile = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return(
    isAuthenticated && (
    <div>{user.name}</div>
    ));
};

export default MovieUserProfile;
