import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import Footer from "../footer";

const ChefDetail = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
            <div className="w-1/3">
              <Image
                alt="image"
                src={sidemanu}
                className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px]"
              />
            </div>
            <div className="w-1/3 ">
              <a href="#">
                <Image alt="logo" src={logo} className="nav_logo" />
              </a>
            </div>
            <div className="flex md:gap-7  gap-2">
              <button className="nav_login">Log Inn</button>
              <button className="nav_signup">Sign Up</button>
            </div>
          </div>
        </nav>

   
        <Footer />
      </section>
    </>
  );
};
export default dynamic(() => Promise.resolve(ChefDetail), { ssr: false });
