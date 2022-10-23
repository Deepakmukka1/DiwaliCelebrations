import Chakra from "./components/Chakra";
import Cracker from "./components/Cracker";
import ReactCanvasConfetti from 'react-confetti'
import { useEffect, useState } from "react";
// import useWindowSize from 'react-use/'

function App() {
  
  const [confetti,setConfetti]=useState(false)

  const isAnimated=(value)=>{
       setConfetti(true)
  }

  const [dimensions,setDimensions]=useState({width:window.innerWidth,height:window.innerHeight})
  
  const showAnimation=()=>{
    setDimensions({
      width:window.innerWidth,height:window.innerHeight
    })
  }

  useEffect(()=>{
     window.addEventListener('resize',showAnimation)
     return ()=>{
      window.removeEventListener('resize',showAnimation)
     }
  },[dimensions])
  // const [dimensions,]=useState({})


  return (
    <div className="App">
      <div className="w-full h-full bg-gray-900">
      <Cracker isAnimated={isAnimated}/>
      {/* <Chakra/> */}
      { confetti && <ReactCanvasConfetti width={dimensions.width-10} height={dimensions.height-10} />}
      </div>
    </div>
  );
}

export default App;
