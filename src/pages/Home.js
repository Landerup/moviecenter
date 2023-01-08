import TitleComponent from "../components/TitleComponent";
import { useEffect } from "react";

const Home = ({ listMovies }) => {

    useEffect(() => {
        listMovies();
      }, []);

  return (
    <>
      <div className="text-center m-4">
        <TitleComponent title="Discover Movies" />
      </div>
      <div className="row d-flex justify-content-center">{listMovies()}</div>
    </>
  );
};

export default Home;
