import React from 'react'

function MainScreen({ fullView, srcDoc }) {
  return (
    <iframe
        className={` main-display h-full w-full rounded-b-lg ${
          fullView ? "absolute bg-white left-0 top-0 z-10" : " bg-white/90"
        }`}
        srcDoc={srcDoc}
        sandbox=" allow-scripts"
      />
  )
}

export default MainScreen