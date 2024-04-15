import React from "react";

const Profile = () => {
  return (
    <>
      <section>
        <div className="border rounded-[5px] 2xl:mt-[30px] xl:mt-[15px] mt-[15px] 2xl:px-[105px] 2xl:py-[80px] xl:px-[50px] xl:py-[40px] px-[40px] py-[25px]">
          <div className="flex 2xl:gap-[20px] xl:gap-[15px] gap-[10px]">
            <div className="2xl:w-[375px] xl:w-[280px] w-[200px]">
              <input
                placeholder="First Name"
                value="Ajay"
                className="w-full bg-[#F3F3F3] text-black 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
              />
            </div>
            <div className="2xl:w-[375px] xl:w-[280px] w-[200px]">
              <input
                placeholder="Last Name"
                value="Hardiya"
                className="w-full bg-[#F3F3F3] text-black 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"

              />
            </div>
          </div>
          <div className="2xl:w-[375px] xl:w-[280px] w-[200px] 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
            <input
              placeholder="Email"
              value="ajay4897hardiya@mail.com"
              className="w-full bg-[#F3F3F3] text-black 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
            />
          </div>
          <div className="2xl:w-[770px] xl:w-[575px] w-[407px] 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
              <input
                placeholder="Billing Address"
                value="50 A Paramhans nagar, Bhopal, Madhya Pradesh 895005"
                className="w-full bg-[#F3F3F3] text-black 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
              />
            </div>
            <div className="2xl:w-[770px] xl:w-[575px] w-[407px] 2xl:mt-[15px] xl:mt-[10px] mt-[8px]">
              <input
                placeholder="Shipping Address"
                value=" 50 A Paramhans nagar, Bhopal, Madhya Pradesh 895005"
                className="w-full bg-[#F3F3F3] text-black 2xl:h-[60px] xl:h-[40px] h-[30px] 2xl:text-[16px] xl:text-[12px] text-[9px] 2xl:p-[20px] xl:p-[10px] p-[8px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
              />
            </div>
            <div className="2xl:mt-[50px] xl:mt-[30px] mt-[20px]">
              <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[120px] 2xl:h-[56px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] text-[10px] xl:w-[80px] xl:py-[8px]  lg:py-[6px] lg:px-4 px-3 py-1 hover:bg-[#7e2727]  ">
                Edit
              </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
