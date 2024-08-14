import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center min-h-[80vh]">
      <h1 className="font-medium text-7xl md:text-9xl">
        Saran <br /> Shrestha
      </h1>
      <p className="py-4">
        Hello, my name is Saran Shrestha, nice to meet you.<br/> I would like to
        welcome you to my portfolio.
      </p>
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
