import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const Portfolio = () => {
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="py-12">
          <h2>Portfolio</h2>
          <p className="text-4xl md:py-8">
            Selected works <br /> 2020 - 2022
          </p>
        </div>
        <div>
          <p className="py-8  md:py-12">
            Check out more
            <br /> portfolios I&apos;ve worked in
          </p>
          <button className="flex gap-2 border p-4">
            View More <ArrowRight />
          </button>
        </div>
      </div>
      <div className="flex gap-10 py-24">
        <Marquee pauseOnHover={true} speed={150}>
          <img
          className="p-4"
            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
            alt="portfolio-1"
          />
          <img
          className="p-4"
            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
            alt="portfolio-1"
          />
          <img
          className="p-4"
            src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
            alt="portfolio-1"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Portfolio;
