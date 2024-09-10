import Box from "./box";
import Box1 from "./box1";

export const Home = () => (
  <div className="flex h-full w-full py-6 px-6">
    <div className="h-full w-full rounded-[15px] mr-12 hover:scale-105 border-4 border-transparent hover:border-green-600 hover:border-opacity-100 transition-all duration-300">
      <Box />
    </div>

    <div className="h-full w-full rounded-[15px] hover:scale-105 border-4 border-transparent hover:border-green-600 hover:border-opacity-100 transition-all duration-300">
      <Box1 />
    </div>
  </div>
);

export default Home;
