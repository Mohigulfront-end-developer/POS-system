import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

const OrderBasket = ({ setplaymentClick }) => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={` w-[350px]  h-full p-5 bg-[#1F1D2B] mb-3  transition-all duration-500 `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-white">Orders #34562</span>
        </div>
        <div className=""></div>
        <div className="text-[white] flex justify-between font-semibold text-[20px] items-center py-[20px] border-b-2 border-[#252836]">
          <h3>Item</h3>
          <div className="flex justify-between items-center gap-4">
            <h3>Qty</h3>
            <h3>Item</h3>
          </div>
        </div>
        <div className=" h-[50vh] overflow-y-scroll scrollProduct">
          {cartItems.length > 0 ? (
            cartItems.map((food) => {
              return (
                <ItemCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-white pt-[20px]">
              Your order basket is empty.
            </h2>
          )}
        </div>

        <div className="absolute bottom-0 ">
          <div className="pt-[30px] flex justify-between items-center border-t-2 border-[#2D303E] ">
            <h3 className="font-semibold text-[#ABBBC2] ">Discount</h3>
            <span className="text-white">$0</span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[#ABBBC2]">Sub total</h3>
            <span className="text-white ">$ {totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={() => setplaymentClick(true)}
            className="bg-[#EA7C69] font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 mt-[30px]"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderBasket;
