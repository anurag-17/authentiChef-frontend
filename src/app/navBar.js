import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/logo.png";
import sidemanu from "../../public/images/side-menu.svg";
import sidelogo from "./assets/sidebar-logo.svg";
import aboutauthentichef from "./assets/about-authentichef.svg";
import beacomechef from "./assets/become-a-chef.svg";
import chefdishes from "./assets/chef-dishes.svg";
import exploredish from "./assets/explore-dishes.svg";
import beg from "./assets/beg.svg";
import profile from "./assets/profile.svg";
import faq from "./assets/FAQ.svg";
import logout from "../app/assets/logout.svg";

const NavBar = () => {
  return (
    <section>
      <nav className="z-50 flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 w-full mnavbar-h fixed">
        <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center mnavbar">
          <div className="w-1/3">
            {/* =======Side Drawer======= */}

            <div className="drawer">
              <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle bg-transparent"
              />
              <div className="drawer-content bg-transparent">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                  {" "}
                  <Image
                    alt="image"
                    src={sidemanu}
                    className="2xl:w-[38.67px] 2xl:h-[32px] xl:w-[30px] h-auto w-[22px]  menu-btn "
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul
                  className="menu 
                  2xl:p-[12px] xl:p-[8] lg:p-[2] sm:p-[5] p-[3]
                  2xl:px-[20px] xl:px-[20] lg:px-[15] sm:px-[5] px-[3]
                   2xl:w-[410px] xl:w-[320px] lg:w-[240px] sm:w-[] min-h-full bg-base-200
                   sidebar"
                >
                  {/* Sidebar content here */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          aria-label="close sidebar"
                          className="2xl:w-8 2xl:h-8 w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>{" "}
                      </label>
                      <Link href="/">
                        <Image
                          src={sidelogo}
                          className=" 2xl:w-[169px] 2xl:h-[43px] h-auto xl:w-[130px] lg:w-[90px] sm:w-[] w-[] "
                        />
                      </Link>
                    </div>
                  </div>

                  <li className="2xl:mt-[90px] xl:mt-[50px] lg:mt-[40px] sm:mt-[30px] mt-[]">
                    <Link href="/setting">
                      <Image
                        src={profile}
                        className="2xl:w-[20px] 2xl:h-[20px] h-auto xl:w-[16px] lg:w-[12px]"
                      />
                      Profile
                    </Link>
                  </li>
                  <li className=" 2xl:mt-[5px] xl:mt-[2px] lg:mt-[0px] sm:mt-[8px] mt-[]">
                    <Link href="about-us">
                      <Image
                        src={aboutauthentichef}
                        className="2xl:w-[20px] 2xl:h-[20px] h-auto xl:w-[16px] lg:w-[12px]"
                      />
                      About Authentichef
                    </Link>
                  </li>
                  <li className=" 2xl:mt-[5px] xl:mt-[2px] lg:mt-[0px] sm:mt-[8px] mt-[] ">
                    <Link href="/explore-dishes">
                      <Image
                        src={exploredish}
                        className="2xl:w-[20px] 2xl:h-[20px] h-auto xl:w-[16px] lg:w-[12px]"
                      />
                      Explore Dishes
                    </Link>
                  </li>
                  <li className=" 2xl:mt-[5px] xl:mt-[2px] lg:mt-[0px] sm:mt-[8px] mt-[]">
                    <Link href="/become-chef">
                      <Image
                        src={beacomechef}
                        className="2xl:w-[20px] 2xl:h-[20px] h-auto xl:w-[16px] lg:w-[12px]"
                      />
                      Become a Chef
                    </Link>
                  </li>

                  <li className=" 2xl:mt-[5px] xl:mt-[2px] lg:mt-[0px] sm:mt-[8px] mt-[]">
                    <a href="/FAQs">
                      <Image
                        src={faq}
                        className="2xl:w-[20px] 2xl:h-[20px] h-auto xl:w-[16px] lg:w-[12px]"
                      />
                      FAQs
                    </a>
                  </li>

                  <hr className=" mx-auto 2xl:w-[345px] xl:w-[260px] lg:w-[180px] sm:w-[] w-[] 2xl:mt-[75px] xl:mt-[40px] lg:mt-[20px] sm:mt-[] mt-[]" />
                  <div className="text-center 2xl:mt-[35px] xl:mt-[15px] lg:mt-[10px] sm:mt-[8px] mt-[]">
                    <h1 className="alata font-[400] 2xl:text-[20px] xl:text-[14px] lg:text-[10px] 2xl:leading-[30px] sm:text-[12px] sm:leading-[33px]">
                      Ajay Hardiya
                    </h1>
                    <p className="text-[#555555] alata font-[400] 2xl:text-[14px] xl:text-[10px] lg:text-[9px] sm:text-[10px] text-[] 2xl:leading-[26px] xl:leading-[22px] lg:leading-[16px] sm:leading-[16px] leading-[]">
                      ajay1489hardiyamail.com
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        src={logout}
                        className="2xl:w-[17px] 2xl:h-[17px] h-auto xl:w-[12px] lg:w-[10px] sm:w-[] w-[] "
                      />
                      <h2 className="text-[#DB5353] fourth_p">Logout</h2>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <Link href="/">
              <Image src={logo} alt="logo" className="nav_logo" />
            </Link>
          </div>
          <div className="flex justify-end md:gap-7  gap-2 w-1/3">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search dishes, chefs, cuisine "
                className="2xl:w-[258px] xl:w-[170px] 2xl:h-[44px] xl:h-[30px] w-[130px] h-[20px] bg-[#FF9C9C] text-[#AE6363] 2xl:px-[40px] xl:px-[30px]  px-[20px] outline-none placeholder:text-[#AE6363] 2xl:text-[16px]  xl:text-[12px] text-[9px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute text-[#AE6363] 2xl:top-[10px] 2xl:left-[10px] xl:top-[8px] xl:left-[10px] top-[10px] left-[5px]  2xl:w-5 2xl:h-5 xl:w-4 xl:h-4 w-3 h-3 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <button className="nav_login">Welcome Ajay!</button>
            <button>
              <Image src={beg} className="2xl:w-[28px] xl:w-[20px] w-[16px]" />
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
