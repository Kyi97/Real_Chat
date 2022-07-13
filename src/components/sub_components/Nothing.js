import React, { useEffect } from 'react'
import { useState } from 'react'

const Nothing = ({ flag }) => {
  const [nothing, setNothing] = useState(false)

  useEffect(() => {
    flag && setNothing(true)
  }, [flag])

  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" ${
        nothing ? 'block' : 'hidden'
      }`}
    >
      <div
        className="relative p-4 w-full h-full flex justify-center items-center bg-black bg-opacity-60"
        onClick={() => setNothing(false)}
      >
        <div className="relative bg-white rounded-lg shadow text-black max-w-[500px] px-6 py-10">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-bold tracking-tighter">Dear User 🤖</h3>
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/250/000000/external-system-e-commerce-flaticons-flat-flat-icons.png"
              alt="logo"
              className="w-36 h-36 absolute right-20 bottom-[9rem]"
            />
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => setNothing(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-sm font-semibold">
              Sorry! This function is not yet available. Please check back
              later. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nothing
