import Transition from "../../../navigation/transition";
import ConsoleEmulator from "./console";

function Development() {
  return (
    <>
      <div className="text-sm flex h-screen relative justify-center items-center w-full overflow-hidden">
        <div className=" w-3/5 h-3/5 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] border-[1px] border-green-600 p-[3%]"
        style={{
          background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
        }}
        >
          <ConsoleEmulator/>
        </div>
        
      </div>
    </>

  );
}

export default Transition(Development);
