import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import sidemanu from "../../../public/images/side-menu.svg";

import logo from "../../../public/images/logo.svg";
import fb from "../../../public/images/fb.svg";
import linkedin from "../../../public/images/in.svg";
import insta from "../../../public/images/insta.svg";
import twiter from "../../../public/images/twiter.svg";
import google from "../../../public/images/google.svg";
import foodPoster from "../../../public/images/foodPoster.svg";
import chef from "../../../public/images/chef.svg";
import img1 from "../../../public/images/fi_4767107.svg";
import img2 from "../../../public/images/fi_4718655.svg";
import img3 from "../../../public/images/fi_11493268.svg";
import img4 from "../../../public/images/Group.svg";
import Link from "next/link";
import Rectangle1 from "../../../public/images/Rectangle162.svg";
import Rectangle2 from "../../../public/images/Rectangle263.svg";
import Rectangle3 from "../../../public/images/Rectangle364.svg";
import Rectangle4 from "../../../public/images/Rectangle465.svg";
import addCart from "../../../public/images/addCart.svg";
import group from "../../../public/images/Group211.svg";
import thumsUp from "../../../public/images/thumsUp.svg";
import Rectangle5 from "../../../public/images/Rectangle145.svg";
import Rectangle6 from "../../../public/images/Rectangle146.svg";
import Rectangle7 from "../../../public/images/Rectangle147.svg";
import Rectangle8 from "../../../public/images/Rectangle151.svg";
import Rectangle9 from "../../../public/images/Rectangle152.svg";
import Rectangle10 from "../../../public/images/Rectangle153.svg";
import emptyCart from "../../../public/images/emptyCart.svg";

