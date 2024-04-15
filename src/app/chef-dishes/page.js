import React from "react";
import Image from "next/image";
import Link from "next/link";
import sidemanu from "../../../public/images/side-menu.svg";
import logo from "../../../public/images/logo.svg";
import Footer from "../footer";
import punjabithali1 from "./assets/punjabi-thali1.png";
import palakpaneer1 from "./assets/palak-paneer1.png";
import sarsoda1 from "./assets/sarsoda1.png";
import butterpaneer1 from "./assets/butterpaneer1.png";
import p1 from "../assets/ellipse119.png";
import p2 from "../assets/ellipse220.png";
import p3 from "../assets/ellipse321.png";
import p4 from "../assets/ellipse422.png";
import spicemedium from "./assets/spice-medium.svg";
import spicehot from "./assets/spice-hot.svg";
import addCart from "../../../public/images/addCart.svg";
import vegetarian from "./assets/vegetarian.svg";
import vegan from "./assets/vegan.svg";
import chef from "./assets/chef.svg";
import fb from "./assets/fb.svg";
import insta from "./assets/instagram.svg";
import cook from "./assets/fi_4767107.svg";
import cook2 from "./assets/fi_4718655.svg";
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
];

const ChefDishes = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
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
        <div className=" ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:py-[100px] xl:py-[50px] py-[40px] mx-auto">
            <div className="chefDishes-bg rounded-[15px] relative 2xl:h-[529px] xl:h-[360px] h-[280px] 2xl:pt-[295px] xl:pt-[200px] pt-[155px]">
              <div className=" flex gap-5 2xl:w-[1414px] xl:w-[970px] w-[750px]  rounded-[15px] bg-white mx-auto 2xl:p-[50px] xl:p-[20px] p-[15px]">
                <div className="2xl:w-[154px] xl:w-[80px] w-[60px]">
                  <div>
                    <Image src={chef} className="w-full" />
                  </div>
                  <div className="flex justify-center 2xl:gap-5 xl:gap-2 gap-1 2xl:my-[20px] xl:my-[10px] my-[5px]">
                    <Link
                      href="https://www.facebook.com/profile.php?id=61553576243338"
                      target="_blank"
                    >
                      <Image src={fb} className="xl:w-[22px] w-[15px]" />
                    </Link>

                    <Link
                      href="https://www.instagram.com/authentichef"
                      target="_blank"
                    >
                      <Image src={insta} className="xl:w-[22px] w-[15px]" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="alata font-[400] 2xl:text-[35px] 2xl:leading-[45px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] lg:leading-[24px]">
                    Chef Radha’s Menu
                  </h1>
                  <p className="fourth_p text-[#555555]">
                    Punjabi · North Indian · South Indian · Indian · Vegetarian
                  </p>
                  <div className="flex gap-3 2xl:my-[20px] xl:my-[15px] my-[10px]">
                    <div className="2xl:w-[197px] 2xl:h-[37px] xl:w-[140px] xl:h-[30px] w-[130px]  h-[25px] bg-[#F3F3F3] flex justify-around items-center">
                      <Image src={cook} className="w-[17px]" />
                      <p className="fourth_day">1.1k+</p>
                      <p className=" fourth_day text-[#838383]">
                        Meals prepared
                      </p>
                    </div>
                    <div className="2xl:w-[197px] 2xl:h-[37px] xl:w-[140px] xl:h-[30px] w-[130px]  h-[25px bg-[#F3F3F3] flex justify-around items-center">
                      <Image src={cook2} className="w-[17px]" />
                      <p className="fourth_day">Certified</p>
                      <p className="fourth_day text-[#838383]">Food safety</p>
                    </div>
                  </div>
                  <p className="fourth_day 2xl:w-[869px] xl:w-[600px] w-[540px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="flex gap-[50px] 2xl:my-[30px] xl:my-[20px] my-[10px]">
                    <div className="2xl:w-[404px] xl:w-[280px] w-[204px] ">
                      <h2 className="fourth_p text-[#555555]">
                        Lorem Ipsum is simply dummy
                      </h2>
                      <p className="fourth_day 2xl:my-[12px] xl:my-[8px] my-[6px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </p>
                    </div>
                    <div className="2xl:w-[404px] xl:w-[280px] w-[204px] ">
                      <h2 className="fourth_p text-[#555555]">
                        Lorem Ipsum is simply dummy
                      </h2>
                      <p className="fourth_day 2xl:my-[12px] xl:my-[8px] my-[6px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </p>
                    </div>
                  </div>
                  <div className="2xl:my-[30px] ">
                    <h2 className="fourth_p text-[#555555]">
                      Lorem Ipsum is simply dummy
                    </h2>
                    <p className="fourth_day 2xl:my-[12px] xl:my-[8px] my-[6px] 2xl:w-[869px] xl:w-[600px] w-[540px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:mt-[250px] xl:mt-[200px] mt-[180px] ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:py-[120px] xl:py-[60px] py-[40px] mx-auto">
            <div className="">
              <div>
                <h1 className="third_head">Popular Dishes</h1>
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

        <Footer />
      </section>
    </>
  );
};

export default ChefDishes;
