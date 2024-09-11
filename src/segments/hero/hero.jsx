import mountain from '/home/cody/Cody/Programming/React/example1/example1/src/assets/Mountain.png';

export const Hero = () => (
  <div className="font-extrabold font-poppins text-center">
      <div className="relative 2xl:right-[20%] xl:right-[20%] lg:right-0 md:right-0 sm:right-0 mt-[12%]">
        <h2
          className="2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-6xl text-5xl top-0 right-0 text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 50%, #000000 70%)',
          }}
        >
          CODY
        </h2>
        <p
          className="font-normal text-transparent bg-clip-text 2xl:text-xl xl:text-lg lg:text-sm md:text-ms sm:text-[14px]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 47%, #000000 62%)',
          }}
        >
          Personal Portfolio
        </p>
      </div>
  </div>
);
