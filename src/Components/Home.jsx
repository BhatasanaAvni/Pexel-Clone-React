import React from "react";
import { Button } from "react-bootstrap";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ images, loaderprops, setSavedprops, savedprops }) => {
  const saveImg = (image) => {
    // ======saved image not save second time =====
    let flag = true;
    if (savedprops != null && savedprops.length > 0) {
      for (let i = 0; i < savedprops.length; i++) {
        if (savedprops[i].id === image.id) {
          flag = false;

          // console.log("img is already exits...");
          toast.info("img is already Saved...", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSavedprops([...savedprops, image]);
      // console.log("img save");
      //react.toastify
      toast.success("img saved..", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        {loaderprops ? (
          <Loader />
        ) : (
          <div className="flex">
            {/* <Pages items={[1, 2, 3, 4]} />
            const Pages = ({items}) => {
              [1, 2, 3, 4]
            } */}

            {images.map((imgmap) => (
              <div
                key={imgmap.id}
                className="items"
                onClick={() => saveImg(imgmap)}
              >
                <img src={imgmap.src.medium} alt={imgmap.photographer} />
              </div>
            ))}
          </div>
        )}
        <div className="text-center my-4">
          {images.length !== 0 && (
            <Button href="#top" size="lg" variant="outline-light my-3">
              Back To Top
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
