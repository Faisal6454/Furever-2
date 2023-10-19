import React from 'react';

import '../index.css';



const Payment = () => {
  return (
    <>
      {/* <!-- component --> */}

      {/* <div class="container mx-auto my-60">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">Pantazi Software</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">UI Components Factory</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    
                    <div class="flex justify-between items-center my-5 px-6">
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Updated his status
                                    <span class="text-gray-500 text-xs">24 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Added new profile picture
                                    <span class="text-gray-500 text-xs">42 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Posted new article in <span class="font-bold">#Web Dev</span>
                                <span class="text-gray-500 text-xs">49 min ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Edited website settings
                                <span class="text-gray-500 text-xs">1 day ago</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                Added new rank
                                <span class="text-gray-500 text-xs">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> */}

      <main class="profile-page">
        <section class="relative block h-500-px">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover bg-image:{url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')}"
            id="cover-pic"
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px translate-z-0">
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                      <a href="">
                        {" "}
                        <i className="fas fa-pen absolute w-6 h-6 items-center justify-center flex left-12 top-14 bg-orange-500 text-white rounded-full"></i>
                      </a>
                    </div>
                  </div>
                  {/* <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div> */}
                </div>
                <div class="text-center mt-12 mt-32">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Jenna Stones
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4 lg:flex items-center justify-between rounded-lg shadow-xl p-2 h-10 bg-gray-100 ">
                      <a
                        href="#"
                        className="font-normal border-b-2 border-green-500"
                      >
                        {" "}
                        Account{" "}
                      </a>
                      <a href="#" className="font-normal">
                        {" "}
                        History{" "}
                      </a>
                      <a href="#" className="font-normal">
                        {" "}
                        Payment Methods{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-12 w-full ml-48">
                  <div className="flex items-center justify-between">
                    {" "}
                    <h1 className="text-3xl font-bold ">Account</h1>
                    <button className="btn text-sm font-normal  text-gray-900 bg-gray-200 hover:bg-gray-300 lg:mr-96">
                      {" "}
                      <i class="fas fa-edit"></i> Change
                    </button>
                  </div>
                  <div className="shadow-lg rounded-lg mb-5 p-4 mt-3 flex items-center mr-96">
                    <form class="w-full max-w-sm">
                      <div class=" items-center justify-between border-b border-teal-500 py-2">
                        <label htmlFor="name">Name</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          placeholder="Jane Doe"
                          aria-label="Full name"
                        />
                      </div>
                      <div class=" items-center border-b border-teal-500 py-2">
                        <label htmlFor="email">Email</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="email"
                          placeholder="JaneDoe@example.com"
                          aria-label="email"
                        />
                      </div>
                      <div class=" items-center border-b border-teal-500 py-2">
                        <label htmlFor="password">Password</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="password"
                          placeholder=".........."
                          aria-label="password"
                        />
                      </div>
                      <div class=" items-center border-b border-teal-500 py-2">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="phone"
                          placeholder="+91 000-000-0000"
                          aria-label="phone"
                        />
                      </div>
                      <div class=" items-center border-b border-teal-500 py-2">
                        <label htmlFor="text">Address</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="address"
                          placeholder="St 32 main downtown, Lost Angeles, California, USA"
                          aria-label="address"
                        />
                      </div>
                      <div class=" items-center border-b border-teal-500 py-2">
                        <label htmlFor="date">Date of birth</label>
                        <input
                          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="date"
                          placeholder="01-01-1992"
                          aria-label="date of birth"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Payment
