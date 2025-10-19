"use client";
import Lottie from "lottie-react";
import React from "react";
import arrowright from "../lottie/Arrow Right.json";
import female from "../lottie/Female.json";

function ContactBox() {
  return (
    <div className="relative overflow-hidden mt-10 mb-15 flex items-center justify-between ml-13">
      <div
        className="flex flex-col space-y-4 items-start justify-between w-[50%] max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)] p-8 overflow-hidden"
        // style={{
        //   background: "rgba(255, 255, 255, 0.4)",
        //   borderRadius: "16px",
        //   boxShadow: "0 6px 40px rgba(0, 0, 0, 0.15)",
        //   backdropFilter: "blur(8px)",
        //   WebkitBackdropFilter: "blur(8px)",
        //   border: "1px solid rgba(255, 255, 255, 0.6)",
        //   width: "50%",
        // }}
        // className="p-6 h-auto bg-gray-200 flex flex-col space-y-4 "
      >
        <div className="flex ">
          <div className="">
            <h2 className="text-[25px] font-bold text-white-100">
              Talk 15 mins with Priyanshi
            </h2>
          </div>
          <div>
            <Lottie
              style={{
                width: "80px",
                borderRadius: "50px",
                marginLeft: "60px",
                // border: "4px solid #fff",
              }}
              animationData={arrowright}
              loop={true}
            />
          </div>
        </div>
        <div className="flex space-x-20 items-center ">
          <div>
            <Lottie
              style={{
                width: "120px",
                // marginLeft: "-40px",
                background: "yellow",
                borderRadius: "20px",
              }}
              animationData={female}
              loop={true}
            />
          </div>
          <div>
            <h2 className="text-white font-bold text-xl ">Priyanshi Singh</h2>
            <span className="text-white text-lg">Developer</span>
          </div>
        </div>
      </div>

      <div>
        <ul className="divide-y divide-gray-300 border-b border-white/50 mr-25">
          <li className="text-white text-2xl py-2">Growth</li>
          <li className="text-white text-2xl py-2">Fundraising</li>
          <li className="text-white text-2xl py-2">United</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactBox;
