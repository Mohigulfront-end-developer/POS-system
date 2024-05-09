import FoodLogo from "../../public/images/s-icon1.svg";
import { VscHome } from "react-icons/vsc";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
// import { PiSealPercentThin } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const SidebarLeft = () => {
  return (
    <div className=" w-[120px]  bg-[#1F1D2B]">
      <ul className="sidebar__left mt-8 ms-[12px]">
        <div className="flex justify-center  cursor-pointer  items-center mb-4">
          <div className="w-[56px] h-[56px] flex justify-center items-center">
            <img src={FoodLogo} alt="" className="" />
          </div>
        </div>
        <li className="flex  justify-center w-[108px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon ">
            <VscHome size={25} className="" />
          </div>
        </li>
        <li className="flex  justify-center w-[108px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon ">
            <VscHome size={25} className="" />
          </div>
        </li>

        <li className="flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon">
            <LuPieChart size={25} className="" />
          </div>
        </li>
        <li className="flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon">
            <MdOutlineMail size={25} className="" />
          </div>
        </li>
        <li className="flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon">
            <IoNotificationsOutline size={25} className="" />
          </div>
        </li>
        <li className="flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center sidebar__icon">
            <IoSettingsOutline size={25} className="" />
          </div>
        </li>
        <li className="flex justify-center w-[102px] cursor-pointer h-20 items-center p-3] mt-8 relative">
          <div className="w-[56px] h-[56px] flex justify-center items-center  sidebar__icon">
            <RxExit size={25} className="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
