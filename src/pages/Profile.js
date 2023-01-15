import { useAuth0 } from "@auth0/auth0-react";
import TitleComponent from "../components/TitleComponent";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="text-center m-4">
      {isAuthenticated ? (
        <TitleComponent title={user.name} />
      ) : (
        <TitleComponent title="You have to login" />
      )}
    </div>
  );
};

export default Profile;
