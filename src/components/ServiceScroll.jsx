import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const ServiceScroll = ({rotate }) => {
  const services = [
    "UI/UX Design",
    "Mockup Design",
    "Design Graphic",
    "Icon Design",
    "Logo Design",
  ];
  return (
    <div className={`rotate-${rotate} bg-lime-500 text-black font-medium flex gap-3 md:gap-5 justify-around p-4 overflow-hidden `}>
      <Marquee speed={300}>
        {services.map((service) => (
          <div key={service} className="uppercase mr-12 text-3xl">
            {service}
          </div>
        ))}
        {services.map((service) => (
          <div key={service} className="uppercase mr-12 text-3xl">
            {service}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServiceScroll;
