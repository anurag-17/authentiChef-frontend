"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import emptyCart from "../../../public/images/emptyCart.svg";
import Link from "next/link";
import Image from "next/image";
import sidemanu from "../../../public/images/side-menu.svg";
import logo from "../../../public/images/logo.svg";
import cuisineindia from "../assets/cuisine-india.png";
import cuisineamerican from "../assets/cuisine-american.png";
import cuisinemexican from "../assets/cuisine-mexican.png";
import cuisinemediterranean from "../assets/cuisine-mediterranean.png";
import cuisineitalian from "../assets/cuisine-italian.png";
import cuisinemiddleEastern from "../assets/cuisine-middleEastern.png";
import cuisinesoutheast from "../assets/cuisine-southeast-asian.png";
import punjabithali1 from "./assets/punjabi-thali1.png";
import palakpaneer1 from "./assets/palak-paneer1.png";
import sarsoda1 from "./assets/sarsoda1.png";
import butterpaneer1 from "./assets/butterpaneer1.png";
import punjabithali2 from "./assets/punjabi-thali2.png";
import palakpaneer2 from "./assets/palak-paneer2.png";
import sarsoda2 from "./assets/sarsoda2.png";
import butterpaneer2 from "./assets/butterpaneer2.png";
import punjabithali3 from "./assets/punjabi-thali3.png";
import palakpaneer3 from "./assets/palak-paneer3.png";
import sarsoda3 from "./assets/sarsoda3.png";
import butterpaneer3 from "./assets/butterpaneer3.png";
import punjabithali4 from "./assets/punjabi-thali4.png";
import palakpaneer4 from "./assets/palak-paneer4.png";
import sarsoda4 from "./assets/sarsoda4.png";
import butterpaneer4 from "./assets/butterpaneer4.png";
import addCart from "../../../public/images/addCart.svg";
import thumsUp from "../../../public/images/thumsUp.svg";
import p1 from "../assets/ellipse119.png";
import p2 from "../assets/ellipse220.png";
import p3 from "../assets/ellipse321.png";
import p4 from "../assets/ellipse422.png";
import vegetarian from "./assets/vegetarian.svg";
import vegan from "./assets/vegan.svg";
import popimg from "./assets/pop-img.png";
import spicemedium from "./assets/spice-medium.svg";
import spicehot from "./assets/spice-hot.svg";
import review1 from "../assets/testimonials-chef-mayank.png";
import review2 from "../assets/testimonials-chef-rohit.png";
import review3 from "../assets/testimonials-chef-shubham.png";
import Footer from "../footer";
import plus from "../../../public/images/plus.svg";
import minus from "../../../public/images/minus.svg";
import nonveg from "./assets/non-vag.svg";
import glutenfree from "./assets/gluten-free.svg";
import organic from "./assets/organic.svg";
import dairyfree from "./assets/dairy-free.svg";
import { useCart } from "../create-context/cart-context";
import { CartProvider } from "../create-context/cart-context";
import sidelogo from "../assets/sidebar-logo.svg";
import aboutauthentichef from "../assets/about-authentichef.svg";
import beacomechef from "../assets/become-a-chef.svg";
import chefdishes from "../assets/chef-dishes.svg";
import exploredish from "../assets/explore-dishes.svg";
import beg from "../assets/beg.svg";

const data2 = [
  {
    id: "1",
    image: punjabithali1,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: palakpaneer1,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: sarsoda1,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "4",
    image: butterpaneer1,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },

  {
    id: "5",
    image: punjabithali2,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "6",
    image: palakpaneer2,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "7",
    image: sarsoda2,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "8",
    image: butterpaneer2,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },

  {
    id: "9",
    image: punjabithali3,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "10",
    image: palakpaneer3,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "11",
    image: sarsoda3,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "12",
    image: butterpaneer3,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },

  {
    id: "13",
    image: punjabithali4,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "14",
    image: palakpaneer4,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "15",
    image: sarsoda4,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "16",
    image: butterpaneer4,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },
];

