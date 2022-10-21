import React, { useLayoutEffect, useRef, useState } from 'react'

const Cracker = () => {

    const [animation,setAnimation]=useState('wiggle');
    const DivRef=useRef()
    useLayoutEffect(()=>{
        DivRef.current.style.bottom='4rem'
    },[animation])

  return (
    <section className='flex flex-col items-center justify-center h-full bg-gray-300'>
        <div ref={DivRef} className={`absolute bottom-4 h-24 w-24 bg-gray-800 text-white text-center animate-${animation} `}>
            Cracker
        </div>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    onClick={()=>{
        setAnimation('moveup')
    }}
    >Fire up</button>
    </section>
  )
}

export default Cracker