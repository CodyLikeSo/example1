import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function Management() {
  const navigate = useNavigate();

  return (
    <>
        Hello manager
    </>

  );
}

export default Transition(Management);
