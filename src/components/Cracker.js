import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CrackerSVG1 from "../assets/3crackers.svg";
import CrackerSVG2 from "../assets/4crackers.svg";

const Cracker = () => {
  const [animation, setAnimation] = useState("wiggle");
  const RightRocket = useRef();
  const LeftRockets = useRef();
  useLayoutEffect(() => {
    RightRocket.current.style.bottom = "3rem";
    LeftRockets.current.style.bottom = "3rem";
  }, [animation]);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-300">
     
      <img
        alt="cracker"
        src={CrackerSVG1}
        ref={RightRocket}
        className={`absolute bottom-4 h-52 w-52 text-white text-center animate-${animation} invisible`}
      />

    <img
        alt="cracker"
        src={CrackerSVG2}
        ref={LeftRockets}
        className={`absolute bottom-4 h-52 w-52 text-white text-center animate-${animation} invisible`}
      />


   
      {animation==="wiggle" && <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setAnimation("moveup");
        }}
      >
        Fire up
      </button>}
    </section>
  );
};

export default Cracker;
