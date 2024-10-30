import InputComponent from "./input";
import stars from '/home/cody/Cody/Programming/React/example1/example1/src/assets/stars2.png';


export const Llama = () => (
    <div>
                  <div
                    className="absolute inset-0 z-0 rounded-[30px] opacity-95 hidden md:block"
                    style={{
                      backgroundImage: `url(${stars})`,
                      backgroundSize: 'cover', // or 'contain' depending on your needs
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
      <div className="flex justify-center">
        <InputComponent/>
      </div>
    </div>
  );