import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleAll from "./SingleAll";
import ErrorPage from "./ErrorPage";

const Apps = () => {
  const appData = useLoaderData();
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    // console.log(value);
    setSearch(value);
  };
  const filterApps = appData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filterApps);
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
            value={search}
            onChange={searchHandler}
            placeholder="Search"
          />
        </div>
      </div>
      {filterApps.length > 0 ? (
        <div className="grid grid-cols-4 gap-10">
          {filterApps.map((data) => (
            <SingleAll key={data.id} data={data}></SingleAll>
          ))}
        </div>
      ) : (
        <ErrorPage></ErrorPage>
      )}
    </div>
  );
};

export default Apps;
