import React from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import Image from "next/image";
import poster from "./assets/global-banner.png";

const GlobalCusines = () => {
  return (
    <>
      <section>
        <NavBar />

        <div className="2xl:pt-[116px] xl:pt pt-[50px]">
          <div className="2xl:w-[859px] xl:w-[] lg:w-[] sm:w-[] w-[] text-center mx-auto 2xl:pt-[90px] xl:pt pt-[70px] ">
            <h1 className="globalhead">
              Homemade. Authentic Flavours, Expertly Delivered.
            </h1>
          </div>
          <div className="2xl:mt-[40px] xl:mt-[25px] mt-[10px]">
            <Image
              src={poster}
              className="2xl:w-[1219px] 2xl:h-[604px] h-auto xl:w-[] lg:w-[] sm:w-[] w-[] mx-auto rounded-[15px]"
            />
          </div>

          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto 2xl:mb-[230px] xl:mb-[140px] mb-[90px] mnavbar">
            <div className="w-full">
              <div className="text-center mt-[120px]">
                <h1 className="globalhead">Popular Cuisines</h1>
                <div className="flex justify-around mt-[60px]">
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-[120px]">
                <h1 className="globalhead">Popular Dishes</h1>
                <div className="flex justify-around mt-[60px]">
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
                    </div>
                  </div>
                  <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                    <div className="lg:text-start text-center ">
                      <h1 className="global_h">Asian Cuisine</h1>

                      <p className="globaltext 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
                        Chinese Cuisine
                      </p>

                      <p className="globaltext">Thai Cuisine</p>

                      <p className="globaltext">Korean Cuisine</p>

                      <p className="globaltext">Japanese Cuisine</p>
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

export default GlobalCusines;
