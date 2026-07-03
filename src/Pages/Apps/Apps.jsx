import React from "react";
import { useLoaderData } from "react-router";
import SingleAll from "./SingleAll";

const Apps = () => {
  const appData = useLoaderData();
  console.log(appData);
  return (
    <div className="justify-center items-center mx-auto w-7xl">
      <div className="text-center mt-20">
        <h1 className="font-bold text-4xl mb-3">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="justify-between flex">
          <p>({appData.length}) Apps Found</p>

          <input
            className="border-2"
            type="search"
            name=""
            id=""
            placeholder="search"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {appData.map((data) => (
          <SingleAll key={data.id} data={data}></SingleAll>
        ))}
      </div>
    </div>
  );
};

export default Apps;
