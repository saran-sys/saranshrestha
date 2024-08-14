const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-lime-500 ">Collaboration</h2>
        <p className="md:text-7xl  text-4xl font-medium text-center">
          Lets talk to <br /> Collaboration
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-lime-500 p-4 border-lime-400 text-white">
            Get in Touch
          </button>
          <button className="border  p-4 ">Hire Me Now</button>
        </div>
      </div>

      <div className="flex md:justify-between items-start border-t-2 mt-24 py-8">
        <div className="flex flex-col gap-6">
          <div>
            <p className="pb-8">
              Working in design has given me a stronger <br />
              sense of the extraordinary in my digital world.
            </p>

            <p>Design &copy; Amalia Sanchez . All rights reserved 2022</p>
          </div>
          <div>
            <ul className="flex flex-col">
              <li>
                <a href="https://instagram.com/saran" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://instagram.com/saran" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com/saran" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/saran" target="_blank">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
