import React from 'react'
import { useState } from 'react'
import { IoIosLogOut } from 'react-icons/io'
import { auth } from '../firebase'
import Nothing from './sub_components/Nothing'
const NavBar = () => {
  const [nothing, setNothing] = useState(0)

  return (
    <div>
      <Nothing flag={nothing} />
      <nav className="flex items-center justify-between flex-wrap bg-[#F5F7FB] p-6">
        <div className="flex items-center flex-shrink-0 text-[#636365] mr-6">
          <svg
            className="h-12 w-12"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stopColor="#2397B3" offset="0%"></stop>
                <stop stopColor="#13577E" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                <stop stopColor="#73DFF2" offset="0%"></stop>
                <stop stopColor="#47B1EB" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
                fill="#4D426D"
                transform="translate(1 1)"
              ></path>
              <path
                d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
                fill="#3BA58B"
                transform="translate(1 1)"
              ></path>
              <path
                d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                fill="#FFF"
              ></path>
            </g>
          </svg>
          <span className="font-bold text-xl tracking-tight ml-4">
            CHAT BOT
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-md font-bold lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#636365] mr-10 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              Home
            </a>

            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-green text-green mr-10 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              Chat
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#636365] mr-10 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              Contacts
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#636365] mr-10 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              Setting
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#636365] mr-10 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              FAQs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#636365] mr-20 hover:scale-105 ease-in duration-100 transition"
              onClick={() => setNothing(Math.random())}
            >
              Terms of use
            </a>
          </div>
          <div className="flex justify-end transition ease-in-out hover:scale-110  hover:-translate-y-1 duration-300">
            <IoIosLogOut onClick={() => auth.signOut()} size={'25px'} />
          </div>
        </div>
      </nav>
      {/* Search Clear Chat More
      <div className="p-6 flex justify-between">
        <div className="w-1/4">
          <input
            className=" bg-white  w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mr-1 rounded-3xl"
            id="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-end w-3/4">
          <div className="bg-white text-sm w-40 font-bold py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mr-1 rounded-3xl">
            CLEAR CHAT
          </div>
          <div className="bg-white text-sm font-bold  w-32 py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mr-1 rounded-3xl">
            MORE
          </div>
        </div>
      </div> */}
    </div>
  )
}
export default NavBar
