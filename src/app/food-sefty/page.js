import React from "react";
import Image from "next/image";
import Link from "next/link";
import eightPoster from "../assets/food-safety.png";
import Footer from "../footer";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import sidelogo from "../assets/sidebar-logo.svg";
import aboutauthentichef from "../assets/about-authentichef.svg";
import beacomechef from "../assets/become-a-chef.svg";
import chefdishes from "../assets/chef-dishes.svg";
import exploredish from "../assets/explore-dishes.svg";
import beg from "../assets/beg.svg";
import Techniques from "./assets/cook-Techniques.svg";
import Ingredients from "./assets/Ingredients.svg";
import expertise from "./assets/expertise.svg";
import hygiene from "./assets/hygiene.svg";

const FoodSefty = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 mnavbar-h ">
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
                      className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px] menu-btn"
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
                <Image
                  src={beg}
                  className="2xl:w-[28px] xl:w-[20px] w-[16px]"
                />
              </button>
            </div>
          </div>
        </nav>

        <div className="flex justify-center xl:py-28 lg:py-14 md:py-8 py-5 border-b-[1px] border-[#B1B1B1]">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex items-center flex-col-reverse lg:flex-row mnavbar">
            <div className="mx-10 sm:w-1/2 sm:mx-auto lg:mx-0">
              <h1 className=" alata font-[400] 2xl:text-[45px] 2xl:leading-[55px] 2xl:w-[695px] xl:text-[30px] xl:leading-[35px] xl:w-[450px] lg:text-[22px] lg:leading-[30px] lg:w-[340px] text-[12px] leading-[20px] ">
                The safety and well-being of our chef community and customers
                are our top priority
              </h1>
              <p className="alata font-[400] 2xl:text-[25px] 2xl:leading-[37px] 2xl:w-[695px] xl:text-[16px] xl:leading-[28px] xl:w-[450px] lg:text-[12px] lg:leading-[18px] lg:w-[340px] text-[12px] leading-[20px] 2xl:mt-[25px] xl:mt-[15px] mt-[5px]">
                We understand the importance of maintaining the highest
                standards of food safety and hygiene, and our chef community are
                dedicated to upholding these principles in every dish they
                prepare.
              </p>
            </div>
            <div className="mx-10 sm:w-1/2 flex sm:mx-auto my-5 lg:my-0 lg:flex-none">
              <Image
                alt="image"
                src={eightPoster}
                className="2xl:w-[724px] 2xl:h-[507px] w-auto h-auto mx-auto rounded-[15px] meightPoster"
              />{" "}
            </div>
          </div>
        </div>
        <div className="bg-[#F5C7C7] 2xl:py-[115px] xl:py-[80px] py-[50px]">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  items-center mx-auto mnavbar">
            <div>
              <h1 className="alata font-[400] mx-auto 2xl:text-[25px] 2xl:leading-[45px] xl:text-[16px] xl:leading-[30px] text-[12px] leading-[20px] 2xl:w-[831px] xl:w-[550px] w-[400px] text-center">
                Each of our community chefs meet our thorough onboarding
                criteria in order to sell their dishes on authentichef.
              </h1>
            </div>
            <div className="2xl:mt-[60px] xl:mt-[40px] mt-[20px] flex justify-between">
              <div className="2xl:w-[364px] xl:w-[250px] w-[180px] ">
                <Image
                  src={hygiene}
                  className="2xl:w-[62px] 2xl:h-[62px] xl:w-[45px] xl:h-[45px] w-[30px] h-[30px] mfoodseftyimg"
                />
                <h1 className="become-no 2xl:mt-[20px] xl:mt-[12px] mt-[8px]">
                  Food Hygiene Rating:
                </h1>
                <p className="seven_p2 2xl:mt-[15px] xl:mt-[10px] mt-[5px] 2xl:w-[320px] xl:w-[210px] w-[180px]">
                  Approved by their local council and strive for the highest
                  food rating score of 5 stars
                </p>
              </div>
              <div className="2xl:w-[364px] xl:w-[250px] w-[180px] ">
                <Image
                  src={expertise}
                  className="2xl:w-[62px] 2xl:h-[62px] xl:w-[45px] xl:h-[45px] w-[30px] h-[30px] mfoodseftyimg"
                />
                <h1 className="become-no 2xl:mt-[20px] xl:mt-[12px] mt-[8px]">
                  Certified Expertise:
                </h1>
                <p className="seven_p2 2xl:mt-[15px] xl:mt-[10px] mt-[5px] 2xl:w-[330px] xl:w-[205px] w-[180px] mfoodsefty">
                  Each chef holds a minimum level 2 food safety and hygiene
                  certification
                </p>
              </div>
              <div className="2xl:w-[364px] xl:w-[250px] w-[180px] ">
                <Image
                  src={Ingredients}
                  className="2xl:w-[62px] 2xl:h-[62px] xl:w-[45px] xl:h-[45px] w-[30px] h-[30px] mfoodseftyimg"
                />
                <h1 className="become-no 2xl:mt-[20px] xl:mt-[12px] mt-[8px]">
                  Quality Ingredients:
                </h1>
                <p className="seven_p2 2xl:mt-[15px] xl:mt-[10px] mt-[5px] 2xl:w-[315px] xl:w-[210px] w-[180px]">
                  We believe that the foundation of a great dish lies in the
                  quality of its ingredients. Thats why our chefs select the
                  finest specialty ingredients available, locking in flavour
                </p>
              </div>
              <div className="2xl:w-[364px] xl:w-[250px] w-[180px] ">
                <Image
                  src={Techniques}
                  className="2xl:w-[62px] 2xl:h-[62px] xl:w-[45px] xl:h-[45px] w-[30px] h-[30px] mfoodseftyimg"
                />
                <h1 className="become-no 2xl:mt-[20px] xl:mt-[12px] mt-[8px]">
                  Traditional Cooking Techniques:
                </h1>
                <p className="seven_p2 2xl:mt-[15px] xl:mt-[10px] mt-[5px] 2xl:w-[315px] xl:w-[210px] w-[180px]">
                  While we embrace innovation and creativity in our dishes, our
                  chefs hold true to their traditional cooking techniques to
                  provide an authentic experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex items-center mx-auto flex-col-reverse lg:flex-row mnavbar 2xl:py-[115px] xl:py-[80px] py-[50px]">
          <h1 className="alata font-[400] mx-auto 2xl:text-[25px] 2xl:leading-[45px] xl:text-[16px] xl:leading-[30px] text-[12px] leading-[20px] 2xl:w-[831px] xl:w-[550px] w-[400px] text-center">
            We value your feedback and would love to hear about your experience.
            Please reach out to us support@authentichef.com
          </h1>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default FoodSefty;
