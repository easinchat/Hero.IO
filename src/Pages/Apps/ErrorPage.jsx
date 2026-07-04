import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <h1 className="font-bold text-6xl mb-10">App is Not Found</h1>

      <img src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
