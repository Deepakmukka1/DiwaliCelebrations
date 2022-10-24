import Cracker from "./components/Cracker";
import DecorationSmall from './assets/DiwaSmall.svg'

import ReactCanvasConfetti from "react-confetti";
import { useEffect, useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(false);

  const isAnimated = (value) => {
    setConfetti(true);
  };

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const showAnimation = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", showAnimation);
    return () => {
      window.removeEventListener("resize", showAnimation);
    };
  }, [dimensions]);

  return (
    <div className="flex justify-center flex-col w-full h-screen bg-gray-900">
      <Cracker isAnimated={isAnimated} />
      <img src={DecorationSmall} className="h-20 w-20 md:h-32 md:w-32 absolute top-0 left-10" alt="DiwaLarge"/>
      <img src={DecorationSmall} className="h-16 w-16 md:h-36 md:w-36 absolute top-0 right-10" alt="DiwaSmall"/>

      {confetti && (
        <ReactCanvasConfetti
          width={dimensions.width - 10}
          height={dimensions.height - 10}
          opacity={0.6}
        />
      )}
      <h3 className="text-yellow-400 font-semibold text-center pb-14 md:pb-4">
      💛 From Mukka Deepak
      </h3>
    </div>
  );
}

export default App;
