import React from "react";

const SideBar = () => {
  return (
    <div className="ml-5 mr-10 bg-white rounded-2xl px-8 py-5  flex-col hidden">
      <div>
        <ul>
          <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://images.hdqwalls.com/download/courage-the-cowardly-dog-minimal-4k-4g-250x250.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 text-left ">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Hi there , How are you?
                </p>
              </div>
              <div className="inline-flex items-center text-xs  text-gray-900">
                12:00
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://images.hdqwalls.com/download/pikapool-rv-250x250.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0  text-left ">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Working with you like dream
                </p>
              </div>
              <div className="inline-flex items-center text-xs  text-gray-900 ">
                6:20
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://images.hdqwalls.com/download/bart-simpson-got-high-5k-l4-250x250.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0  text-left ">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate ">Hi there !</p>
              </div>
              <div className="inline-flex items-center text-xs  text-gray-900 ">
                1:50
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://images.hdqwalls.com/download/donald-duck-found-a-treasure-4k-b7-250x250.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0  text-left ">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  What are you doing?
                </p>
              </div>
              <div className="inline-flex items-center text-xs  text-gray-900 ">
                3:00
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://images.hdqwalls.com/download/rick-and-morty-gig-4k-ny-250x250.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0  text-left ">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Hey
                </p>
              </div>
              <div className="inline-flex items-center text-xs  text-gray-900 ">
                10:39
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
