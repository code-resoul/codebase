import React from "react";
import { RiFullscreenExitLine } from "react-icons/ri";

function MobScreen({ mobView, srcDoc, handleMob }) {
  return (
    <div className={`absolute top-0 left-0 h-full w-full z-10 backdrop-blur-sm ${mobView? '' : 'hidden'}`}>
    <div
        onClick={handleMob}
        className={` main-exit fixed z-20 top-0 right-0 m-3 p-1 text-2xl cursor-pointer text-white bg-white/10 hover:bg-white/25 rounded-lg ${
          mobView ? "" : " hidden"
        } `}
      ><RiFullscreenExitLine /></div>
      <iframe
        className={` mob-display h-[667px] w-[375px] overflow-auto rounded-3xl absolute bg-white shadow-xl shadow-black/50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ${
          mobView ? "" : "hidden"
        }`}
        srcDoc={srcDoc}
        sandbox=" allow-scripts"
      />
    </div>
  );
}

export default MobScreen;
