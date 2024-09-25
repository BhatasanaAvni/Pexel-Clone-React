import React from "react";
import { Button } from "react-bootstrap";
import Loader from "./Loader";
import { useLocation } from "react-router";
const Saved = ({ savedprops,loaderprops }) => {
  
  return <>
      <div className="container-fluid">
        {loaderprops | savedprops.length==0?(
          <Loader />
        ) : (
          <div className="flex">
            {savedprops.map((imgmap) => (
              <div
                key={imgmap.id}
                className="items"
              >
                <img src={imgmap.src.medium} alt={imgmap.photographer} />
              </div>
            ))}
          </div>
        )}
        <div className="text-center my-4">
          {savedprops.length !== 0 && (
            <Button href="#top" size="lg" variant="outline-light my-3">
              Back To Top
            </Button>
          )}
        </div>
      </div>
  </>;
};

export default Saved;
