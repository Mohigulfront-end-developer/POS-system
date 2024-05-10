import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between pt-[10px] mx-5 mb-[24px] mt-[16px]">
      <div>
        <h1 className="text-2xl font-bold text-[white]">Jaegar Resto</h1>
        <h3 className="text-xl font-normal text-[#E0E6E9]">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <div>
        <div className="flex justify-center relative gap-5">
          <CiSearch className="absolute text-[white] w-[25px] h-[25px] top-[38%] left-[10px] " />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for food, coffe, etc.. "
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 mt-[12px] border  bg-[#393C49] border-[transparent] text-sm rounded-lg outline-none  w-[300px] pl-10  text-[#E0E6E9]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
