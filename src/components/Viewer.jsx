import React from "react";
import { useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { RiFullscreenExitLine } from "react-icons/ri";

function Viewer({ srcDoc }) {
  const [fullView, setFullView] = useState(false);

  function handleClick(){
    setFullView(!fullView);
  }

  return (
    <div className=" flex flex-col w-full h-full">
      <div className=" flex justify-between items-center">
        <h1 className=" bg-white/25 text-white text-lg font-semibold px-4 py-1 rounded-t-lg select-none">
          Output:
        </h1>
        <div onClick={handleClick} className=' text-white text-2xl cursor-pointer'><MdFullscreen /></div> 
      </div>
      <div onClick={handleClick} className={` absolute z-20 top-0 right-0 m-3 p-1 text-2xl cursor-pointer hover:bg-black/25 rounded-lg ${fullView? '': ' hidden'} `}><RiFullscreenExitLine /></div>
      <iframe
        className={` bg-white/90 h-full w-full rounded-b-lg ${fullView? 'absolute bg-white left-0 top-0 z-10': ''}`}
        srcDoc={srcDoc}
        sandbox=" allow-scripts"
      />
    </div>
  );
}

export default Viewer;
