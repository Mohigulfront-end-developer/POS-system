import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import FoodItems from "../components/FoodItems";
const Home = () => {
  return (
    <div className="flex-[1] w-[100%]">
      <Navbar />
      <Menu />
      <FoodItems />
    </div>
  );
};

export default Home;
