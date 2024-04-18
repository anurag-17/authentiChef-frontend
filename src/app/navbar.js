"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/logo.png";
import sidemanu from "../../public/images/side-menu.svg";
import google from "./assets/google.svg";
import fb from "./assets/fb.svg";
import profile from "./assets/profile.svg";
import sidelogo from "./assets/sidebar-logo.svg";
import aboutauthentichef from "./assets/about-authentichef.svg";
import beacomechef from "./assets/become-a-chef.svg";
import faq from "./assets/FAQ.svg";
import exploredish from "./assets/explore-dishes.svg";
import beg from "./assets/beg.svg";
import logout from "../app/assets/logout.svg";

const Navbar = () => {
  return (
    <>
      <section>
        <nav className=" flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 w-full mnavbar-h fixed">
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

            <div className="w-1/3 ">
              <a href="/">
                <Image alt="logo" src={logo} className="nav_logo" />
              </a>
            </div>
            <div className="flex md:gap-7  gap-2">
              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="nav_login1"
              >
                Log In
              </button>
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="nav_signup"
              >
                Sign Up
              </button>
              <button>
                <Image
                  src={beg}
                  className="2xl:w-[28px] xl:w-[20px] w-[16px]"
                />
              </button>
            </div>
          </div>
        </nav>
      </section>

      {/* =======Signup popup======= */}

      <div className="">
        <dialog
          id="my_modal_1"
          className="modal rounded-[10px] 2xl:w-[1000px] 2xl:h-[665px] xl:w-[620px] xl:h-[480px] lg:w-[480px] h-[400px] 2xl:mt-40 xl:mt-24 mt-14 p-0"
        >
          <form method="dialog" className=" w-full h-full mt-0">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex justify-center items-center border w-full 2xl:h-[80px] xl:h-[55px] h-[40px]">
              <button className="absolute right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="2xl:w-9 2xl:h-9 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className="fourth_p">Sign up</h1>
            </div>
            <div className=" my-3 px-[40px]">
              <div className="flex flex-wrap justify-between 2xl:w-[775px] xl:w-[480px] mx-auto ">
                <div className="2xl:mt-[35px] mt-[25px] 2xl:w-[368px] xl:w-[230px] w-[190px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="First Name"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
                <div className="2xl:mt-[35px] mt-[25px] 2xl:w-[368px] xl:w-[230px] w-[190px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Last Name"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
                <div className="2xl:mt-[35px] mt-[25px] 2xl:w-[368px] xl:w-[230px] w-[190px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
                <div className="2xl:mt-[35px] mt-[25px] 2xl:w-[368px] xl:w-[230px] w-[190px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Password"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
              </div>
              <div className="flex">
                <button className="w-full mx-auto alata text-white 2xl:text-[20px] 2xl:w-[368px] xl:w-[230px] lg:w-[190px] xl:text-[16px] text-[12px] rounded-[5px] 2xl:mt-[20px] xl:mt-[15px] mt-[10px] 2xl:h-[60px] xl:h-[40px] lg:h-[32px] text-center bg-[#DB5353]">
                  Create Account
                </button>
              </div>
              <div>
                <h1 className="alata font-[400] 2xl:my-[20px] xl:my-[10px] text-[14px] leading-[26px] text-center">
                  or
                </h1>
              </div>
              <div className="flex 2xl:mt-[20px]">
                <div className="mx-auto  2xl:w-[368px] xl:w-[230px]">
                  <Link
                    href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dmy-activity%26utm_medium%3Dhome%26utm_campaign%26hl%3Den_GB%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1476156200%3A1712751508637500&theme=mn&ddm=0"
                    target="_blank"
                  >
                    <div className=" social_div ">
                      <div className="flex social_btn ">
                        <Image className=" social_img " src={google} />
                        <h1 className="checkoutlable">Continue with Google</h1>
                      </div>
                    </div>
                  </Link>
                  <Link href="https://www.facebook.com/login/" target="_blank">
                    <div className="my-[12px] social_div">
                      <div className="social_btn">
                        <Image className="social_img " src={fb} />
                        <h1 className="checkoutlable">
                          Continue with Facebook
                        </h1>
                      </div>
                    </div>{" "}
                  </Link>
                </div>
              </div>
              <div className="my-[30px]">
                <h1 className="text-[#555555] alata font-[400] text-[14px] leading-[26px] text-center">
                  Browse as Guest
                </h1>
              </div>
            </div>
          </form>
        </dialog>
      </div>

      {/* =======Login======= */}

      <div className="">
        <dialog
          id="my_modal_2"
          className="modal rounded-[10px] 2xl:w-[1000px] 2xl:h-[632px] xl:w-[620px] xl:h-[450px] lg:w-[480px] h-[400px] 2xl:mt-40 xl:mt-24 mt-14 p-0"
        >
          <form method="dialog" className=" mt-0">
            {/* if there is a button in form, it will close the modal */}
            <div className=" ">
              <div className="flex justify-center items-center w-full ">
                <button className="absolute right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="2xl:w-7 2xl:h-7 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h1 className="fourth_p">Login</h1>
              </div>
              <div className="2xl:w-[368px] xl:w-[280px] lg:w-[220px] sm:w-[] w-[]">
                <div className="2xl:mt-[35px] mt-[25px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your mail id"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
                <div className="2xl:mt-[35px] mt-[25px]">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your mail id"
                    className="alata font-[400] login-inputad  w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    // onChange={InputHandler}
                  />
                </div>
                <div className="flex">
                  <button className="w-full mx-auto alata text-white 2xl:text-[20px] 2xl:w-[368px] xl:w-[280px] lg:w-[220px] xl:text-[16px] text-[12px] rounded-[5px] 2xl:mt-[20px] xl:mt-[15px] mt-[15px] 2xl:h-[60px] xl:h-[40px] lg:h-[32px] text-center bg-[#DB5353]">
                    Login
                  </button>
                </div>
                <div>
                  <h1 className="alata font-[400] 2xl:my-[20px] xl:my-[10px] text-[14px] leading-[26px] text-center">
                    or
                  </h1>
                </div>
                {/* <div className="2xl:mt-[20px]">
                <Link
                  href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dmy-activity%26utm_medium%3Dhome%26utm_campaign%26hl%3Den_GB%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1476156200%3A1712751508637500&theme=mn&ddm=0"
                  target="_blank"
                >
                  <div className=" social_div">
                    <div className="flex social_btn ">
                      <Image className=" social_img " src={google} />
                      <h1 className="">Continue with Google</h1>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.facebook.com/login/" target="_blank">
                  <div className="my-[12px] social_div">
                    <div className="social_btn">
                      <Image className="social_img " src={fb} />
                      <h1>Continue with Facebook</h1>
                    </div>
                  </div>{" "}
                </Link>
                <Link href="https://appleid.apple.com/sign-in" target="_blank">
                  <div className="social_div">
                    <div className="social_btn">
                      <Image className="social_img " src={apple} />
                      <h1> Continue with Apple</h1>
                    </div>
                  </div>
                </Link>
              </div> */}
                <div className="my-[30px] flex justify-center">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="nav_login1"
                  >
                    <h1 className="text-[#DB5353] alata font-[400] text-[14px] leading-[26px] text-center mx-auto">
                      Sign Up
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default Navbar;
