import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";
import Text_block from "./text_block";
import GanttChart from "./gantt_chart";

function Management() {
  const navigate = useNavigate();

  return (
        <div>
          <div className="py-8">
            <GanttChart/>
          </div>
          <div className="py-[10%]">
            <Text_block/>
          </div>
        </div>
  );
}

export default Transition(Management);