const ExploreDishes = ({ item }) => {
  const { addToCart } = useCart();
  const { cart, removeFromCart, clearCart } = useCart();
  const [count, setCount] = useState(0);
  let subtotalPrice = 0;

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
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12  mnavbar-h">
          <div className="mnavbar 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
            <div className="w-1/3">
              {/* =======Side Drawer======= */}

              <div className="drawer z-50">
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
                      <Link href="/become-chef">
                        <Image
                          src={beacomechef}
                          className="w-[20px] h-[20px]"
                        />
                        Become a Chef
                      </Link>
                    </li>
                    <li>
                      <Link href="/chef-dishes">
                        <Image src={chefdishes} className="w-[20px] h-[20px]" />
                        Chef Dishes
                      </Link>
                    </li>
                    <li>
                      <Link href="/explore-dishes">
                        <Image
                          src={exploredish}
                          className="w-[20px] h-[20px]"
                        />
                        Explore Dishes
                      </Link>
                    </li>
                    <li>
                      <Link href="/setting">
                        <Image
                          src={exploredish}
                          className="w-[20px] h-[20px]"
                        />
                        Setting
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <a href="">
                <Image src={logo} alt="logo" className="nav_logo" />
              </a>
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

        <div className="flex justify-center 2xl:my-20 xl:my-14 lg:my-8 hidden lg:block mnavbar 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] mx-auto">
          <div className="">
            <div className="mnavbar 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto">
              <div className="">
                <h1 className="third_head">Select Cuisine</h1>
              </div>
              <div className="flex justify-between 2xl:gap-10 xl:gap-5 lg:gap-4 items-center">
                <div className="flex 2xl:gap-5 xl:gap-3 lg:gap-2">
                  <div className="">
                    <select
                      id="cuisines"
                      className="2xl:w-[153px] third_select"
                    >
                      <option disabled selected>
                        All Cuisines
                      </option>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                  {/* <details className="dropdown w-full">
                    <summary className="m-1 btn"> All Cuisines</summary>
                    <ul className="z-50 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full ">
                      <li>
                        <Link>Item 1</a>
                      </li>
                      <li>
                        <Link>Item 2</a>
                      </li>
                    </ul>
                  </details> */}

                  <div className="">
                    <select id="dietary" className="2xl:w-[126px] third_select">
                      <option disabled selected>
                        Dietary
                      </option>
                      <option>d</option>
                      <option>e</option>
                      <option>f</option>
                    </select>
                  </div>

                  <div className="">
                    <select
                      id="moreFilters"
                      className="2xl:w-[143px] third_select"
                    >
                      <option disabled selected>
                        More filters
                      </option>
                      <option>x</option>
                      <option>y</option>
                      <option>z</option>
                    </select>
                  </div>

                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[13px] h-[13px] absolute 2xl:right-3 2xl:top-[16px] xl:right-3 xl:top-[10px] lg:right-3 lg:top-[5px] lg:text-[8px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    <input
                      type=" search"
                      placeholder="Search"
                      className=" third_input text-[#F38181]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center 2xl:my-10 xl:my-6 lg:my-5">
              <div className="carousel  2xl:gap-[40px] xl:gap-7 lg:gap-5">
                <div className="">
                  <Image
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg "
                    src={cuisineindia}
                    alt="cuisine-india"
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Indian
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-american"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisineamerican}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    American
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-mexican"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisinemexican}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Mexican
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-mediterranean"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisinemediterranean}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Mediterranean
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-italian"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisineitalian}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Italian
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-middleEastern"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisinemiddleEastern}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Middle Eastern
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-middleEastern"
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] mcusinimg"
                    src={cuisinesoutheast}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px] xl:text-[14px] xl:leading-[20px] xl:my-3
                  lg:text-[12px] lg:leading-[18px] lg:my-2  mx-auto text-center"
                  >
                    Southeast Asian
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:my-[120px] xl:my-[60px] my-[50px] bg-[#F9F2F2]">
          <div className="mnavbar 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:py-[120px] xl:py-[60px] py-[40px] mx-auto">
            <div className="flex justify-center">
              <div>
                <h1 className="third_head text-center">Explore Dishes</h1>
                <p className="seven_p 2xl:w-[980px] xl:w-[600px] lg:w-[460px] w-[460px]">
                  Browse world of authentic homemade dishes by our independent
                  chef community. More chefs and dishes added every week.
                </p>
              </div>
            </div>
            <div className=" flex flex-wrap justify-between  w-full px-10 md:px-0 mx-auto">
              {data2.map((item) => (
                <div
                  key={item.id}
                  className="  my-5 2xl:w-[345px] 2xl:h-[560px] lg:w-[23%]  md:w-[31%] w-[45%]  relative  rounded-[9.8px] mexploreD "
                >
                  <button
                    className=""
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={345}
                      height={278}
                      className="w-full h-auto 2xl:w-[365.5px] 2xl:h-[278px] rounded-[10px] mexplorimg"
                    />
                  </button>
                  <div className="">
                    <h1 className="alata font-[400] text-[#DB5353] 2xl:my-4 xl:my-3 my-2 2xl:text-[20px] 2xl:leading-[20px]  xl:text-[14px] xl:leading-[18px] lg:text-[10px] lg:leading-[16px] text-[10px]">
                      {item.title}
                    </h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image
                        alt="image"
                        src={item.chefImg}
                        className="four_img2 "
                      />
                      <div>
                        <h1 className="fourth_name ">Chef Radha</h1>
                        <p className="fourth_p text-[#6765EB]">Indian</p>
                      </div>
                    </div>

                    <div className="flex gap-5 2xl:my-[20px] xl:my-[15px] my-[12px]">
                      <button className="four_btn">
                        <Image
                          alt="image"
                          src={vegetarian}
                          className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px] w-[10px] h-auto"
                        />
                        <p className="fourth_day">Vegetarian</p>
                      </button>
                      <button className="four_btn">
                        <Image
                          alt="image"
                          src={vegan}
                          className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px] w-[10px] h-auto"
                        />
                        <p className="fourth_day">Vegan</p>
                      </button>
                    </div>
                    <div className="flex items-center gap-5  2xl:my-[20px] xl:my-[15px] my-[12px]">
                      <h1 className="fourth_p">Spice level</h1>
                      <button className="four_btn">
                        <Image
                          alt="image"
                          src={item.spiceImg}
                          className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px] w-[10px] h-auto"
                        />
                        <p className="fourth_day">Meddium</p>
                      </button>
                    </div>

                    <div className=" w-full bottom-0 flex justify-between items-center  2xl:my-[22px] xl:my-[18px] my-[15px]">
                      <p className="alata font-[400] text-[#000] 2xl:text-[20px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[18px] lg:text-[12px] lg:leading-[16px] text-[12px] leading-[16px] ">
                        Serves 1 (500g){" "}
                        <span className="text-[#DB5353]">£8.50</span>
                      </p>
                      <button
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <div className="drawer-content">
                          {/* Page content here */}
                          <label
                            htmlFor="my-drawer-4"
                            className="drawer-button"
                          >
                            <Image
                              src={item.image2}
                              alt={item.title}
                              className=" 2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] lg:w-[25px] lg:h-[25px] w-[25px] h-[25px]"
                            />
                          </label>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:my-14 xl:my-28 my-10">
          <div className="mnavbar 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]">
            <h1 className="nine_head">Testimonials</h1>
            <p className="nine_p">
              All our chefs have fans raving about their food
            </p>

            <div className="lg:flex justify-around 2xl:my-10 xl:my-8 lg:my-6 my-3">
              <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                <div>
                  <div>
                    <Image
                      alt="chef-mayank"
                      src={review1}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Mayank Jaiswal</p>
                </div>
              </div>
              <div>
                <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                  <div>
                    <Image
                      alt="chef-rohit"
                      src={review2}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Rohit Thakur</p>
                </div>
              </div>
              <div>
                <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                  <div>
                    <Image
                      alt="chef-shubham"
                      src={review3}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Shubham Sharma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
      {/* ===============PopUp=============== */}
      <dialog
        id="my_modal_1"
        className="2xl:w-[1000px] 2xl:h-[939px] xl:w-[720px] w-[600px] h-auto mx-auto rounded-[10px]  my-auto 2xl:px-[40px] 2xl:py-[45px] xl:px-[25px] xl:py-[30px] px-[15px] py-[20px]"
      >
        <button
          onClick={() => document.getElementById("my_modal_1").close()}
          className="absolute right-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] w-[14px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full">
          <div method="dialog">
            <div className="flex 2xl:gap-[60px] xl:gap-[40px] gap-[20px] justify-between">
              <div className="2xl:w-[459px] xl:w-[360px] w-[260px] ">
                <Image src={popimg} className="rounded-[15px]" />
              </div>
              <div className="2xl:w-[400px] xl:w-[359px] w-[300px]">
                <div>
                  <h1 className="pop-head">Chicken kabab</h1>
                  <p className="pop-chef">by Chef Radha</p>
                </div>
                <div className="flex justify-between pop-detail">
                  <h3>Price: £8.50</h3>
                  <h3>Weight: 400g</h3>
                  <h3>Portion Size: Serves 1</h3>
                </div>
                <div className="flex flex-wrap 2xl:gap-[10px] xl:gap-[8px] gap-[6px]  2xl:my-[15px] xl:my-[12px] my-[8px]">
                  <div className="pop">
                    <Image
                      src={nonveg}
                      className="2xl:[18px] xl:w-[14px] w-[12px]"
                    />
                    <h3>Non-Veg</h3>
                  </div>
                  <div className="pop">
                    <Image
                      src={glutenfree}
                      className="2xl:[18px] xl:w-[14px] w-[12px]"
                    />
                    <h3>Gulten Free</h3>
                  </div>{" "}
                  <div className="pop">
                    <Image
                      src={organic}
                      className="2xl:[18px] xl:w-[14px] w-[12px]"
                    />
                    <h3>Organic</h3>
                  </div>{" "}
                  <div className="pop">
                    <Image
                      src={dairyfree}
                      className="2xl:[18px] xl:w-[14px] w-[12px]"
                    />
                    <h3>Dairy Free</h3>
                  </div>{" "}
                  <div className="pop">
                    <Image
                      src={spicemedium}
                      className="2xl:[18px] xl:w-[14px] w-[12px]"
                    />
                    <h3>Medium</h3>
                  </div>
                </div>
                <div className="flex justify-center 2xl:w-[103px] 2xl:h-[39px] xl:w-[60px] xl:h-[22px] lg:w-[50px] lg:h-[20px] border rounded-[5px] 2xl:mt-[25px] xl:mt-[20px] mt-[15px]">
                  {" "}
                  <button
                    className="   text-[#DB5353] rounded-l w-1/3"
                    onClick={() => {
                      handleDecrement();
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
                <div>
                  <button className="pop-btn">Add to basket</button>
                </div>
              </div>
            </div>
            <div className="2xl:my-[15px] xl:my-[10px] my-[8px]">
              <div className="">
                <p className="fourth_p text-[#555555]">Description</p>{" "}
                <p className="fourth_p 2xl:w-[890px] xl:w-[660px] w-[550px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="2xl:my-[20px] xl:my-[12px] my-[10px]">
              <div className="flex justify-between">
                <div>
                  <p className="fourth_p text-[#555555]">Ingredients</p>{" "}
                  <p className="fourth_p ">Chicken, Egg, Tomato, etc</p>
                </div>
                <div className="2xl:w-[578px] xl:w-[430px] w-[360px]">
                  <p className="fourth_p text-[#555555]">
                    Heating instructions
                  </p>{" "}
                  <p className="fourth_p ">
                    As our food is hand-made by our chefs, these reheating
                    instructions are a guide. Check your food is piping hot
                    throughout before serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="2xl:my-[20px] xl:my-[12px] my-[10px]">
              <div className="flex justify-between">
                <div>
                  <p className="fourth_p text-[#555555]">List of Allergens</p>{" "}
                  <p className="fourth_p ">Dish contains i.e Celery,  Egg</p>
                </div>
                <div className="2xl:w-[578px] xl:w-[430px] w-[360px]">
                  <p className="fourth_p text-[#555555]">
                    Best Cooked directly from FROZEN
                  </p>{" "}
                  <p className="fourth_p ">
                    OVEN: Preheat oven to 180°C (Gas Mark 5). Remove lid and any
                    outer packaging. Place on a baking tray at the top of oven
                    for 20 minutes or until piping hot.
                  </p>
                </div>
              </div>
            </div>
            <div className="2xl:my-[20px] xl:my-[12px] my-[10px]">
              <div className="flex justify-between">
                <div>
                  <p className="fourth_p text-[#555555]">Storage</p>{" "}
                  <p className="fourth_p 2xl:w-[270px] xl:w-[200px] w-[160px]">
                    Store immediately in freezer on delivery.
                  </p>
                  <p className="fourth_p ">Keep frozen at -18℃.</p>
                  <p className="fourth_p 2xl:w-[270px] xl:w-[200px] w-[180px]">
                    Should this product defrost, keep refrigerated, heat and eat
                    within 48 hours.
                  </p>
                </div>
                <div className="2xl:w-[578px] xl:w-[430px] w-[360px]">
                  <p className="fourth_p ">
                    MICROWAVE: Remove lid and place loosely on the container.
                    Place on a microwaveable plate and heat on full power for
                    7-8 minutes. Halfway through heating, add 2 tablespoons of
                    water to rice and stir contents together. Re-cover and
                    continue heating. Heat until piping hot and stand for 1
                    minute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* ===============Right drawer=============== */}

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content 2xl:w-[505px] xl:w-[350px] lg:w-[290px] bg-white">
            <div className="bg-white hidden lg:block   rounded-s-[15px]">
              <div className="">
                <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[22px] text-[22px] 2xl:leading-[32px]  xl:text-[18px] xl:leading-[24px] lg:text-[14px] lg:leading-[20px]">
                  My Basket
                </h1>
                {cart.length === 0 ? (
                  <div>
                    <div className="2xl:mt-40">
                      <Image
                        src={emptyCart}
                        className="2xl:w-[268.25px] 2xl:h-[265px] mx-auto"
                      />
                    </div>
                    <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[25px] 2xl:leading-[35px]  xl:text-[20px] xl:leading-[28px] lg:text-[16px] lg:leading-[24px] text-center 2xl:mt-24">
                      Explore a World of Deliciousness
                    </h1>
                    <p className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[16px] 2xl:leading-[26px]  xl:text-[14px] xl:leading-[20px] lg:text-[12px] lg:leading-[18px] text-center">
                      add dishes to your cart now.
                    </p>
                    <div className="flex 2xl:mt-12 xl:mt-6 lg:mt-5 mt-4">
                      <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[221px] 2xl:h-[56px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] xl:px-6 xl:py-[10px] lg:px-3 lg:py-1 px-3 py-1 ">
                        Explore Dishes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    {cart.map((item) => (
                      <div key={item.id}>
                        <div className="flex justify-between items-center 2xl:my-6 my-2">
                          <div className="flex items-center gap-2 2xl:gap-4 xl:h-[70px]">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="2xl:w-[70px] 2xl:h-[70px] xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] rounded-[5.8px]"
                            />
                            <div>
                              <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px]  xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                                {item?.title}
                              </h1>
                              <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px]  xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                                £{item?.price}
                              </h1>
                            </div>
                          </div>
                          <div className="flex justify-center 2xl:w-[103px] 2xl:h-[39px] xl:w-[60px] xl:h-[22px] lg:w-[50px] lg:h-[20px] border rounded-[5px] ">
                            {" "}
                            <button
                              className="   text-[#DB5353] rounded-l w-1/3"
                              onClick={() => {
                                handleDecrement(item?.id);
                                removeFromCart(item.id);
                                alert("Removed from cart");
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
                              onClick={() => handleIncrement(item?.id)}
                            >
                              <Image
                                src={plus}
                                className="2xl:w-[15px] 2xl:h-[15px] xl:w-[10px] xl:h-[10px] lg:w-[8px] lg:h-[8px] mx-auto "
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center mt-20">
                      <div>
                        <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[18px] 2xl:leading-[28px] xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[18px]">
                          {subtotalPrice}
                        </h1>
                      </div>
                      <div>
                        <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[164px] 2xl:h-[56px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] lg:text-[10px] xl:px-6 xl:py-[10px] lg:px-3 lg:py-1 px-3 py-1 ">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Wrapping the component tree with CartProvider */}
      <ExploreDishes />
    </CartProvider>
  );
};
export default dynamic(() => Promise.resolve(App), { ssr: false });
