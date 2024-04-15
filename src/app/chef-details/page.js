import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import Footer from "../footer";
import sidelogo from "../assets/sidebar-logo.svg";
import aboutauthentichef from "../assets/about-authentichef.svg";
import beacomechef from "../assets/become-a-chef.svg";
import chefdishes from "../assets/chef-dishes.svg";
import exploredish from "../assets/explore-dishes.svg";
import beg from "../assets/beg.svg";

const ChefDetail = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
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
                      className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px]"
                    />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-[410px] min-h-full bg-base-200 alata font-[400] text-[16px] leading-[26px]">
                    {/* Sidebar content here */}
                    <div>
                      <div className="flex justify-between">
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
                            className="2xl:w-9 2xl:h-9 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>{" "}
                        </label>
                        <Image src={sidelogo} className="" />
                      </div>
                    </div>
                    <li className="mt-20">
                      <a>
                        <Image
                          src={aboutauthentichef}
                          className="w-[20px] h-[20px]"
                        />
                        About Authentichef
                      </a>
                    </li>
                    <li>
                      <a href="/become-chef">
                        <Image
                          src={beacomechef}
                          className="w-[20px] h-[20px]"
                        />
                        Become a Chef
                      </a>
                    </li>
                    <li>
                      <a href="/chef-dishes">
                        <Image src={chefdishes} className="w-[20px] h-[20px]" />
                        Chef Dishes
                      </a>
                    </li>
                    <li>
                      <a href="/explore-dishes">
                        <Image
                          src={exploredish}
                          className="w-[20px] h-[20px]"
                        />
                        Explore Dishes
                      </a>
                    </li>
                    <li>
                      <a href="/setting">
                        <Image
                          src={exploredish}
                          className="w-[20px] h-[20px]"
                        />
                        Setting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link href="#">
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
                <Image
                  src={beg}
                  className="2xl:w-[28px] xl:w-[20px] w-[16px]"
                />
              </button>
            </div>
          </div>
        </nav>

        <Footer />
      </section>
    </>
  );
};
export default dynamic(() => Promise.resolve(ChefDetail), { ssr: false });
