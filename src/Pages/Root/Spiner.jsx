import React from "react";
import loading from "../../assets/logo.png";

const Spiner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg">
          <img src={loading} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Spiner;
