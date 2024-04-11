"use client";
import React from "react";
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
import spicemedium from "./assets/spice-medium.svg";
import spicehot from "./assets/spice-hot.svg";
import review1 from "../assets/testimonials-chef-mayank.png";
import review2 from "../assets/testimonials-chef-rohit.png";
import review3 from "../assets/testimonials-chef-shubham.png";
import Footer from "../footer";

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
    id: "1",
    image: punjabithali2,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: palakpaneer2,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: sarsoda2,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "4",
    image: butterpaneer2,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },

  {
    id: "1",
    image: punjabithali3,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: palakpaneer3,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: sarsoda3,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "4",
    image: butterpaneer3,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },

  {
    id: "1",
    image: punjabithali4,
    chefImg: p1,
    title: "Punjabi Thali",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: palakpaneer4,
    chefImg: p2,
    title: "Palak Paneer",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: sarsoda4,
    chefImg: p3,
    title: "Sarso da saak makke di roti",
    spiceImg: spicemedium,
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "4",
    image: butterpaneer4,
    chefImg: p4,
    title: "Paneer butter masala",
    spiceImg: spicemedium,
    price: "£8.50 ",
    image2: addCart,
  },
];

const ExploreDishes = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
            <div className="w-1/3">
              <Image
                src={sidemanu}
                alt="menu-icon"
                className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px]"
              />
            </div>
            <div className="w-1/3 ">
              <Image src={logo} alt="logo" className="nav_logo" />
            </div>
            <div className="flex md:gap-7  gap-2">
              <button className="nav_login">Welcome Ajay!</button>
            </div>
          </div>
        </nav>

        <div className="flex justify-center 2xl:my-20 xl:my-14 lg:my-8 hidden lg:block 2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] mx-auto">
          <div className="">
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto">
              <div className="">
                <h1 className="third_head">Select Cuisine</h1>
              </div>
              <div className="flex justify-between 2xl:gap-10 xl:gap-5 lg:gap-4 items-center">
                <div className="flex 2xl:gap-5 xl:gap-3 lg:gap-2">
                  {/* <div className="">
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
                  </div> */}
                  <details className="dropdown w-full">
                    <summary className="m-1 btn"> All Cuisines</summary>
                    <ul className="z-50 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full ">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>

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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px] "
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
                    className="rounded-[5px] 2xl:w-[195px] 2xl:h-[195px] xl:w-[160px] lg:w-[125px]"
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
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:py-[120px] xl:py-[60px] py-[40px] mx-auto">
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
                  className="  my-5 2xl:w-[345px] 2xl:h-[560px] lg:w-[23%]  md:w-[31%] w-[45%]  relative  rounded-[9.8px] "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={345}
                    height={278}
                    className="w-full h-auto 2xl:w-[365.5px] 2xl:h-[278px] rounded-[10px]"
                  />
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
                      // onClick={() => {
                      //   addToCart(item);
                      //   alert("Product Added");
                      // }}
                      >
                        <Image
                          src={item.image2}
                          alt={item.title}
                          className=" mr-8 2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] lg:w-[25px] lg:h-[25px] w-[25px] h-[25px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:my-14 xl:my-28 my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]">
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
    </>
  );
};

export default ExploreDishes;
