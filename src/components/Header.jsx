import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center min-h-[80vh]">
      <div>
        <h1 className="font-medium text-7xl md:text-[180px] lg:text-[240px]">
          Saran <br /> Shrestha
        </h1>
        <p className="py-4">
          Hello, my name is Saran Shrestha, nice to meet you.
          <br /> I would like to welcome you to my portfolio.
        </p>
      </div>
      <div className="img-container h-[80vh] overflow-hidden">
        <img
          width={"820px"}
          className="object-cover rounded-full absolute right-36 top-5  " 
          src="/its-me-sharon.png"
          alt="best-ui/ux-desingner-around-pokhara"
        />
        <div className="w-[120px] h-[240px] opacity-30 top-[24%] right-[22%] bg-lime-500 absolute"></div>
      </div>
      <div className="mt-72 text-center absolute top-[50%] left-[48%]">
        <button className="p-2  h-[100px] rounded-full border text-center">
          <div className="animate-bounce border rounded-full h-[40px] p-1">
            <ArrowDown />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
