import Box from "./box";
import Box1 from "./box1";
import Box2 from "./box2";

export const Home = () => (
  <div className="flex flex-col 2xl:flex-row h-full w-full py-4 px-4">
    <div className="h-full w-full 2xl:w-1/3 mb-4 2xl:mb-0 2xl:mr-4 rounded-[15px] hover:scale-105 border-2 border-transparent hover:border-opacity-100 transition-all duration-300">
      <Box />
    </div>

    <div className="h-full w-full 2xl:w-1/3 mb-4 2xl:mb-0 2xl:mr-4 rounded-[15px] hover:scale-105 border-2 border-transparent hover:border-opacity-100 transition-all duration-300">
      <Box1 />
    </div>

    <div className="h-full w-full 2xl:w-1/3 rounded-[15px] hover:scale-105 border-2 border-transparent hover:border-opacity-100 transition-all duration-300">
      <Box2 />
    </div>
  </div>
);

export default Home;
