import dynamic from "next/dynamic";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo.png";
import sidemanu from "../../../public/images/side-menu.svg";
import fb from "../../../public/images/fb.svg";
import insta from "../../../public/images/insta.svg";
import tiktok from "../../../public/images/tiktok.svg";

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

        <div>

        </div>

        <footer className="bg-[#F6F6F6] flex justify-center pt-5 lg:pt-8 2xl:pt-14">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] md:w-[700px] w-full px-10 md:px-0 mx-auto  2xl:mt-[100px] xl:mt-[50px] lg:mt-[35px]">
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
                  <div className="flex gap-2 justify-center lg:justify-start">
                    <div>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61553576243338"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={fb}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="https://www.instagram.com/authentichef"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={insta}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.tiktok.com/@authentichef"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={tiktok}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="2xl:mt-[56px] xl:mt-[25px] lg:mt-[15px] mt-2" />
            <div>
              <div className="flex justify-center 2xl:my-5 xl:my-3 lg:my-2">
                <h1 className="footer_text_b">
                  © 2024 Authentichef | All Rights Reserved
                </h1>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
export default dynamic(() => Promise.resolve(ChefDetail), { ssr: false });
