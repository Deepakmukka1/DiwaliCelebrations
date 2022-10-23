import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CrackerSVG1 from "../assets/3crackers.svg";
import CrackerSVG2 from "../assets/4crackers.svg";
import Message from "./Message";

const Cracker = () => {
  const [animation, setAnimation] = useState(false);
  const RightRocket = useRef();
  const LeftRockets = useRef();
  useLayoutEffect(() => {
    if(RightRocket.current && LeftRockets.current){
    RightRocket.current.style.bottom = "3rem";
    LeftRockets.current.style.bottom = "3rem";
    }
  }, [animation]);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
     
      { animation && <img
        alt="cracker"
        src={CrackerSVG1}
        ref={RightRocket}
        className={`absolute bottom-4 left-4 h-52 w-52 text-white text-center animate-moveup invisible`}
      />}

     { animation && <img
        alt="cracker"
        src={CrackerSVG2}
        ref={RightRocket}
        className={`absolute bottom-4 left-16 h-52 w-52 text-white text-center animate-moveup invisible`}
      />}

    {animation && <img
        alt="cracker"
        src={CrackerSVG1}
        ref={LeftRockets}
        className={`absolute bottom-4 right-4 h-52 w-52 text-white text-center animate-moveup invisible`}
      />
    }

{animation && <img
        alt="cracker"
        src={CrackerSVG2}
        ref={LeftRockets}
        className={`absolute bottom-4 right-16 h-52 w-52 text-white text-center animate-moveup invisible`}
      />
    }
      



   
      {!animation && <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setAnimation(true);
        }}
      >
        Fire up
      </button>}

      {animation && <Message/>}
    </section>
  );
};

export default Cracker;
