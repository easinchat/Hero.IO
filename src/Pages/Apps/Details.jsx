import React, { useState } from "react";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import Chart from "./Chart";

const Details = ({ appData }) => {
  //   console.log(appData);
  const [install, setInstall] = useState(false);

  const clickHandler = () => {
    setInstall(true);
  };

  return (
    <div className="card bg-base-100   w-7xl mx-auto ">
      <div className="flex ">
        <figure className=" pt-10">
          <img src={appData.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{appData.title}</h2>
          <p>
            Developed by{" "}
            <span className="text-[#632EE3] font-bold">
              {appData.companyName}
            </span>
          </p>

          <div className="flex justify-between">
            <div className="flex p-3 bg-[#F1F5E8] gap-2 rounded-xl text-[#00D390]">
              <img className="w-5 h-5" src={download} alt="" />
              <p>{appData.downloads}</p>
            </div>

            <div className="flex p-3 bg-[#FFF0E1] gap-2 rounded-xl text-[#FF8811]">
              <img className="w-5 h-5" src={ratings} alt="" />
              <p>{appData.ratingAvg}</p>
            </div>
          </div>
          <button className="btn btn-neutral w-1/3 mt-4" onClick={clickHandler}>
            {install ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-3xl mb-4 ">Ratings</h1>
        <Chart appData={appData}></Chart>
        <div>
          <h1 className="font-bold text-3xl mb-4 ">Description</h1>
          <p>
            This focus app takes the proven Pomodoro technique and makes it even
            more practical for modern lifestyles. Instead of just setting a
            timer, it builds a complete environment for deep work, minimizing
            distractions and maximizing concentration. Users can create custom
            work and break intervals, track how many sessions they complete each
            day, and review detailed statistics about their focus habits over
            time. The design is minimal and calming, reducing cognitive load so
            you can focus entirely on the task at hand. Notifications gently let
            you know when to pause and when to resume, helping you maintain a
            healthy rhythm between work and rest. <br />
            <br /> <br />
            A unique feature of this app is the integration of task lists with
            timers. You can assign each task to a specific Pomodoro session,
            making your schedule more structured. The built-in analytics show
            not only how much time you’ve worked but also which tasks consumed
            the most energy. This allows you to reflect on your efficiency and
            adjust your workflow accordingly. The app also includes optional
            background sounds such as white noise, nature sounds, or
            instrumental music to create a distraction-free atmosphere.
            <br />
            <br /> <br />
            For people who struggle with procrastination, the app provides
            motivational streaks and achievements. Completing multiple Pomodoro
            sessions unlocks milestones, giving a sense of accomplishment. This
            gamified approach makes focusing more engaging and less like a
            chore. Whether you’re studying for exams, coding, writing, or
            handling office work, the app adapts to your routine. By combining
            focus tracking, task management, and motivational tools, this
            Pomodoro app ensures that you not only work harder but also smarter.
            It is a personal trainer for your brain, keeping you disciplined,
            refreshed, and productive throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
