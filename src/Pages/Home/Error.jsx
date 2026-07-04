import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <h1 className="font-bold text-6xl mb-10">Page is Not Found</h1>

      <img src={error} alt="" />
      <Link to={"/"}>
        <button className="btn btn-primary mt-5">Home Page</button>
      </Link>
    </div>
  );
};

export default Error;
