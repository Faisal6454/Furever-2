import React from 'react';

import puppy from '../assets/img/Sign-up bg-img.jpeg';
import facebook from '../assets/img/facebook.webp';
import google from '../assets/img/google.png';
import apple from '../assets/img/apple.jpeg';


const Signup = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div class=" flex justify-center items-center h-screen mt-10">
        {/* <!-- Left: Image --> */}
        <div class="w-1/2 h-screen p-20 hidden lg:block">
          <img
            src={puppy}
            alt="Placeholder Image"
            class="object-cover w-full h-full rounded-2xl"
          />
        </div>
        {/* <!-- Right: Login Form --> */}

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div class="w-full">
            <h1 className=" text-3xl font-semibold tracking-wider text-gray-800 capitalize dark:text-gray-800">
              Sign up
            </h1>
            {/* <h3 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-gray-700">
              Get your free account now.
            </h3> */}

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="XXX-XX-XXXX-XXX"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </form>

            <div className="row w-full col col-12 mt-4">
              <div className="col col-12">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="col col-12 mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-700">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="flex flex-row items-center mt-4">
                <input
                  type="checkbox"
                  class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  for="comments"
                  class=" flex flex-row ml-2 text-sm font-normal text-gray-700"
                >
                  {" "}
                  i agree to all the{" "}
                  <p className="text-danger ml-2 mr-2"> Terms </p> and{" "}
                  <p className="text-danger ml-2">Privacy Policies</p>
                </label>
              </div>

              <button class="flex items-center justify-center w-full px-6 py-3 mt-5 ml-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span> Create Account </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <p class="text-center mt-3 text-[14px]">
                Don&#x27;t have an account?
                <a href="/signup" class="text-danger">
                  Sign up
                </a>
              </p>

              <div class="flex items-center mt-4">
                <hr class="flex-grow border-t border-gray-800" />
                <span class="px-3 text-gray-500">Or login with</span>
                <hr class="flex-grow border-t border-gray-800" />
              </div>

              <div className="flex gap-5 mt-10 justify-center">
                <a href="">
                  <img
                    className="w-20 h-20  border  bg-slate-100"
                    src={facebook}
                    alt="icon"
                  />
                </a>
                <a
                  href="">
                  <img
                    className="w-20 h-20 border  bg-slate-100"
                    src={google}
                    alt="icon"
                  />
                </a>
                <a href="">
                  <img
                    className="w-20 h-20 border  bg-slate-100"
                    src={apple}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup
