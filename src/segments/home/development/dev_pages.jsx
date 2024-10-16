import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function Dev_pages() {
  const navigate = useNavigate();

  return (
    <>
        Hello pages
    </>

  );
}

export default Transition(Dev_pages);
