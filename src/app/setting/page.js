"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import Profile from "./profile";
import MyOrder from "../my-order/page";
import PaymentMethod from "../payment-method/page";
import myorder from "./assets/myorder-icon.svg";
import profile from "./assets/profile-icon.svg";
import payment from "./assets/payment-icon.svg";
import logout from "./assets/logout-icon.svg";
import Footer from "../footer";

const Setting = () => {
  const menulist = [
    {
      id: 1,
      label: "My Orders",
      component: <MyOrder />,
      icon: myorder,
    },
    {
      id: 2,
      label: " Profile",
      component: <Profile />,
      icon: profile,
    },
    {
      id: 3,
      label: "  Payment Method",
      component: <PaymentMethod />,
      icon: payment,
    },
  ];

  const [showDrawer, setShowDrawer] = useState("");
  const [ComponentId, setComponentId] = useState(1);
  const handleClick = (id) => {
    setComponentId(id);
    setShowDrawer(false);
  };
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

        <div className="">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mt-[70px] xl:mt-[40px] mt-[30px]">
            <div
              className={`z-50 flex flex-col justify-between   
            2xl:w-[278px] xl:w-[200px] w-[170px]  drawer
                 ${
                   showDrawer
                     ? "block  absolute top-0 left-0  is-show"
                     : "hidden lg:block"
                 }`}
            >
              <div
                className="relative text-white  flex flex-col gap-[5px] cursor-pointer lg:hidden  text-right mr-3 mt-2"
                // onClick={() => setShowDrawer(false)}
              >
                <div className="flex justify-end">
                  {" "}
                  {/* <Image src={inquiry} className=" sm:w-8  w-7" />{" "} */}
                </div>
              </div>

              <div className=" flex flex-col 2xl:gap-6 gap-1 ">
                {menulist.map((item, index) => (
                  <div key={index}>
                    <div
                      className={` py-3 rounded-md  flex  justify-between items-center cursor-pointer  transition-colors font-semibold dash-menu  hover:transition-all ease-in delay-100 duration-300  hover:text-black text-[#A3A3A3]  dashboard_box_t 
                                    ${
                                      item.id === ComponentId
                                        ? " text-[#000000]"
                                        : "hover:menu_secondary hover:text-black hover:rounded-md"
                                    }  `}
                      onClick={() => handleClick(item.id)}
                    >
                      <p className=" capitalize whitespace-nowrap  alata font-[400] 2xl:text-[25px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[11px] ">
                        {item.label}
                      </p>
                      <Image
                        src={item?.icon}
                        alt={item.label}
                        height={25}
                        width={25}
                        className="h-[14px] w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[25px] 2xl:w-[25px] fill-white"
                      />
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="">
                <div>
                  <div
                    //   onClick={handleSignout}
                    className="  py-3 rounded text-center cursor-pointer my-3 flex justify-between items-center transition-colors dash-menu gap-x-3 hover:bg-menu_secondary  hover:rounded-md  hover:text-black text-[#A3A3A3]  alata font-[400] 2xl:text-[25px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[11px] dashboard_box_t "
                  >
                    <button>Sign Out</button>
                    <Image
                      src={logout}
                      className="h-[14px] w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[25px] 2xl:w-[25px] "
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" 2xl:w-[1215px] xl:w-[830px] w-[620px] ">
              {menulist.map((item, index) => (
                <Fragment key={index}>
                  {ComponentId === item.id && item.component}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="2xl:mt-[110px] xl:mt-[80px] mt-[50px]">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Setting;
