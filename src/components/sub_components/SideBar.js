import React from "react";

const SideBar = () => {
  return (
    <div className="ml-5 mr-10 bg-white rounded-2xl px-8 py-5 flex flex-col ">
      <div className="flow-root">
        <ul>
          <li className="py-3 sm:py-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
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
                  className="w-8 h-8 rounded-full"
                  src="https://images.hdqwalls.com/wallpapers/aladdins-genie-5k-7b.jpg"
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
                  className="w-8 h-8 rounded-full"
                  src="https://images.hdqwalls.com/wallpapers/spongebob-squarepants-4k-2020-4s.jpg"
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
                  className="w-8 h-8 rounded-full"
                  src="https://images.hdqwalls.com/wallpapers/courage-the-cowardly-dog-minimal-4k-4g.jpg"
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
                  className="w-8 h-8 rounded-full"
                  src="https://images.hdqwalls.com/wallpapers/bob-minions.jpg"
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