const data = [
  {
    id: "1",
    image: Rectangle1,
    title: "Spaghetti",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: Rectangle2,
    title: "Cheese, honey, omelette sandwich",
    percentage: "93% (45)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: Rectangle3,
    title: "Chicken kabab",
    percentage: "95% (23)",
    price: "Starting at £10.50",
    image2: group,
  },
  {
    id: "4",
    image: Rectangle4,
    title: "Paneer butter masala",
    percentage: "95% (23)",
    price: "£8.50 ",
    image2: addCart,
  },
  {
    id: "5",
    image: Rectangle4,
    title: "Salad",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
];
const data2 = [
  {
    id: "1",
    image: Rectangle5,
    title: "Bhindi Sabjhi",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "2",
    image: Rectangle6,
    title: "Alloo Sabhji",
    percentage: "93% (45)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "3",
    image: Rectangle7,
    title: "Veg Pulav",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "4",
    image: Rectangle8,
    title: "Palak Paneer",
    percentage: "95% (23)",
    price: "£8.50 ",
    image2: addCart,
  },
  {
    id: "5",
    image: Rectangle9,
    title: "Paneer butter masala",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
  {
    id: "5",
    image: Rectangle10,
    title: "Alloo Sabhji",
    percentage: "95% (23)",
    price: "£8.50",
    image2: addCart,
  },
];

const Products = () => {
  return (
    <>
      <section className="bg-[#EFEFEF]">
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
            <div className="w-1/3">
              <Image
                src={sidemanu}
                className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px]"
              />
            </div>
            <div className="w-1/3 ">
              <Image src={logo} className="nav_logo" />
            </div>
            <div className="flex md:gap-7  gap-2">
              <button className="nav_login">Welcome</button>
              
            </div>
          </div>
        </nav>

        {/* ===================First================== */}
        <div className="w-full 2xl:h-[149px] xl:h-[75px] lg:h-[60px] flex justify-center items-center bg-[#F5F5F5]">
          <div className="">
            <h1 className="fourth_title text-center">Chef Dishes</h1>
            <p className="alata font-[400] text-[#828282] 2xl:text-[16px] 2xl:leading-[30px] xl:text-[12px] xl:leading-[22px] lg:text-[12px] lg:leading-[18px] text-[12px] leading-[18px] text-center mt-1 2xl:mt-2 ">
              Home - Chef Dishes
            </p>
          </div>
        </div>

        <div className="bg-[#EFEFEF] flex justify-between">
          <div>
            {/* ===================second================== */}

            <div className="2xl:ml-[215px] xl:ml-[130px] lg:ml-[95px] flex justify-between">
              <div className="2xl:w-[1170px]  xl:w-[800px] lg:w-[600px] ">
                <Image
                  src={foodPoster}
                  className="2xl:w-[1167px] 2xl:h-[482px]"
                />
                <div className="flex 2xl:my-12 2xl:gap-8">
                  <div>
                    <Image
                      src={chef}
                      className="2xl:w-[154px] 2xl:h-[154px] mx-auto xl:w-[100px] xl:h-[100px] lg:w-[120px] lg:h-[120px] w-[50px] h-[50px]"
                    />
                  </div>
                  <div className="">
                    <h1 className=" alata font-[400] 2xl:text-[35px] 2xl:leading-[45px] 2xl:my-1 xl:text-[20px] xl:leading-[30px] xl:my-0 xl:mt-5 lg:text-[16px] lg:leading-[25px] lg:mt-6 sm:text-[25px] sm:leading-[30px] my-1 text-[20px] leading-[30px]">
                      Shef Radha’s Menu
                    </h1>
                    <p className="alata font-[400] text-[#555555] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[22px] lg:text-[12px] lg:leading-[18px]">
                      Punjabi · North Indian · South Indian · Indian ·
                      Vegetarian
                    </p>
                    <div className="flex gap-2 my-5">
                      <div className="flex gap-1  justify-around items-center bg-[#F3F3F3] 2xl:w-[197px] 2xl:h-[37px]">
                        <Image
                          src={img1}
                          className="2xl:w-[17px] 2xl:h-[17px] w-[15px] h-[15px]"
                        />
                        <p className="alata font-[400] text-[#000000] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[24px]">1.1k+</p>
                        <p className="alata font-[400] text-[#838383] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[24px]">Meals prepared</p>
                      </div>
                      <div className="flex justify-around items-center bg-[#F3F3F3] 2xl:w-[197px] 2xl:h-[37px] h-[37px] w-[197px]">
                        <Image
                          src={img2}
                          className="2xl:w-[17px] 2xl:h-[17px]"
                        />
                        <p className="alata font-[400] text-[#000000] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[24px]">Certified</p>
                        <p className="alata font-[400] text-[#838383] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[14px] xl:leading-[24px]">Food safety</p>
                      </div>
                    </div>
                    <p className=" alata font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[24px] 2xl:w-[870px] ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================Third================== */}
            <div className="2xl:ml-[215px] xl:ml-[130px] lg:ml-[95px] my-10">
              <h1 className="alata font-[400] text-[#000] 2xl:text-[14px] 2xl:leading-[24px]">
                Browse By Meal Type
              </h1>
              <div className="flex gap-5 2xl:my-5">
                <div className=" bg-[#F3F3F3] rounded-[6px] 2xl:w-[166px] 2xl:h-[97px] flex justify-center items-center">
                  <div>
                    <Image
                      src={img4}
                      className="2xl:w-[18px] 2xl:h-[17.18px] mx-auto"
                    />
                    <h1 className="2xl:mt-3 alata font-[400] text-[#000] 2xl:text-[16px] 2xl:leading-[24px]">
                      Popular
                    </h1>
                  </div>
                </div>
                <div className=" bg-[#F3F3F3] rounded-[6px] 2xl:w-[166px] 2xl:h-[97px] flex justify-center items-center">
                  <div>
                    <Image
                      src={img3}
                      className="2xl:w-[18px] 2xl:h-[17.18px] mx-auto"
                    />
                    <h1 className="2xl:mt-3 alata font-[400] text-[#000] 2xl:text-[16px] 2xl:leading-[24px]">
                      Mains
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================Fourth================== */}

            <div className="2xl:ml-[215px] xl:ml-[130px] lg:ml-[95px] my-20">
              <h1 className="alata font-[400] text-[#111] 2xl:my-10 2xl:text-[45px] 2xl:leading-[55px]  xl:text-[35px] xl:leading-[40px] lg:text-[22px] lg:leading-[30px]">
                Popular Dishes
              </h1>

              <div className="flex justify-between 2xl:w-[1170px]  xl:w-[800px] lg:w-[600px]">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white w-[216px] h-[341px] relative  rounded-[5.8px] "
                  >
                    <Image src={item.image} alt={item.title} className="" />
                    <div className="p-2">
                      <h1 className="alata font-[400] text-[#000000] 2xl:my-1 2xl:text-[16px] 2xl:leading-[20px]  xl:text-[12px] xl:leading-[18px] lg:text-[10px] lg:leading-[16px]">
                        {item.title}
                      </h1>
                      <div className="flex justify-center 2xl:my-3 bg-[#FFE7E7] rounded-[4px] gap-1 items-center 2xl:w-[89px] 2xl:h-[26px]">
                        <Image
                          src={thumsUp}
                          className="2xl:w-[14px] 2xl:h-[14px]"
                        />
                        <p className="alata font-[400] text-[#464646] 2xl:text-[12px] 2xl:leading-[20px]">
                          {item.percentage}
                        </p>
                      </div>
                      <div className="absolute w-full bottom-0 flex justify-between items-center mb-2">
                        <p className="alata font-[400] text-[#000] 2xl:text-[16px] 2xl:leading-[24px]">
                          {item.price}
                        </p>
                        <Image
                          src={item.image2}
                          alt={item.title}
                          className="absolute right-5 2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================Five================== */}

            <div className="2xl:ml-[215px] xl:ml-[130px] lg:ml-[95px] my-20">
              <h1 className="alata font-[400] text-[#111] 2xl:my-5 2xl:text-[45px] 2xl:leading-[55px]  xl:text-[35px] xl:leading-[40px] lg:text-[22px] lg:leading-[30px]">
                Wednesday’s Main Items
              </h1>
              <div className="bg-[#EFEFEF] flex flex-wrap justify-between 2xl:w-[1170px]  xl:w-[800px] lg:w-[600px]">
                {data2.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white  my-5 w-[365.5px] h-[503px] relative  rounded-[9.8px] "
                  >
                    {" "}
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-[365.5px] h-[293.97px]"
                    />
                    <div className="p-4">
                      <h1 className="alata font-[400] text-[#000000] 2xl:my-1 2xl:text-[20px] 2xl:leading-[20px]  xl:text-[12px] xl:leading-[18px] lg:text-[10px] lg:leading-[16px]">
                        {item.title}
                      </h1>
                      <div className="flex justify-center 2xl:my-3 bg-[#FFE7E7] rounded-[4px] gap-1 items-center 2xl:w-[105px] 2xl:h-[34px]">
                        <Image
                          src={thumsUp}
                          className="2xl:w-[18p.27x] 2xl:h-[18p.27x]"
                        />
                        <p className="alata font-[400] text-[#464646] 2xl:text-[13px] 2xl:leading-[20px]">
                          {item.percentage}
                        </p>
                      </div>
                      <hr className="border-[1.69px] 2xl:mt-12" />
                      <div className="absolute w-full bottom-0 flex justify-between items-center mb-4">
                        <p className="alata font-[400] text-[#000] 2xl:text-[20px] 2xl:leading-[30px]">
                          {item.price}
                        </p>
                        <Image
                          src={item.image2}
                          alt={item.title}
                          className="absolute right-8 2xl:w-[40px] 2xl:h-[40px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white 2xl:w-[505px] xl:w-[350px] lg:w-[290px]  rounded-s-[15px]">
            <div className="p-5">
              <h1 className="alata font-[400] text-[#111] 2xl:my-0 2xl:text-[22px] 2xl:leading-[32px]  xl:text-[18px] xl:leading-[24px] lg:text-[14px] lg:leading-[20px]">
                My cart
              </h1>

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
          </div>
        </div>

        {/* ===================Footer================== */}
        <footer className="bg-[#F6F6F6] flex justify-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] 2xl:mt-[100px] xl:mt-[50px] lg:mt-[35px]">
            <div className="flex justify-between">
              <div className="">
                <div>
                  <h1 className="footer_heading">Quick Links</h1>
                  <p className="footer_text">Our Story</p>
                  <p className="footer_text">Food Safety</p>
                  <p className="footer_text">Help Center</p>
                  <p className="footer_text">Global Cuisines</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Resources</h1>
                  <p className="footer_text">
                    Become a chef
                    <p className="footer_text">Browse more chef</p>
                    <p className="footer_text">Homemade food delivery</p>
                  </p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Other Links</h1>
                  <p className="footer_text">Log In</p>
                  <p className="footer_text">Sign Up</p>
                  <p className="footer_text">Privacy Policy</p>
                  <p className="footer_text">Terms of Service</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Connect with us</h1>
                  <div className="flex gap-2">
                    <div>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <Image src={fb} className="2xl:w-[30px] 2xl:h-[30px]" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/home"
                        target="_blank"
                      >
                        <Image
                          src={linkedin}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.instagram.com/accounts/login/"
                        target="_blank"
                      >
                        <Image
                          src={insta}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.co.in%2F%3Fpli%3D1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1375757007%3A1709800522255495&theme=glif"
                        target="_blank"
                      >
                        <Image
                          src={google}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://twitter.com/i/flow/login"
                        target="_blank"
                      >
                        <Image
                          src={twiter}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="2xl:mt-[56px] xl:mt-[25px] lg:mt-[15px]" />
            <div>
              <div className="flex justify-between 2xl:my-5 xl:my-3 lg:my-2">
                <h1 className="footer_text_b">
                  © 2024 Authentichef | All Rights Reserved
                </h1>
                <h1 className="footer_text_b">Developed by ControlF5</h1>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Products), { ssr: false });
