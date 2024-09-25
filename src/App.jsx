import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Saved from "./Components/Saved";
// import ParticlesComponent from './Partical/ParticlesComponent';

// const Home = React.lazy(() => import('./Components/Home'));
// const About = React.lazy(() => import('./Components/Navbar'));
// const Contact = React.lazy(() => import('./Components/Saved'));

const App = () => {
  const [images, setimages] = useState([]);
  const [search, setSearch] = useState(["nature"]);
  // =======loder=========
  const [Loader, setloader] = useState(true);
  // ==============saved img==============
  const [saved, setSaved] = useState([]);
  // ===============serch-onclick====================
  const Api_Key = "CYAtmi0UxHpDYIjfXSPL3q17Cx1qFKCvjwjyiJjwJy1SK2aDEH9jtXjY";
  const URL = `https://api.pexels.com/v1/search?query=${search}&per_page=80`;
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(URL, {
        headers: {
          Authorization: Api_Key,
        },
      });
      // console.log("response fromapi=", res.data.photos);
      // setimages(res.data.photos);
      // console.log(images);
      // console.log("response from api =", res.data.photos);
      setimages(res.data.photos);
      console.log(images);
      // ====================loder======================
      setloader(false);
    };
    const data = JSON.parse(localStorage.getItem("imgout"));
    if (data) {
      setSaved(data);
    }

    fetchApi();
  }, [search]);
  console.log("img is saved..", saved);
  // ==============local storage=====================
  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("imghello", json);
    }
  }, [saved]);

  return (
    <>
      <Router>
        <Navbar setsearch={setSearch} />
        {/* <ParticlesComponent/> */}
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  images={images}
                  loaderprops={Loader}
                  savedprops={saved}
                  setSavedprops={setSaved}
                />
              }
            />
            <Route
              path="/saved"
              element={<Saved savedprops={saved} loaderprops={Loader} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
