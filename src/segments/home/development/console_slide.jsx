import Transition from "../../../navigation/transition";
import ConsoleEmulator from "./console";
import { GoQuestion } from "react-icons/go";

function ConsoleSlide() {
  return (
    <div className="text-sm flex h-screen justify-center items-center w-full overflow-hidden relative">
      <div
        className="w-3/5 h-3/5 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] border border-green-600 p-[3%] relative"
        style={{
          background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
        }}
      >
        <div
          className="absolute top-[50px] right-[-80px] bg-inherit border border-green-600 py-1 text-center rounded-r-[15px] text-green-600 flex items-center justify-center font-bold transition-transform duration-700 origin-left hover:scale-[105%] hover:text-[#D9D9D9]"
          style={{ width: '80px' }}
        >
          <GoQuestion size={18} className="transition-colors duration-700" />
          <span className="ml-1 transition-colors duration-700">Help</span>
        </div>
        <ConsoleEmulator />
      </div>
      <div
        className="text-center text-green-600 absolute bottom-[10%] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] border border-green-600 py-1 font-bold transition duration-700 transform hover:scale-105 hover:text-[#D9D9D9]"
        style={{
          width: '260px',
          height: '30px'
        }}
      >
        &gt;&gt; Show Simple Version
      </div>
    </div>
  );
}

export default ConsoleSlide;
