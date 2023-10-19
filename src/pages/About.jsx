import React from 'react'

import h1 from "../assets/img/bg-img-2.webp";
import h2 from "../assets/img/home-1.jpeg"
import h3 from "../assets/img/home-2.jpeg";
import h4 from "../assets/img/home-3.jpeg";
import h5 from "../assets/img/home-4.jpeg";
import MultiRangeSlider from "../components/multiRangeSlider/MultiRangeSlider"
const About = () => {
  return (
    <>
      {/* <!-- Section 4 - Call to action --> */}
      <div id="bg-img" className=" relative col col-12 container mt-10">
        <img src={h1} alt="Dog-img" />
        <div
          class="p-10 rounded-lg mt-10 absolute top-0 text-center"
          id="bg-text"
        >
          <h2 class="text-white text-3xl mt-20">
            World's leading chain of <br /> hotel and home
          </h2>
          <p class="text-white mt-4">
            More Destination More Ease More Affordable
          </p>

          {/* <div class="flex justify-center">
            <button class="mt-4 bg-white text-cyan-600 rounded-lg px-4 py-2">
              Saber más
            </button>
          </div> */}
        </div>

        <div class=" absolute bg-white border rounded-lg shadow-md grid grid-cols-4 gap-10 p-10 w-7/12 ml-80 bottom-10 ">
          {/* <!-- B coding  section 2 --> */}
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
      </div>

      <div className="row p-4 gap-4">
        {/* Section-1 Side-1 */}
        <div className="col col-3 p-2 ml-16">
          <h1 className="text-xl font-extrabold ">Filters</h1>

          {/* 1 */}
          <div className="absolute">
            <h1>Price</h1>
            <MultiRangeSlider min={0} max={1000} />
            <hr className=" mt-16 w-64" />
          </div>

          {/* <div className="mt-4">
            <h1 className="text-base font-bold"> Price </h1>
            <div className="mt-4 ml-4">
              <form action="">
                <input type="range" className=" w-60" />
                <div className="flex text-center gap-48">
                  <label htmlFor="">50</label>
                  <label htmlFor="">1200</label>
                </div>
              </form>
              <hr className="mt-4 w-64" />
            </div>
          </div> */}

          {/* 2 */}
          <div className="xl:mt-24">
            <h1 className="text-base font-bold"> Ratting </h1>
            <div className="flex text-center gap-2 mt-4 ml-4">
              <span className="border-2 p-2 text-gray-700 hover:text-gray-900 cursor-pointer btn">
                0+
              </span>
              <span className="border-2 p-2 text-gray-700 hover:text-gray-900 cursor-pointer btn">
                1+
              </span>
              <span className="border-2 p-2 text-gray-700 hover:text-gray-900 cursor-pointer btn">
                2+
              </span>
              <span className="border-2 p-2 text-gray-700 hover:text-gray-900 cursor-pointer btn">
                3+
              </span>
              <span className="border-2 p-2 text-gray-700 hover:text-gray-900 cursor-pointer btn">
                4+
              </span>
            </div>
            <hr className="mt-4 w-64" />
          </div>

          {/* 3 */}
          <div className="mt-4">
            <h1 className="text-base font-bold"> Freebies </h1>
            <div className="flex-none gap-2 mt-4 ml-4">
              <p>Free breakfast</p>
              <p>Free parking</p>
              <p>Free internet</p>
              <p>Free airport shuffle</p>
              <p>Free cancellation</p>
            </div>
            <hr className="mt-4 w-64" />
          </div>

          {/* 4 */}
          <div className="mt-4">
            <h1 className="text-base font-bold"> Amenities </h1>
            <div className="flex-none gap-2 mt-4 ml-4">
              <p>24hr front desk</p>
              <p>Air-conditioned</p>
              <p>Fitness</p>
              <p>Pool</p>
              <p className="text-red-500">+24 more</p>
            </div>
            {/* <hr className="mt-4 w-64" /> */}
          </div>
        </div>
        {/* === End === Section-1 === Side-1 === */}

        {/* Section-2 Side-2 */}
        <div className="col col-8 p-2  max-w-[73rem]">
          <div className="flex item-center justify-between">
            <h1 className="text-base font-bold">
              Showing 4 of <span className="text-red-400">253 places</span>
            </h1>

            <h1 className="mr-96">
              {" "}
              Sort by <span className="text-base font-bold"> recommended</span>
            </h1>
          </div>

          {/* Card - 1  */}

          {/* <!-- component --> */}
          <div class="relative mt-4 flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                src={h2}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="flex text-red-500  font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal antialiased gap-5 item-center justify-between">
                The An's Villi Hotel
                <p className="text-xs font-normal text-gray-400 ">
                  {" "}
                  starting from <br />
                  <span className="text-red-500 font-bold text-xl">
                    240/Day
                  </span>{" "}
                  <br />
                  incl tax
                </p>
              </h6>

              <p className="flex item-center gap-2">
                <i className="fa fa-location-dot"></i>
                Pimple Gurev Pune
              </p>

              <div className="flex item-center gap-20">
                <ul class="flex item-center text-warning mb-0 mt-2">
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
                <p className="mt-2">
                  {" "}
                  <span className="text-black bg-black text-base">10</span> 20+
                  Amanitas
                </p>
              </div>

              <div className="flex item-center gap-2 mt-2">
                <span className="border p-1">4.2</span>
                <h2 className="text-base font-bold">Very Good</h2>
                <p>371 reviews</p>
              </div>
              <hr className="mt-4 w-full" />

              <div className="inline-flex gap-4 mt-4 " href="#">
                <button
                  class="flex btn border select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <i className="fa fa-heart text-red-500"></i>
                </button>
                <button
                  class="flex btn border w-80 select-none items-center justify-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all bg-green-600 hover:bg-green-700"
                  type="button"
                >
                  View place
                </button>
              </div>
            </div>
          </div>
          {/* Card - 2 */}
          {/* <!-- component --> */}
          <div class="relative mt-4 flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                src={h3}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="flex text-red-500  font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal antialiased gap-5 item-center justify-between">
                The An's Villi Hotel
                <p className="text-xs font-normal text-gray-400 ">
                  {" "}
                  starting from <br />
                  <span className="text-red-500 font-bold text-xl">
                    240/Day
                  </span>{" "}
                  <br />
                  incl tax
                </p>
              </h6>

              <p className="flex item-center gap-2">
                <i className="fa fa-location-dot"></i>
                Pimple Gurev Pune
              </p>

              <div className="flex item-center gap-20">
                <ul class="flex item-center text-warning mb-0 mt-2">
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
                <p className="mt-2">
                  {" "}
                  <span className="text-black bg-black text-base">10</span> 20+
                  Amanitas
                </p>
              </div>

              <div className="flex item-center gap-2 mt-2">
                <span className="border p-1">4.2</span>
                <h2 className="text-base font-bold">Very Good</h2>
                <p>371 reviews</p>
              </div>
              <hr className="mt-4 w-full" />

              <div className="inline-flex gap-4 mt-4 " href="#">
                <button
                  class="flex btn border select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <i className="fa fa-heart text-red-500"></i>
                </button>
                <button
                  class="flex btn border w-80 select-none items-center justify-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all bg-green-600 hover:bg-green-700"
                  type="button"
                >
                  View place
                </button>
              </div>
            </div>
          </div>
          {/* Card - 3 */}
          {/* <!-- component --> */}
          <div class="relative mt-4 flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                src={h4}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="flex text-red-500  font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal antialiased gap-5 item-center justify-between">
                The An's Villi Hotel
                <p className="text-xs font-normal text-gray-400 ">
                  {" "}
                  starting from <br />
                  <span className="text-red-500 font-bold text-xl">
                    240/Day
                  </span>{" "}
                  <br />
                  incl tax
                </p>
              </h6>

              <p className="flex item-center gap-2">
                <i className="fa fa-location-dot"></i>
                Pimple Gurev Pune
              </p>

              <div className="flex item-center gap-20">
                <ul class="flex item-center text-warning mb-0 mt-2">
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
                <p className="mt-2">
                  {" "}
                  <span className="text-black bg-black text-base">10</span> 20+
                  Amanitas
                </p>
              </div>

              <div className="flex item-center gap-2 mt-2">
                <span className="border p-1">4.2</span>
                <h2 className="text-base font-bold">Very Good</h2>
                <p>371 reviews</p>
              </div>
              <hr className="mt-4 w-full" />

              <div className="inline-flex gap-4 mt-4 " href="#">
                <button
                  class="flex btn border select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <i className="fa fa-heart text-red-500"></i>
                </button>
                <button
                  class="flex btn border w-80 select-none items-center justify-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all bg-green-600 hover:bg-green-700"
                  type="button"
                >
                  View place
                </button>
              </div>
            </div>
          </div>
          {/* Card - 4 */}
          {/* <!-- component --> */}
          <div class="relative mt-4 flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                src={h5}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="flex text-red-500  font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal antialiased gap-5 item-center justify-between">
                The An's Villi Hotel
                <p className="text-xs font-normal text-gray-400 ">
                  {" "}
                  starting from <br />
                  <span className="text-red-500 font-bold text-xl">
                    240/Day
                  </span>{" "}
                  <br />
                  incl tax
                </p>
              </h6>

              <p className="flex item-center gap-2">
                <i className="fa fa-location-dot"></i>
                Pimple Gurev Pune
              </p>

              <div className="flex item-center gap-20">
                <ul class="flex item-center text-warning mb-0 mt-2">
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
                <p className="mt-2">
                  {" "}
                  <span className="text-black bg-black text-base">10</span> 20+
                  Amanitas
                </p>
              </div>

              <div className="flex item-center gap-2 mt-2">
                <span className="border p-1">4.2</span>
                <h2 className="text-base font-bold">Very Good</h2>
                <p>371 reviews</p>
              </div>
              <hr className="mt-4 w-full" />

              <div className="inline-flex gap-4 mt-4 " href="#">
                <button
                  class="flex btn border select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <i className="fa fa-heart text-red-500"></i>
                </button>
                <button
                  class="flex btn border w-80 select-none items-center justify-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all bg-green-600 hover:bg-green-700"
                  type="button"
                >
                  View place
                </button>
              </div>
            </div>
          </div>
          <button className="w-full max-w-[48rem] mt-10 text-white  bg-green-600 hover:bg-green-700 rounded-full btn">
            Show more result
          </button>
        </div>

        {/* === End === Section-2 === Side-2 === */}
      </div>
    </>
  );
}

export default About
