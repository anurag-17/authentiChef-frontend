import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import sidemanu from "../../public/images/side-menu.svg";
import google from "./assets/google.svg";
import fb from "./assets/fb.svg";
import apple from "./assets/apple.svg";

const Navbar = () => {
  return (
    <>
      <section>
        <nav className="absolute flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 w-full">
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="nav_login"
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
            </div>
          </div>
        </nav>
      </section>

      <div className="">
        <dialog
          id="my_modal_1"
          className="modal rounded-[10px] 2xl:w-[460px] 2xl:h-[615px] xl:w-[360px] xl:h-[450px] 2xl:mt-40 xl:mt-24 p-0"
        >
          <form method="dialog" className=" w-full h-full mt-0">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex justify-center items-center border w-full 2xl:h-[80px] xl:h-[55px]">
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
              <h1 className="fourth_p">Login or Sign up</h1>
            </div>
            <div className="my-3 px-[40px]">
              <div className="2xl:mt-[35px] mt-[25px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your mail id"
                  className="login-inputad  w-full"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="enter valid email ex. abc@gmail.com"
                  // onChange={InputHandler}
                />
              </div>
              <div>
                <button className="w-full text-white 2xl:text-[20px] xl:text-[16px] rounded-[5px] 2xl:mt-[20px] xl:mt-[15px] 2xl:h-[60px] xl:h-[40px] lg:h-[30px] text-center bg-[#DB5353]">
                  Login
                </button>
              </div>
              <div>
                <h1 className="alata font-[400] 2xl:my-[20px] xl:my-[10px] text-[14px] leading-[26px] text-center">
                  or
                </h1>
              </div>
              <div className="2xl:mt-[20px]">
                <div className=" social_div">
                  <button className="flex social_btn ">
                    <Image className=" social_img " src={google} />
                    <h1 className="">Continue with Google</h1>
                  </button>
                </div>
                <div className="my-[12px] social_div">
                  <button className="social_btn">
                    <Image className="social_img " src={fb} />
                    <h1>Continue with Facebook</h1>
                  </button>
                </div>{" "}
                <div className=" social_div">
                  <button className="social_btn">
                    <Image className="social_img " src={apple} />
                    <h1> Continue with Apple</h1>
                  </button>
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
    </>
  );
};

export default Navbar;
