import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../Home/Hero_animation.json"
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Home() {

  const [text] = useTypewriter({
    words:["Hi There!!","I am Algora...","Your Personalised Investment Advisor"],
    loop:{},
    typeSpeed:120,
  })



  return (
    <>
      <div className='bg-white min-h-svh '>
        <div className='flex'>
          <div className='flex-col mt-40 w-3/5 h-2/5'>
            <h1 className='text-5xl font-bold font-mono ml-44 px-1 py-4 text-blue-600 flex justify-centre '>{text}<Cursor/></h1>
            {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-0">
            Sign Up
            </button> */}
            {/* <div className='card bg-red-300 flex'>
              <div className='login'>
                <button>Login</button>
              </div>
              <div className='signup'>
                <button>Sign Up</button>
              </div>

            </div> */}
          </div>
          
          <div className=' w-2/5 h-2/5 float-right mt-30 px-1 py-5 ml-3 mr-16'>
          <Lottie animationData={animationData}/>
          </div>
          
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home
