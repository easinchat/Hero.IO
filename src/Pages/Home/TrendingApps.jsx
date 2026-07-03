import React from "react";
import SingleApp from "./SingleApp";
import { Link } from "react-router";

const TrendingApps = ({ appData }) => {
  // console.log(appData);
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-4xl mb-3">TrendingApps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {appData.map((data) => (
          <SingleApp key={data.id} data={data}></SingleApp>
        ))}
      </div>
      <Link to="/apps">
        <button
          className="btn flex mx-auto mt-5
        
      "
        >
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
