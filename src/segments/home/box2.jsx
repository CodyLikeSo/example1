import Icon2 from "./icons/icon2";

export const Box2 = () => (
  <div className="relative h-full group">
    <div className="absolute inset-0 rounded-md border-2 border-transparent hover:border-green-600 z-10 transition-all duration-300"></div>
    <div className="h-full bg-[#1A1A1A] rounded-md opacity-80 shadow-[0_0px_10px_5px_rgba(0,0,0,0.15)] z-0 flex items-center justify-center">
      <h2 className="text-2xl tracking-[3px] group-hover:tracking-[8px] transition-all duration-[1500ms] 2xl:tracking-[6px] xl:tracking-[6px] lg:tracking-[6px] md:tracking-[6px]">
        SOUND DESIGN
      </h2>
      <div className="hidden absolute bottom-24 opacity-0 blur-sm group-hover:opacity-100 group-hover:blur-none transition-all duration-700 2xl:block">
        <Icon2/>
      </div>
    </div>
  </div>
);

export default Box2;
