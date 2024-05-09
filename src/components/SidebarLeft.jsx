import React from "react";
import { Link, NavLink } from "react-router-dom";
import Img1 from "../../public/images/s-icon1.svg";
import Img2 from "../../public/images/s-icon2.svg";
// import { GrHomeRounded } from "react-icons/gr";
import Img3 from "../../public/images/s-icon3.svg";
import Img4 from "../../public/images/s-icon4.svg";
import Img5 from "../../public/images/s-icon5.svg";
import Img6 from "../../public/images/s-icon6.svg";
import Img7 from "../../public/images/s-icon7.svg";
import Img8 from "../../public/images/logout.svg";

const SidebarLeft = () => {
  return (
    <div className=" w-[100px]  bg-[#1F1D2B]">
      <ul className="container mx-auto px-4 pt-[20px] block items-center">
        <li className=" mb-[15px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img1} alt="" className="w-[56px] h-[56px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] text-center hover:bg-[#252836] ">
          <NavLink className="">
            {/* <GrHomeRounded className="text-[red] w-[20px] h-[20px]"/> */}
            <img src={Img2} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img7} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img6} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img5} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img4} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px]  hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img3} alt="" className=" w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="my-[10px] py-[26px] pl-[25px] hover:bg-[#252836]">
          <NavLink className="">
            <img src={Img8} alt="" className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
