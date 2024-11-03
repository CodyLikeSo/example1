
import InputComponent from "./input";

export const Llama = () => (
  <div>
              <div
                className="absolute inset-0 z-0 hidden md:block"
                style={{
                backgroundImage: `url('src/assets/stars2.png')`,
                backgroundSize: '100%', // Set to 200% to make it 2x size
                backgroundPosition: 'center 33%',
                backgroundRepeat: 'no-repeat',
                }}
              ></div>
    <div className="relative h-screen overflow-hidden">
      <div className="flex justify-center items-start h-full">
        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <InputComponent className="w-full max-h-full overflow-auto" />
        </div>
      </div>
    </div>
  </div>
);
