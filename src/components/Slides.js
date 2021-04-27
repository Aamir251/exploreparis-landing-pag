import React from "react";

export default function Slides({ state, setState }) {
  return (
    <div className="slides">
      <div
        onClick={() => {
          setState(1);
        }}
        className="slide"
      >
        {/* <EiffelTower /> */}
        <img
          className={state === 1 && "border"}
          src="images/eiffel-tower.jpg"
          alt="eiffel-tower"
        />
      </div>
      {/* <div className="slide">
        <img
          
          src="images/disneyland.jpg"
          alt="Disney Land"
        />
      </div> */}
      <div onClick={() => setState(2)} className="slide">
        {/* <EiffelTower /> */}
        <img
          className={state === 2 && "border"}
          src="images/seine.jpg"
          alt="Seine"
        />
      </div>
    </div>
  );
}
