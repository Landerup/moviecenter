import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// auth0 inlogg med popup
const MovieLogin = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithPopup()}>Login</button>
    </div>
  );
};

export default MovieLogin;
