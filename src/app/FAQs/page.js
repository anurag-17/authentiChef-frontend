import React from "react";
import Image from "next/image";
import NavBar from "../navBar";
import Footer from "../footer";
import circle from "../assets/FAQ-circle.svg";

const FAQs = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto 2xl:py-[150px] xl:py-[120px] py-[70px] mnavbar">
          <div className=" mx-auto text-center ">
            <h2 className="faqhead ">Your Questions Answered</h2>
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              About Authentichef
            </h2>
          </div>
          <div className="bg-[#F38181] text-white mx-auto 2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[] 2xl:h-[210px] flex items-center 2xl:px-[30px] xl:px-[20px] lg:px-[15px] sm:px-[10px] px-[] 2xl:mt-[30px] xl:mt-[20px] lg:mt-[10px] sm:mt-[10px] mt-[] py-[12px] xl:py-[15px] 2xl:py-0">
            <div className="">
              <h1 className="nine_p">
                What makes authentichef different from other food delivery
                companies?
              </h1>
              <h2 className="seven_p2">
                We believe food is not just a need; they’re journeys.
              </h2>
              <p className="2xl:w-[981px] xl:w-[] lg:w-[] sm:w-[] w-[] seven_p2">
                We connect you with delicious, authentic dishes from around the
                world, handcrafted by passionate independent chefs in the UK.
                Each dish is a culinary adventure, inspired by traditional
                recipes and infused with the chefs cultural heritage and their
                love for cooking.
              </p>
            </div>
          </div>

          <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[] text-center">
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              Chef Community
            </h2>

            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto mnavbar">
              <div className="2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[]  mx-auto">
                <div className="2xl:mt-[30px] xl:mt-[25px] lg:mt-[10px] sm:mt-[10px] mt-[] 2xl:px-[30px] xl:px-[20px] lg:px-[10px] sm:px-[10px] px-[]">
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How do you support your independent chefs?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How do I become a chef with authentichef?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Are the chefs on authentichef certified?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[] text-center">
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              Ordering
            </h2>

            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto  mnavbar">
              <div className="2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[]  mx-auto">
                <div className="2xl:mt-[30px] xl:mt-[25px] lg:mt-[10px] sm:mt-[10px] mt-[] 2xl:px-[30px] xl:px-[20px] lg:px-[10px] sm:px-[10px] px-[]">
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Is there a minimum spend?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Can I mix and match my dishes?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Can I order my dishes for the week?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        What do I do, if my order arrives damaged or incomplete?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        What payment methods do you accept?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Do you offer any subscription plans or meal kits?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[] text-center">
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              Dish
            </h2>

            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto  mnavbar">
              <div className="2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[]  mx-auto">
                <div className="2xl:mt-[30px] xl:mt-[25px] lg:mt-[10px] sm:mt-[10px] mt-[] 2xl:px-[30px] xl:px-[20px] lg:px-[10px] sm:px-[10px] px-[]">
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Who cooks my dishes?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How long can I store frozen dishes in my freezer?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Where do I find re-heating instructions?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How do I know what allergens for each dish?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How do I find dishes that suit my dietary preferences?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Does the dish include any preservatives or additives?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[] text-center">
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              Delivery
            </h2>

            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto  mnavbar">
              <div className="2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[]  mx-auto">
                <div className="2xl:mt-[30px] xl:mt-[25px] lg:mt-[10px] sm:mt-[10px] mt-[] 2xl:px-[30px] xl:px-[20px] lg:px-[10px] sm:px-[10px] px-[]">
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Where do you deliver?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">What days do you deliver?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        What time will my delivery arrive?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        What if I’m out, when the delivery arrives?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Can I change the delivery address of my order?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Why do you deliver the dishes Frozen?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Can I change the delivery address of my order?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>{" "}
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        Why do you deliver the dishes Frozen?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        What do I do when my dishes arrive?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>{" "}
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Can I get free delivery?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:mt-[60px] xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[] text-center">
            <h2 className="pop-head 2xl:mt-[60px] xl:mt-[40px] lg:mt-[25px] sm:mt-[20px] mt-[]">
              Packaging and Sustainability
            </h2>

            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  mx-auto mnavbar">
              <div className="2xl:w-[1129px] xl:w-[700px] lg:w-[550px] sm:w-[] w-[]  mx-auto">
                <div className="2xl:mt-[30px] xl:mt-[25px] lg:mt-[10px] sm:mt-[10px] mt-[] 2xl:px-[30px] xl:px-[20px] lg:px-[10px] sm:px-[10px] px-[]">
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">
                        How do you keep the dishes frozen?
                      </h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">What’s this dry ice all about?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
                    </div>
                  </div>
                  <div className="2xl:h-[72px] xl:h-[50px] lg:h-[25px] sm:h-[20px] h-[] flex items-center border-b">
                    <div className="flex justify-between w-full">
                      <h1 className="nine_p">Is the packaging recyclable?</h1>
                      <Image
                        src={circle}
                        className="  2xl:w-[32px] 2xl:h-[32px] h-auto xl:w-[25px] lg:w-[16px] sm:w-[16px] w-[] "
                      />
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

export default FAQs;
