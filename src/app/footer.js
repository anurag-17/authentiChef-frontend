import React from 'react'
import Image from "next/image";
import Link from "next/link";
import fb from "../../public/images/fb.svg";
import insta from "../../public/images/insta.svg";
import tiktok from "../../public/images/tiktok.svg";

const Footer = () => {
  return (
    <>
         <footer className="bg-[#F6F6F6] flex justify-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:mt-[100px] xl:mt-[50px] lg:mt-[35px] sm:mt-[30px] mt-[20px] mnavbar">
            <div className="flex  md:justify-between flex-wrap">
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Quick Links</h1>
                  <a href="#">
                    <p className="footer_text">Our Story</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Food Safety</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Help Center</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Global Cuisines</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Resources</h1>
                  <a href="#">
                    <p className="footer_text">Become a chef</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Browse more chef</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Homemade food delivery</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Other Links</h1>
                  <a href="#">
                    <p className="footer_text">Log In</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Sign Up</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Privacy Policy</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Terms of Service</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-4 lg:my-0">
                <div className="lg:text-start text-center">
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
            <hr className="2xl:mt-[56px] xl:mt-[25px] lg:mt-[15px] first-letter sm:mt-[15px] mt-[10px]" />
            <div>
              <div className="flex justify-center 2xl:my-5 xl:my-3 lg:my-2 sm:my-2">
                <h1 className="footer_text_b ">
                  © 2024 Authentichef | All Rights Reserved.
                </h1>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
