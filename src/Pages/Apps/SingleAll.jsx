import React from "react";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const SingleAll = ({ data }) => {
  //   console.log(data);
  return (
    <Link to={`/bookDetails/${data.id}`}>
      <div className="card bg-base-100  shadow-lg">
        <figure className=" pt-10">
          <img src={data.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{data.title}</h2>

          <div className="flex justify-between">
            <div className="flex p-3 bg-[#F1F5E8] gap-2 rounded-xl text-[#00D390]">
              <img className="w-5 h-5" src={download} alt="" />
              <p>{data.downloads}</p>
            </div>
            <div className="flex p-3 bg-[#FFF0E1] gap-2 rounded-xl text-[#FF8811]">
              <img className="w-5 h-5" src={ratings} alt="" />
              <p>{data.ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleAll;
