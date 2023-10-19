import React from 'react';
import '../index.css';

import { useState } from 'react';
import logo from "../assets/logo/logo-2.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-gray-100 h-16">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class=" navbar-collapse " id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand text-2xl font-semibold mt-2 mt-lg-0 text-green-500" href="#">
              <img
                className="w-16 h-12 lg:ml-36"
                src={logo}
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
              Furever
            </a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
                <a class="nav-link text-lg font-semibold text-gray-600 hover:text-gray-900 " href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-lg font-semibold text-gray-600 hover:text-gray-900 " href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-lg font-semibold text-gray-600 hover:text-gray-900 " href="/booking">
                  Booking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-lg font-semibold text-gray-600 hover:text-gray-900 " href="/payment">
                  Payment
                </a>
              </li>
              <li class="nav-item">
                <a href="/login">
                  <button
                    class="nav-link btn bg-green-500 hover:bg-green-600 rounded-full text-white w-full text-sm"
                    href="/"
                  >
                    Login/SignUp
                  </button>
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center lg:mr-44">
            {/* <!-- Avatar --> */}
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle h-10"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default Navbar
