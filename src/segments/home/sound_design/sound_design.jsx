import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function Sound_design() {
  const navigate = useNavigate();

  return (
    <>
        Hello audio
    </>

  );
}

export default Transition(Sound_design);
