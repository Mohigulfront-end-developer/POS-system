import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const Cart = ({ id, name, price, desc, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(addToCart({ id, name, price, img, qty: 1 }));
        handleToast(name);
      }}
      className="font-bold w-[200px] bg-[#1F1D2B] p-6 mt-[50px] flex flex-col rounded-lg gap-2 cursor-pointer"
    >
      <img
        src={img}
        alt=""
        className="w-auto h-[150px] mt-[-50px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="px-6 flex gap-3 flex-col mt-[20px]">
        <div className="text-sm">
          <h2 className="text-[white] text-center">{name}</h2>
        </div>
        <span className="text-[white] text-center ">${price}</span>
        <p className="text-sm font-normal text-center text-[#ABBBC2] ">
          {desc.slice(0, 30)}...
        </p>

      
      </div>
    </div>
  );
};

export default Cart;
