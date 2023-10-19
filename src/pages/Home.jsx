import React from 'react';
import dogs from '../assets/img/images-2.jpeg'
import h1 from '../assets/img/home-1.jpeg'
import h2 from "../assets/img/home-2.jpeg";
import h3 from "../assets/img/home-3.jpeg";
import h4 from "../assets/img/bg-img-3.jpeg"


const Home = () => {
  return (
    <>
      <div class="bg-white">
        <div class="flex justify-between items-center py-28 w-full">
          <div class="w-1/2 ml-28">
            {/* <div className="bg-green-600 rounded-full w-96 h-96 relative "></div> */}
            <img
              src={dogs}
              alt="Img for dogs"
              class="w-96 h-96 absolute top-48 left-40"
            />
          </div>

          <div class="w-1/2">
            <h2 class="text-4xl font-semibold text-green-800">
              World's leading chain of <br /> hotels and homes
            </h2>
            <p class="text-gray-600 mt-4 text-base">
              More Destination More Esim More Affordable
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border shadow-md grid grid-cols-4 gap-10 p-10 mt-48 w-1/2 ml-96 ">
        {/* <!-- B coding section 2 --> */}
        <div className="flex flex-1 items-center gap-4">
          {/* 1 */}
          <form method="GET">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                ></button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-gray-900 bg-gray-200 rounded-md pl-10 pr-6 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                placeholder="Search by City, Name, ID"
                autocomplete="off"
              />
            </div>
          </form>
          {/* 2 */}
          <form method="GET">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                ></button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-gray-900 bg-gray-200 rounded-md pl-10 pr-6 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                placeholder="7 May 22 - 12 May 22"
                autocomplete="off"
              />
            </div>
          </form>
          {/* 3 */}
          <form method="GET">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                ></button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-gray-900 bg-gray-200 rounded-md pl-10 pr-6 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                placeholder="Budget"
                autocomplete="off"
              />
            </div>
          </form>

          <button className="btn text-gray-100 hover:text-gray-200 bg-red-500 hover:bg-red-600">
            Search
          </button>
        </div>
      </div>

      {/* <!-- Section 3 ---> */}
      <div class="bg-white p-10 mt-10">
        <div>
          <h2 class=" ml-10 text-3xl text-green-800 font-bold">
            Where everything is taken care off
          </h2>
        </div>

        <p class=" ml-10 mt-4 text-base">Some of the best Pet Care's for you</p>

        {/* carousel Start */}

        <div
          id="carouselExampleControls"
          class="carousel carousel-dark slide mt-5 mr-10"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}
              </div>
            </div>

            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex   justify-content-around">
                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}
              </div>
            </div>


            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}

                {/* <!-- component --> */}

                <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </p>
                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
                {/* Component End */}
              </div>
            </div>

            
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* carousel End */}
        </div>
      </div>

      {/* <!-- Section 4 - Call to action --> */}
      <div id="bg-img" className=" relative col col-12 container mt-10">
        <img src={h4} alt="Dog-img" />
        <div class="p-10 rounded-lg mt-10 absolute top-0" id="bg-text">
          <h2 class="text-white text-3xl">
            Flexible and Reliable Care <br /> for Your Pet
          </h2>
          <p class="text-white mt-5">
            1 The only people who have access to your key or access <br />
            code are your locations man office and your sitter
          </p>
          <p class="text-white mt-2">
            2 We lock al key movements morning if your sitter reacts <br />
            a key they are required to pur a request in our system <br />
            app tracing
          </p>
          <p class="text-white mt-2">
            3 if you home has an access code if will only be available <br />
            to your sitter during scheduled service hour
          </p>
          {/* <div class="flex justify-center">
            <button class="mt-4 bg-white text-cyan-600 rounded-lg px-4 py-2">
              Saber más
            </button>
          </div> */}
        </div>
        <div className="bg-green-500 h-full">
          {/* <!-- component --> */}
          {/* <footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100"> */}
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h1 class="max-w-xs mt-4 text-3xl text-white">
                  Are you a <br />
                  Pet Care Center?
                </h1>
                <div class="flex mt-8 space-x-6 text-gray-600">
                  <button className="bg-white text-base font-bold rounded-full text-red-500 hover:text-red-700 p-2 px-4">
                    List you Center
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h1 class="font-medium text-white text-3xl">200+</h1>
                  <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a class="hover:opacity-75 border border-white w-12 h-1 bg-white ml-4">
                      {" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <h1 class="font-medium text-white text-3xl">200+</h1>
                  <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a class="hover:opacity-75 border border-white w-12 h-1 bg-white ml-4">
                      {" "}
                    </a>
                    <a class="hover:opacity-75"> Center across </a>
                    <a class="hover:opacity-75 ml-8"> india </a>
                  </nav>
                </div>
                <div>
                  <h1 class="font-medium text-white text-3xl">200+</h1>
                  <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a class="hover:opacity-75 border border-white w-12 h-1 bg-white ml-4">
                      {" "}
                    </a>
                    <a class="hover:opacity-75"> Center across </a>
                    <a class="hover:opacity-75 ml-8"> india </a>
                  </nav>
                </div>
                <div>
                  <h1 class="font-medium text-white text-3xl">200+</h1>
                  <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a class="hover:opacity-75 border border-white w-12 h-1 bg-white ml-4"></a>
                    <a class="hover:opacity-75"> Center across </a>
                    <a class="hover:opacity-75 ml-8"> india </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* </footer> */}
        </div>
      </div>

      {/* <!-- Carousel wrapper --> */}

      <div
        id="carouselMultiItemExample"
        class="carousel slide carousel-dark text-center mt-5"
        data-mdb-ride="carousel"
      >
        <div className=" text-left px-20">
          <h1 className="text-3xl text-green-800">
            What our Pet Parents have to say
          </h1>
          <p>What our users have experience</p>
        </div>

        {/* <!-- Controls --> */}
        <div class="d-flex justify-content-end mb-4">
          <button
            class="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Inner --> */}
        <div class="carousel-inner py-4">
          {/* <!-- Single item --> */}
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>
                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Alex Rey</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>
                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>

                <div class="col-lg-4 w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>UX Designer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Alex Rey</h5>
                  <p>Web Developer</p>
                </div>

                <div class="col-lg-4 d-none d-lg-block w-52 p-2 border-2 border-green-900 ml-5">
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul class=" d-flex justify-content-center text-warning mb-0 mt-4">
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i class="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                  <img
                    class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    alt="avatar"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}
      </div>
      {/* <!-- Carousel wrapper --> */}

      <div className="col col-12 container mt-4 bg-cyan-100 w-full h-40 flex items-center justify-center">
        <h1 className=" text-3xl font-bold text-green-800">
            Ready to book a schedule with us?
        </h1>
      </div>
    </>
  );
}

export default Home
