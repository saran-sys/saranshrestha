import { ArrowRight } from "lucide-react";

const About = () => {
  const numbers = [
    {
      count: "312+",
      task: "Projects Complete",
    },
    {
      count: "281+",
      task: "World Clients",
    },
    {
      count: "10+",
      task: "Years of Experience",
    },
  ];
  return (
    <div className="md:grid grid-cols-2">
      <div className="space-y-4">
        <h2>About Me</h2>
        <p className="text-4xl">
          I can deliver results that <br /> exceed your expectations.
        </p>
        <button className="p-4 border flex gap-2">
          Hire Me Now <ArrowRight />
        </button>
      </div>

      <div className="md:pt-64 pt-12">
        <p>
          Hi, I&apos; Saran Shrestha. I have an understanding of Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptates quasi sint
          earum odit, omnis eligendi blanditiis eos cupiditate ipsa, voluptate,
          accusamus possimus cum exercitationem.
        </p>
        <div className="flex gap-4 py-4">
          {numbers.map((num) => {
            return (
              <div key={num.task} className="">
                <p className="text-lime-500 text-3xl">{num.count}</p>
                <p className="opacity-70">{num.task}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
