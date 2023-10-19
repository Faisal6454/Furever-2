import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div class="flex  w-full bg-white mt-16">
        <footer class="w-full text-gray-700 bg-gray-100 body-font">
          <div class="container flex flex-col flex-wrap px-5 pt-4 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div class="flex flex-wrap flex-grow text-center md:pl-20 md:mt-0 md:text-left">
              <div class="w-full px-4 lg:w-1/3 md:w-1/2 lg:w-">
                <div class="text-center">
                  <h3 class="text-2xl mb-3"> Download Furever App Now </h3>
                  <div class="flex justify-center my-10">
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 bg-black">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                        class="w-7 md:w-8"
                      />
                      <div class="text-left ml-3">
                        <p class="text-xs text-gray-200">Get it on </p>
                        <p class="text-sm text-gray-200 md:text-base">
                          {" "}
                          Google Play{" "}
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 bg-black">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                        class="w-7 md:w-8"
                      />
                      <div class="text-left ml-3">
                        <p class="text-xs text-gray-200">Download on the </p>
                        <p class="text-sm text-gray-200 md:text-base">
                          {" "}
                          Apple Store{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 lg:w-1/6 md:w-1/2">
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      About Us
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Our Services
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Support
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Terms &amp; Condition
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/6 md:w-1/2">
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>

              <div class="flex-shrink-0 w-64 mx-auto md:mx-0 md:text-left">
                <p class="mt-2 text-md text-gray-600 title-font">
                  Subscribe to our newsletter
                </p>
                <div className="mt-3">
                  <form method="GET">
                    <div class="relative text-gray-600 focus-within:text-gray-400">
                      <span class="absolute inset-y-0 right-1 flex items-center pl-2">
                        <button
                          type="submit"
                          class="p-1 px-2 focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600 rounded-full text-white"
                        >
                          Submit
                        </button>
                      </span>
                      <input
                        type="Email...."
                        name="q"
                        class="h-12 w-64 py-2 px-4 text-sm text-gray-900 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                        placeholder="Email Address"
                        autocomplete="off"
                      />
                    </div>
                  </form>
                </div>
                <div class="mt-4">
                  <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-gray-600 cursor-pointer hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-gray-600 cursor-pointer hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-gray-600 cursor-pointer hover:text-gray-900">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-gray-600 cursor-pointer hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full text-lg font-bold mb-4" id="Brand">
            <h2>2012 - 2023 # Furever </h2>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer
