import { useAuth0 } from "@auth0/auth0-react";

// auth0 logga ut knapp
const MovieLogout = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button type="button" className="btn btn-outline-light" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
    </div>
  );
};

export default MovieLogout;