import React from 'react'
import { NavLink , Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='container flex bg-white shadow-md shadow-slate-400'>
        <ul className='flex '>
            <li className=''>
                <Link to="/" className='flex ml-56 px-4 py-4' >
                    <img src="/images/nav_logo.png" alt="" />
                    <img src="/images/nav_text.png" alt="" />
                </Link>
            </li>
            <li className='px-4 py-4 mt-1 ml-56'>
                <NavLink to="/" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    Home
                </NavLink>
            </li>
            <li className='px-4 py-4 mt-1'>
                <NavLink to="/about" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    About us
                </NavLink>
            </li>
            <li className='px-4 py-4 mt-1'>
                <NavLink to="/contact" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="login" className=''>
                    <button className='px-4 py-1 mt-4 font font-semibold text-lg text-slate-600 ml-56 rounded-xl border-2 border-slate-400 hover:bg-blue-500 hover:text-white ease-in shadow-md '>
                        Login
                    </button>
                </NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header
