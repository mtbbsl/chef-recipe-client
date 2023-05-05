import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  borderWidth: "10px",
};

const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  return (
    <div className="flex justify-center" style={{ marginTop: "100px" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">
          <div className="sweet-loading">
            <ClipLoader
              loading={loading}
              cssOverride={override}
              size={300}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Loader;
