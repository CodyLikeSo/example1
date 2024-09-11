export const Box2 = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 rounded-md border-2 border-transparent hover:border-green-600 z-10 transition-all duration-300"></div>
    <div className="h-full bg-[#1A1A1A] rounded-md opacity-80 shadow-[0_0px_10px_5px_rgba(0,0,0,0.15)] z-0">
      {/* Content goes here */}
    </div>
  </div>
);

export default Box;
