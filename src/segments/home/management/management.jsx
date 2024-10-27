import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";
import Text_block from "./text_block";
import GanttChart from "./gantt_chart";

function Management() {
  return (
        <div>
          <div className="sm:block hidden">
            <h1 className="text-center text-[#D9D9D9] font-extrabold text-2xl py-[3%]">GANTT CHART OF MY WORK EXPERIENCE</h1>
            <GanttChart/>
          </div>
          <div className="py-[5%]">
            <Text_block/>
          </div>
        </div>
  );
}

export default Transition(Management);
