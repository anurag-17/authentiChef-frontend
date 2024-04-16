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
                          <Image
                            src={chefdishes}
                            className="w-[20px] h-[20px]"
                          />
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

          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px] mnavbar">
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
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px] 2xl:pt-[100px] xl:pt-[60px] pt-[40px] 2xl:pb-[125px] xl:pb-[80px] pb-[60px] mnavbar">
              <div className="flex justify-between items-center w-full">
                <div className="mbecome-img">
                  <Image
                    src={banner1}
                    width={920}
                    height={507}
                    className="2xl:w-full h-auto rounded-[15px] xl:w-[630px] w-[490px] "
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
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1 mbecomeimg "
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
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1 mbecomeimgg"
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
                    className="2xl:w-[94px] 2xl:h-[94px] xl:w-[60px]  xl:h-[60px] w-[45px] h-[45px] mb-1 mbecomeimg"
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

          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between items-center mx-auto 2xl:mt-[90px] xl:mb-[80px] xl:mt-[80px] mt-[50px] mb-[50px] mnavbar">
            <div className="2xl:w-[842px] xl:w-[600px] w-[550px]">
              <h1 className="alata font-[400] 2xl:text-[55px] 2xl:leading-[75px] xl:text-[37px] xl:leading-[45px] lg:text-[29px] lg:leading-[35px] mcosider">
                Are you considering starting your own food business from home?
              </h1>
              <p className=" alata font-[400] 2xl:text-[36px] 2xl:leading-[55px] xl:text-[23px] xl:leading-[35px] text-[19px] leading-[14px] 2xl:mt-[55px] xl:mt-[20px] mt-[15px] mservice">
                Our Services to get you started and growing!
              </p>
              <div className="bg-[#FFE8E8] 2xl:w-[761px] xl:w-[510px] w-[400px] px-[20px] 2xl:py-[30px] xl:py-[20px] py-[17px] mt-[15px] xl:mt-[25px] mboxs">
                <div className="flex 2xl:gap-[25px] xl:gap-[15px] gap-[10px]">
                  <div>
                    <h1 className="become-no">01</h1>
                  </div>
                  <div>
                    <h1 className="become-head">Registration Assistance</h1>
                    <p className="become-para 2xl:mt-[15px] xl:mt-[10px] mt-[5px]">
                      Well expertly guide you through the registration process
                      with your local council, ensuring a smooth start for your
                      food business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE8E8] 2xl:w-[761px] xl:w-[510px] w-[400px] px-[20px] 2xl:py-[30px] xl:py-[20px] py-[17px] mt-[15px] xl:mt-[25px] mboxs">
                <div className="flex 2xl:gap-[25px] xl:gap-[15px] gap-[10px]">
                  <div>
                    <h1 className="become-no">02</h1>
                  </div>
                  <div>
                    <h1 className="become-head">
                      Food Safety and Hygiene Certification
                    </h1>
                    <p className="become-para 2xl:mt-[15px] xl:mt-[10px] mt-[5px]">
                      We’ll assist you to obtaining the necessary certifications
                      to comply with UK Food Safety and Hygiene Laws. Our
                      guidance will help you achieve the highest food rating
                      score, ensuring full compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE8E8] 2xl:w-[761px] xl:w-[510px] w-[400px] px-[20px] 2xl:py-[30px] xl:py-[20px] py-[17px] mt-[15px] xl:mt-[25px] mboxs">
                <div className="flex 2xl:gap-[25px] xl:gap-[15px] gap-[10px]">
                  <div>
                    <h1 className="become-no">03</h1>
                  </div>
                  <div>
                    <h1 className="become-head">Chef Onboarding Support</h1>
                    <p className="become-para 2xl:mt-[15px] xl:mt-[10px] mt-[5px]">
                      We’re here to support passionate chefs like you in sharing
                      your cultural heritage through your dishes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE8E8] 2xl:w-[761px] xl:w-[510px] w-[400px] px-[20px] 2xl:py-[30px] xl:py-[20px] py-[17px] mt-[15px] xl:mt-[25px] mboxs">
                <div className="flex 2xl:gap-[25px] xl:gap-[15px] gap-[10px]">
                  <div>
                    <h1 className="become-no">04</h1>
                  </div>
                  <div>
                    <h1 className="become-head">UK Nationwide Delivery</h1>
                    <p className="become-para 2xl:mt-[15px] xl:mt-[10px] mt-[5px]">
                      Leave the logistics to us! We’ll handle the delivery of
                      your dishes to customers all across the UK
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE8E8] 2xl:w-[761px] xl:w-[510px] w-[400px] px-[20px] 2xl:py-[30px] xl:py-[20px] py-[17px] mt-[15px] xl:mt-[25px] mboxs">
                <div className="flex 2xl:gap-[25px] xl:gap-[15px] gap-[10px]">
                  <div>
                    <h1 className="become-no">05</h1>
                  </div>
                  <div>
                    <h1 className="become-head">Ongoing Support</h1>
                    <p className="become-para 2xl:mt-[15px] xl:mt-[10px] mt-[5px]">
                      Our commitment doesn’t end with delivery. We provide
                      continuous sales and marketing promotion to fuel the
                      long-term growth of your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" 2xl:w-[711.95px] 2xl:h-[1296px]  xl:w-[470px] w-[400px] flex items-center mbanner2">
              <Image src={banner2} className="rounded-[15px]" />
            </div>
          </div>

          <div className="bg-[#FFE2E2] 2xl:py-[105px] xl:py-[70px] py-[50px] w-full mthirdbox">
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] text-center mx-auto mnavbar">
              <h1 className="alata font-[400] 2xl:text-[55px] 2xl:leading-[75px] xl:text-[30px] xl:leading-[45px] lg:text-[28px] lg:leading-[38px]">
                Ready to Get Started?
              </h1>
              <p className="alata font-[400] 2xl:text-[24px] 2xl:leading-[34px] xl:text-[18px] xl:leading-[24px] lg:text-[14px] lg:leading-[20px] 2xl:mt-[25px] xl:mt-[10px]">
                Contact us today to turn your passion for cooking into a
                thriving business!
              </p>
            </div>
          </div>

          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between items-center mx-auto 2xl:mt-[175px] 2xl:mb-[180px]  xl:mt-[100px] xl:mb-[80px] mt-[50px] mb-[50px] m3box">
            <div className="2xl:w-[686]">
              <Image
                src={banner3}
                className="rounded-[15px] 2xl:w-[686px] 2xl:h-[628px] xl:w-[465px]  w-[380px] h-auto mbanner3"
              />
            </div>
            <div className="2xl:w-[720px]  xl:w-[485px] w-[350px] mbox3">
              <h1 className="third_head">Join the Chef Waiting List</h1>
              <div className="flex 2xl:gap-[20px] xl:gap-[15px] gap-[10px]">
                <div className="2xl:w-[375px] xl:w-[280px] w-[200px]">
                  <input placeholder="First Name" className="profile_input" />
                </div>
                <div className="2xl:w-[375px] xl:w-[280px] w-[200px]">
                  <input placeholder="Surname" className="profile_input" />
                </div>
              </div>
              <div className="w-full 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
                <input placeholder="Phone" className="profile_input" />
              </div>
              <div className="w-full 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
                <input placeholder="Email" className="profile_input" />
              </div>
              <div className="w-full 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
                <input placeholder="Post Code" className="profile_input" />
              </div>
              <div className="2xl:mt-[30px] xl:mt-[15px] mt-[10px]">
                <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[120px] 2xl:h-[56px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] text-[10px] xl:w-[80px] xl:py-[8px]  lg:py-[6px] lg:px-4 px-3 py-1 hover:bg-[#7e2727]  ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default BecomeChef;
