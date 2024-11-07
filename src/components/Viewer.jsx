import React from "react";
import { useState } from "react";
import MainScreen from "./ViewerComp/MainScreen";
import MobScreen from "./ViewerComp/MobScreen";
import { MdFullscreen } from "react-icons/md";
import { RiFullscreenExitLine } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";

function Viewer({ srcDoc }) {
  const [fullView, setFullView] = useState(false);
  const [mobView, setMobView] = useState(false);

  function handleFull() {
    setFullView(!fullView);
  }

  function handleMob() {
    setMobView(!mobView);
  }

  return (
    <div className=" flex flex-col w-full h-full">
      <div className=" flex justify-between items-center">
        <h1 className=" bg-white/25 text-white text-lg font-semibold px-4 py-1 rounded-t-lg select-none">
          Output:
        </h1>
        <div className=" flex gap-2">
          <div
            onClick={handleMob}
            className=" mob-screen text-white/75 hover:text-white text-2xl cursor-pointer "
          >
            <CiMobile1 />
          </div>
          <div
            onClick={handleFull}
            className=" main-full text-white/75 hover:text-white text-2xl cursor-pointer"
          >
            <MdFullscreen />
          </div>
        </div>
      </div>
      <div
        onClick={handleFull}
        className={` main-exit fixed z-20 top-0 right-0 m-3 p-1 text-2xl cursor-pointer bg-black/5 hover:bg-black/25 rounded-lg ${
          fullView ? "" : " hidden"
        } `}
      >
        <RiFullscreenExitLine />
      </div>
      <MainScreen fullView={fullView} srcDoc={srcDoc} />
      <MobScreen mobView={mobView} srcDoc={srcDoc} handleMob={handleMob} />
    </div>
  );
}

export default Viewer;
