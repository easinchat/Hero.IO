import React from "react";
import Banner from "./Banner";
import Trusted from "./Trusted";
import TrendingApps from "./TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const appData = useLoaderData();
  // console.log(data);

  // console.log("click");
  return (
    <div className="justify-center items-center mx-auto w-7xl border border-amber-500">
      <Banner></Banner>
      <Trusted></Trusted>
      <TrendingApps appData={appData}></TrendingApps>
    </div>
  );
};

export default Home;
