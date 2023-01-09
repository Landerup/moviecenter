import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Visar namnet om man är inloggad annars bara profile, samt en loading text
const MovieUserProfile = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return(
    isAuthenticated
    ? <p>{user.name}</p> : <p>Profile</p>
    );
};

export default MovieUserProfile;
