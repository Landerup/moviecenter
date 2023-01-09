import { useAuth0 } from "@auth0/auth0-react";

// auth0 inlogg med popup
const MovieLogin = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div>
      <button type="button" className="btn btn-outline-light" onClick={() => loginWithPopup()}>Login</button>
    </div>
  );
};

export default MovieLogin;
