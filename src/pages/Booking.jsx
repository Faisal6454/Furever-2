import React from 'react'

const Booking = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row lg:flex sm:flex-none">
          <div className="col col-12 overflow-hidden lg:flex sm:flex-none gap-2 w-full h-80 mt-5 ">
            <div className="col col-5  bg-slate-300"></div>
            <div className="col col-5  bg-slate-300"></div>
            <div className="col col-2  bg-slate-300"></div>
          </div>

          <div className="container">
            <div className="row">
              <div className=" col col-12 overflow-hidden lg:flex sm:flex-none gap-5 w-full h-auto mt-5 ">
                {/* Side-1 */}
                <div
                  className="col-6
                "
                >
                  {/* Side-1 Main div */}
                  <div className="flex items-center justify-between p-2">
                    {/* 1 */}
                    <div>
                      <h1 className="text-lg font-bold text-red-600">
                        Presidential Hotel
                      </h1>
                      <p className="text-base font-extralight">
                        <i className="fa fa-location-dot text-green-600 font-bold text-xl">
                          {" "}
                        </i>{" "}
                        Lorem ipsum address in
                      </p>
                    </div>
                    {/* 2 */}

                    <div className="flex item-center gap-2">
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
                        5 Star Pet Care <br />
                        <span className="font-bold">20+</span>
                        Amenities
                      </p>
                    </div>
                  </div>

                  <div className="main">
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">Description</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <br /> Odio architecto rem nobis nulla repellat cumque.{" "}
                        <br /> Ipsa repellendus vero voluptas officiis?
                      </p>
                      <a
                        href=""
                        className="text-green-500 text-base font-semibold"
                      >
                        Read more...
                      </a>
                    </div>

                    <div className="p-2">
                      <h1 className="text-lg font-semibold">Facilities</h1>
                      <div className="flex items-center gap-4">
                        <p>Play Area</p>
                        <p>Swimming Pool</p>
                        <p>Grooming</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p>lorem ipsum</p>
                        <p>lorem ipsum</p>
                      </div>
                    </div>

                    <div className="bg-gray-200 w-full p-4">
                      {/* 1 */}
                      <div className="flex gap-4">
                        <div>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Select Pet</option>
                            <option value="US">Dogs</option>
                            <option value="CA">Cats</option>
                            <option value="FR">Parrot</option>
                            <option value="DE">Snacks</option>
                          </select>
                        </div>

                        <div>
                          <div date-rangepicker class="flex items-center">
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                              />
                            </div>
                            {/* <span class="mx-4 text-gray-500">to</span> */}
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2 */}
                      <h1 className="font-bold text-lg ">Meals</h1>
                      <div className="flex gap-4">
                        <div>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Select Meals</option>
                            <option value="US">Dogs</option>
                            <option value="CA">Cats</option>
                            <option value="FR">Parrot</option>
                            <option value="DE">Snacks</option>
                          </select>
                        </div>

                        <div>
                          <div date-rangepicker class="flex items-center">
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                              />
                            </div>
                            {/* <span class="mx-4 text-gray-500">to</span> */}
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="" className=" text-sm font-extralight">
                        {" "}
                        + Add More
                      </a>

                      {/* 3 */}
                      <h1 className="font-bold text-lg ">Activities</h1>
                      <div className="flex gap-4">
                        <div>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Select Activity</option>
                            <option value="US">Dogs</option>
                            <option value="CA">Cats</option>
                            <option value="FR">Parrot</option>
                            <option value="DE">Snacks</option>
                          </select>
                        </div>

                        <div>
                          <div date-rangepicker class="flex items-center">
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                              />
                            </div>
                            {/* <span class="mx-4 text-gray-500">to</span> */}
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="" className=" text-sm font-extralight">
                        {" "}
                        + Add More
                      </a>
                      {/* 4 */}
                      <h1 className="font-bold text-lg ">Grooming / Bath</h1>
                      <div className="flex gap-4">
                        <div>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Select Activity</option>
                            <option value="US">Dogs</option>
                            <option value="CA">Cats</option>
                            <option value="FR">Parrot</option>
                            <option value="DE">Snacks</option>
                          </select>
                        </div>

                        <div>
                          <div date-rangepicker class="flex items-center">
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                              />
                            </div>
                            {/* <span class="mx-4 text-gray-500">to</span> */}
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="" className=" text-sm font-extralight">
                        {" "}
                        + Add More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Side-2 */}
                <div className="col-3 ">
                  <div className="border rounded-lg shadow-lg p-2">
                    <h1 className="text-xl font-bold text-green-500">$ 150 </h1>
                    <p className="text-sm font-extralight">
                      (including 18% GST)
                    </p>

                    <form
                      action=""
                      className="flex gap-2 mt-2 border w-80 h-10 text-center p-2"
                    >
                      <input type="date" id="date" name="date" />
                      <input type="date" id="date" name="date" />
                    </form>

                    <div className="mt-4">
                      <h1 className="text-lg font-semibold text-green-500">
                        Pricing Breakup
                      </h1>
                      <div className="p-2">
                        <p className="flex items-center justify-between">
                          Meal <span>$150</span>{" "}
                        </p>
                        <p className="flex items-center justify-between">
                          Meal <span>$150</span>{" "}
                        </p>
                        <p className="flex items-center justify-between">
                          Bath <span>$150</span>{" "}
                        </p>
                        <p className="flex items-center justify-between">
                          Walk <span>$150</span>{" "}
                        </p>
                      </div>
                      <hr />
                      <div className=" flex items-center justify-between p-2">
                        <h1 className="font-bold text-lg">Total Amount </h1>
                        <p className="text-xs font-extralight">
                          <span className="font-medium text-base ml-16">
                            $ 600
                          </span>{" "}
                          <br /> including 18% GST
                        </p>
                      </div>
                      <button className="btn text-lg text-gray-100 bg-green-600 hover:bg-green-600 lg:w-full mt-5 mb-4">
                        Continue to Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="testimonial mt-5">
                <h1 className="text-2xl font-semibold ">Reviews</h1>

                {/* <!-- Carousel wrapper --> */}

                <div
                  id="carouselMultiItemExample"
                  class="carousel slide carousel-dark text-center"
                  data-mdb-ride="carousel"
                >
                  {/* <!-- Controls --> */}
                  <div class="d-flex justify-content-end mb-4">
                    <button
                      class="carousel-control-prev position-relative"
                      type="button"
                      data-mdb-target="#carouselMultiItemExample"
                      data-mdb-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next position-relative"
                      type="button"
                      data-mdb-target="#carouselMultiItemExample"
                      data-mdb-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* <!-- Inner --> */}
                  <div class="carousel-inner py-4">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
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
                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
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
                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
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
                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
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
                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
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

                          <div class="col-lg-4 w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod eos id officiis hic tenetur
                              quae quaerat ad velit ab hic tenetur.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              Ut enim ad minima veniam, quis nostrum
                              exercitationem ullam corporis suscipit laboriosam,
                              nisi ut aliquid commodi.
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

                          <div class="col-lg-4 d-none d-lg-block w-52 p-2 ml-5">
                            <img
                              class="rounded-circle shadow-1-strong mb-4 w-20 items-center ml-14 mt-4"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                              alt="avatar"
                            />
                            <h5 class="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
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
                            <p class="text-muted">
                              <i class="fas fa-quote-left pe-2"></i>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Inner --> */}
                </div>
                {/* <!-- Carousel wrapper --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking
