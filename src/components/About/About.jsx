import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../About/About_page.json"

function About() {
  return (
    <>
      <h1 className='text-6xl font-semibold mt-6 ml-32'>About Us</h1>
      <div className='m mt-20 flex'>
        <Lottie className='w-2/5 h-2/5 ml-10 ' animationData={animationData}/>
      </div>
    </>
  )
}

export default About
