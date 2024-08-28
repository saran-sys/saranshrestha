import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="py-12 ">
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
      <div className="py-24 flex flex-col md:flex-row justify-center gap-8">
        <div className="p-12 bg-slate-900 ">
          <a
            href="https://www.figma.com/design/QAxD3i0PZ9ARIBa62HwBKh/MOVIEGHAR?t=r1m1ac78ajuUgZtk-1"
            target="_blank"
          >
            <div className="size-72 md:size-96">
              <img
                className="pb-4 rounded-lg"
                src="/movie_ghar_ui_project.png"
                alt="portfolio-1"
              />
            </div>
            <h2 className="pt-4"> Movieghar </h2>
            <p className="pb-4"> A UI project for web based movie streamig service. </p>
            <button className="flex gap-2 border p-4">Learn More </button>
          </a>
        </div>

        <div className="p-12 bg-slate-900">
          <a
            href="https://www.figma.com/design/86CfZwvuSpDKvSlp5GTBPb/Tripsathi?node-id=0-1&t=r1m1ac78ajuUgZtk-1"
            target="_blank"
          >
            <div className="size-72 md:size-96 overflow-hidden">
              <img
                className=" rounded-lg"
                src="/trip_sathi_mobilewebapp_uiux_project.png"
                alt="portfolio-2"
              />
            </div>
            <h2 className="pt-4"> Tripsathi</h2>
            <p className="pb-4"> A UI/UX project for web and mobile application. </p>
            <button className="flex gap-2 border p-4">Learn More </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
