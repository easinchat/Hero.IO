import React from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "./Details";

const AppDetails = () => {
  const { id } = useParams();
  const dataId = parseInt(id);
  const apps = useLoaderData();

  const appData = apps.find((app) => app.id === dataId);
  // console.log(appData);

  return (
    <div>
      <Details appData={appData}></Details>
    </div>
  );
};

export default AppDetails;
