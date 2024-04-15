import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import banner1 from "./assets/chef-banner1.png";
import banner2 from "./assets/chef-banner2.png";
import banner3 from "./assets/chef-banner3.png";
import boss from "./assets/own-boss.svg";
import dishmenu from "./assets/dishes-menu.svg";
import cook from "./assets/cook.svg";
import Footer from "../footer";
import sidelogo from "../assets/sidebar-logo.svg";
import aboutauthentichef from "../assets/about-authentichef.svg";
import beacomechef from "../assets/become-a-chef.svg";
import chefdishes from "../assets/chef-dishes.svg";
import exploredish from "../assets/explore-dishes.svg";
import beg from "../assets/beg.svg";



const BecomeChef = () => {
  return (
    <>
      <section>
        <div>
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
                <Image src={beg} className="2xl:w-[28px] xl:w-[20px] w-[16px]" />
              </button>
              </div>
            </div>
          </nav>

          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px]">
            <div className="mx-auto">
              <h1 className="alata font-[400] 2xl:text-[75px] 2xl:leading-[85px] xl:text-[45px] xl:leading-[55px] text-[30px] leading-[40px] text-center 2xl:mb-[30px] xl:mb-[20px] mb-[10px]">
                Our Chef Community
              </h1>
              <div className="2xl:w-[1098px] xl:w-[700px] w-[510px] text-center">
                <p className="alata font-[400] 2xl:text-[25px] 2xl:leading-[50px] xl:text-[16px] xl:leading-[30px] text-[12px] leading-[18px]">
                  Our diverse chef-community is at the heart of the food we
                  serve.
                </p>
                <p className="alata font-[400] 2xl:text-[25px] 2xl:leading-[35px] xl:text-[16px] xl:leading-[22px] text-[12px] leading-[16px] 2xl:mt-[15px] xl:mt-[5px] mt-[3px]">
                  We help new and established chefs to start and grow their food
                  business and showcase their passion for creating culinary
                  experiences.
                </p>
              </div>
              <div className="flex flex-col justify-end 2xl:mt-[55px] xl:mt-[35px] mt-[25px]">
                <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[240px] 2xl:h-[60px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] text-[10px] xl:w-[150px] w-[130px] xl:py-[12px]  lg:py-[10px] lg:px-4 px-3 py-1 hover:bg-[#7e2727]  ">
                  Join the Waiting List
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F5C7C7]">
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px] 2xl:pt-[100px] xl:pt-[60px] pt-[40px] 2xl:pb-[125px] xl:pb-[80px] pb-[60px]">
              <div className="flex justify-between items-center w-full">
                <div>
                  <Image
                    src={banner1}
                    width={920}
                    height={507}
                    className="2xl:w-full h-auto rounded-[15px] xl:w-[630px] w-[490px]"
                  />
                </div>
                <div className="2xl:w-[566px] xl:w-[360px] w-[280px]  alata font-[400] 2xl:text-[25px] 2xl:leading-[35px] xl:text-[16px] xl:leading-[28px] lg:text-[12px] lg:leading-[20px]">
                  <p>
                    We believe that every chef has a story worth sharing and a
                    talent worth celebrating.
                  </p>
                  <p className="2xl:my-[30px] xl:my-[20px] my-[12px]">
                    By joining authentichef, you not only gain a platform to
                    showcase your unique culinary creations, but also become
                    part of a growing and vibrant community of like-minded
                    individuals passionate about food and culture.
                  </p>
                  <p>
                    With our dedicated support, you can turn your love for
                    cooking into a growing food business, all while sharing your
                    delicious dishes with people across the UK.
                  </p>
                </div>
              </div>
              <div className="flex justify-between 2xl:mt-[70px] xl:mt-[40px] mt-[25px]">
                <div className="2xl:w-[317px] xl:w-[240px] w-[180px]">
                  <Image
                    src={boss}
                    width={94}
                    height={94}
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1"
                  />
                  <h2 className="alata font-[400] 2xl:text-[25px] 2xl:leading-[35px] xl:text-[16px] xl:leading-[28px] lg:text-[12px] lg:leading-[20px]">
                    Be your own boss
                  </h2>
                  <p className="alata font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[13px] xl:leading-[20px] text-[10px] leading-[14px]">
                    Grow your own food business with little to no start-up costs
                  </p>
                </div>
                <div className="2xl:w-[465px] xl:w-[380px] w-[260px]">
                  <Image
                    src={dishmenu}
                    width={72}
                    height={94}
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1"
                  />
                  <h2 className="alata font-[400] 2xl:text-[25px] 2xl:leading-[35px] xl:text-[16px] xl:leading-[28px] lg:text-[12px] lg:leading-[20px]">
                    Create a menu of high quality dishes
                  </h2>
                  <p className="alata font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[13px] xl:leading-[20px] text-[10px] leading-[14px]">
                    Embrace tradition, cultural value and authenticity in your
                    creations
                  </p>
                </div>
                <div className="2xl:w-[564px] xl:w-[360px] w-[280px]">
                  <Image
                    src={cook}
                    width={94}
                    height={94}
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1"
                  />
                  <h2 className="alata font-[400] 2xl:text-[25px] 2xl:leading-[35px] xl:text-[16px] xl:leading-[28px] lg:text-[12px] lg:leading-[20px]">
                    Cook when you want and how often
                  </h2>
                  <p className="alata font-[400] 2xl:text-[18px] 2xl:leading-[28px] xl:text-[13px] xl:leading-[20px] text-[10px] leading-[14px]">
                    You make the dishes available, we pick up and deliver them
                    nationwide, safely to your customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px]"></div>
          <div>
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px]"></div>
          </div>
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px]"></div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default BecomeChef;
