import React from "react";
import Cart from "./Cart.jsx";
import EdibleData from "../data/EdibleData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Done ${name} `);
  return (
    <>
      <div className="container mx-auto px-4">
        <h3 className="text-[white] font-semibold text-[20px]">
          Choose Dishes
        </h3>
        <div className=""></div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-5 scrollProduct justify-left mx-5 my-10 h-[50vh] overflow-hidden overflow-y-scroll ">
        {EdibleData.filter((food) => {
          if (category === "item") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <Cart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
