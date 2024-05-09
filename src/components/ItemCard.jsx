import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  // incrementQty,
  // decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="">
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
          <img src={img} alt="" className="w-[50px] h-[50px] " />
          <div className=" flex justify-between leading-5  items-center">
            <h2 className="pb-[10px] font-bold text-white">{name}</h2>
            <div className="flex justify-between mr-[5px]">
              <span className="text-white border-none bg-[#252836] px-[20px] py-[10px] rounded-md">
                {qty}
              </span>
              {/* <span className="bg-[red]">545</span> */}
            </div>
            <div className="flex justify-between ">
              <span className="text-[#ABBBC2] font-bold">${price}</span>
            </div>

            <div className="flex justify-center items-center gap-2 absolute right-7">
              {/* <AiOutlineMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-[#EA7C69] text-white  hover:bg-[#EA7C69] hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span className="text-[white]">{qty}</span>
              <AiOutlinePlus
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-[#EA7C69] text-white  hover:bg-[#EA7C69] hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-[15px]">
        <input
          type="text"
          id = "text"
          name="text"
          placeholder="Order Note..."
          className="p-[10px] w-[250px] bg-[#252836]  border border-transparent rounded-md outline-none"
        />
        <MdOutlineDelete
          onClick={() => {
            dispatch(removeFromCart({ id, img, name, price, qty }));
            toast(`${name} Deleted!`, {
              icon: <PiHandWavingFill className="text-[#EA7C69]" />,
            });
          }}
          className="py-[8px] px-[8px] w-[38px] h-[38px] absolute right-7 text-[#EA7C69] cursor-pointer border border-[#EA7C69] rounded-md hover:text-[white] hover:bg-[#EA7C69]"
        />
      </div>
    </div>
  );
};

export default ItemCard;
