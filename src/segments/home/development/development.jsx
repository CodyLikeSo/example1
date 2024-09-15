import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function Development() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-start justify-center h-screen w-screen text-[#D9D9D9] py-[2%] overflow-hidden">
        <div className="absolute left-[18%] cursor-pointer bg-[#242424] p-3 rounded-[15px] shadow-[0_0px_15px_5px_rgba(0,0,0,0.25)]" onClick={() => navigate("/")}>
          Back
        </div>

        <div className="bg-[#242424] w-1/2 max-h-full overflow-y-auto rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] p-[2%]">
          <h1 className="text-4xl font-poppins tracking-[5px]">DEVELOPMENT</h1>

          <h2 className="text-2xl tracking-[2px] py-[2%]">React</h2>
          This when i suck in react js

          <h2 className="text-2xl tracking-[2px] py-[2%]">Rust</h2>
          This when i suck in rust

          <h2 className="text-2xl tracking-[2px] py-[2%]">Python</h2>
          This when i suck in python
        </div>
      </div>
    </>

  );
}

export default Transition(Development);
