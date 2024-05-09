import EdibleData from "../data/EdibleData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { useEffect, useState } from "react";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(EdibleData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6 ">
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
        {categories.map((category, index) => {
          return (
            <div
              className={`border-b-[2px] ${
                selectedCategory === category
                  ? "border-b-[#EA7C69] text-white"
                  : " border-b-[#fff0]"
              } categoryFilter pb-3 `}
              key={index}
            >
              <button
                onClick={() => dispatch(setCategory(category))}
                className={`px-3 py-2  font-bold  ${
                  selectedCategory === category
                    ? "text-[#EA7C69]"
                    : "rounded-lg hover:border-b-[#EA7C69] text-[#fff]"
                }`}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
      <hr className="mt-[-21.23px]  text-[#393C49]" />
    </div>
  );
};

export default Menu;
