
import InputComponent from "./input";

export const Llama = () => (
  <div className="relative h-screen overflow-hidden">
    <div className="flex justify-center items-start h-full">
      <div className="flex-grow flex items-center justify-center overflow-hidden">
        <InputComponent className="w-full max-h-full overflow-auto" />
      </div>
    </div>
  </div>
);
