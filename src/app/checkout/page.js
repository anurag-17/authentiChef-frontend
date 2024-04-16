"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import Footer from "../footer";
import img from "./assets/checkout-img.png";
import plus from "../../../public/images/plus.svg";
import minus from "../../../public/images/minus.svg";
import sidelogo from "../assets/sidebar-logo.svg";
import aboutauthentichef from "../assets/about-authentichef.svg";
import beacomechef from "../assets/become-a-chef.svg";
import chefdishes from "../assets/chef-dishes.svg";
import exploredish from "../assets/explore-dishes.svg";
import beg from "../assets/beg.svg";

const Checkout = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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
        <div className="flex justify-center bg-[#F5F5F5] 2xl:h-[90px] xl:h-[60px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex 2xl:gap-[15px] xl:gap-[10px] gap-[5px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="text-[#828282] w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <Link href="/explore-dishes">
              <button className="alata font-[400] text-[#828282] 2xl:text-[16px] 2xl:leading-[20px] xl:text-[12px] xl:leading-[18px] text-[10px] leading-[16px]">
                Back to Chef’s Menu
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full  md:px-0 items-center 2xl:px-[75px] xl:px-[50px] lg:px-[50px] mx-auto">
            <h1 className="pop-head 2xl:my-[30px] xl:my-[20px] my-[15px]">
              Delivery information
            </h1>
            <div className="flex justify-between 2xl:gap-[55px] xl:gap-[40px] gap-[25px] 2xl:mb-[110px] xl:mb-[70px]">
              <form className="2xl:w-[795px] xl:w-[595px] w-[400px]">
                <div>
                  <label className="checkoutlable">
                    Phone <span className="text-[#DB1414]">*</span>
                  </label>
                  <input
                    placeholder="Enter"
                    className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                  />
                </div>
                <div>
                  <div className="my-[20px]">
                    <label className="checkoutlable ">
                      Shipping Address <span className="text-[#DB1414]">*</span>
                    </label>
                  </div>
                  <div className="form-control flex flex-row gap-5 items-center">
                    <label className="label cursor-pointer w-[15px] h-[15px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-info rounded-none w-[18px] h-[18px]"
                      />
                    </label>
                    <span className="label-text alata font-[400]  2xl:text-[16px] 2xl:leading-[26px] xl:text-[12px] xl:leading-[18px] text-[10px] leading-[16px]">
                      Add a new address
                    </span>
                  </div>
                </div>
                <div className="flex justify-between 2xl:gap-[20px] xl:gap-[15px] gap-[10px] xl:my-[10px] my-[8px] 2xl:my-[15px]">
                  <div className="2xl:w-[388px] w-full">
                    <label className="checkoutlable">
                      House No. <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[388px] w-full">
                    <label className="checkoutlable">
                      House No. <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="checkoutlable">
                    Street Name <span className="text-[#DB1414]">*</span>
                  </label>
                  <input
                    placeholder="Enter"
                    className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                  />
                </div>
                <div className="flex justify-between 2xl:gap-[20px] xl:gap-[15px] gap-[10px] xl:my-[10px] my-[8px] 2xl:my-[15px]">
                  <div className="2xl:w-[251px] xl:w-[180px] w-[140px]">
                    <label className="checkoutlable">
                      Town/City <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[251px] xl:w-[180px] w-[140px]">
                    <label className="checkoutlable">
                      County <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[251px] xl:w-[180px] w-[140px]">
                    <label className="checkoutlable">
                      Postcode <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between 2xl:gap-[20px] xl:gap-[15px] gap-[10px] xl:my-[10px] my-[8px] 2xl:my-[15px]">
                  <div className="2xl:w-[388px] w-full">
                    <label className="checkoutlable">
                      First Name <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[388px] w-full">
                    <label className="checkoutlable">
                      Last Name <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                </div>
                <hr className="2xl:my-[50px] xl:my-[35px] my-[25px]" />
                <div>
                  <h1 className="pop-head 2xl:my-[5px]">Payment Details</h1>
                  <p className="checkoutlable text-[#929292]">
                    Shop securely and conveniently. All transactions are
                    encrypted
                  </p>
                </div>
                <div className="form-control flex flex-row gap-5 items-center 2xl:my-[30px] xl:my-[20px] my-[15px]">
                  <label className="label cursor-pointer w-[15px] h-[15px]">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-info rounded-none w-[18px] h-[18px]"
                    />
                  </label>
                  <span className="label-text alata font-[400]  2xl:text-[16px] 2xl:leading-[26px] xl:text-[12px] xl:leading-[18px] text-[10px] leading-[16px]">
                    New Credit Card
                  </span>
                </div>
                <div className="flex 2xl:gap-[20px] xl:gap-[15px] gap-[10px] xl:my-[10px] my-[8px] 2xl:my-[15px]">
                  <div className="2xl:w-[281px] xl:w-[200px] w-[148px]">
                    <label className="checkoutlable">
                      Card details <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[100px] xl:w-[70px] w-[50px]">
                    <label className="checkoutlable">
                      CVV<span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="flex 2xl:gap-[20px] xl:gap-[15px] gap-[10px] xl:my-[10px] my-[8px] 2xl:my-[15px]">
                  <div className="2xl:w-[149px] xl:w-[200px] w-[148px]">
                    <label className="checkoutlable">
                      Expiration <span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                  <div className="2xl:w-[100px] xl:w-[80px] w-[60px]">
                    <label className="checkoutlable">
                      Zip code<span className="text-[#DB1414]">*</span>
                    </label>
                    <input
                      placeholder="Enter"
                      className="w-full bg-[#F3F3F3] 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                    />
                  </div>
                </div>
                <div className="form-control my-[35px]">
                  <label className="flex gap-5 items-center ">
                    <span className="label-text">Save card</span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-info rounded-none w-[18px] h-[18px]"
                    />
                  </label>
                </div>
              </form>

              <div>
                <div className="2xl:w-[597px] xl:w-[395px] w-[295px] p-5 border 2xl:mt-[35px] max-h-[963px]">
                  <div className="">
                    {/* {cart.map((item) => ( */}
                    <div>
                      <div className="flex justify-between items-center 2xl:my-6 my-2">
                        <div className="flex items-center gap-2 2xl:gap-4 xl:h-[70px]">
                          <Image
                            src={img}
                            // alt={item.name}
                            className="2xl:w-[83px] 2xl:h-[83px] xl:w-[65px] lg:w-[50px] rounded-[10px]"
                          />
                          <div>
                            <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[24px] 2xl:leading-[34px]  xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                              {/* {item?.title}
                               */}
                              Bhindi Sabjhi
                            </h1>
                            <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[20px] 2xl:leading-[28px]  xl:text-[14px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                              {/* £{item?.price} */}
                              £8.50
                            </h1>
                          </div>
                        </div>
                        <div className="flex justify-center 2xl:w-[103px] 2xl:h-[39px] xl:w-[60px] xl:h-[22px] lg:w-[50px] lg:h-[20px] border rounded-[5px] ">
                          {" "}
                          <button
                            className="   text-[#DB5353] rounded-l w-1/3"
                            onClick={() => {
                              handleDecrement();
                              // removeFromCart(item.id);
                              // alert("Removed from cart");
                            }}
                          >
                            <Image
                              src={minus}
                              className="2xl:w-[15px] 2xl:h-[15px] xl:w-[10px] xl:h-[10px] lg:w-[8px] lg:h-[8px] mx-auto "
                            />
                          </button>
                          <p className=" flex mx-auto items-center text-[10px] xl:text-[12px] 2xl:text-[18px]  2xl:leading-[28px] ">
                            {count}
                          </p>
                          <button
                            className="    text-[#DB5353] rounded-r w-1/3"
                            onClick={() => handleIncrement()}
                          >
                            <Image
                              src={plus}
                              className="2xl:w-[15px] 2xl:h-[15px] xl:w-[10px] xl:h-[10px] lg:w-[8px] lg:h-[8px] mx-auto "
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                    <div className="flex justify-between">
                      <h1 className="alata font-[400] text-[#555555] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px]  xl:text-[14px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                        Subtotal
                      </h1>

                      <h1 className="alata font-[400] text-[#555555] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px]  xl:text-[14px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                        {/* £{item?.price} */}
                        £8.50
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mt-20">
                      <div>
                        <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                          {/* {subtotalPrice} */}
                        </h1>
                      </div>
                      <div>
                        {/* <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[164px] 2xl:h-[56px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] lg:text-[10px] xl:px-6 xl:py-[10px] lg:px-3 lg:py-1 px-3 py-1 ">
                        Checkout
                      </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Checkout;
