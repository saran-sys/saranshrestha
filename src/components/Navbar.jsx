import scrollTo from "../utils/scrollToview";
const Navbar = () => {
  const navItems = ["Home", "Service", "Portfolio", "Blog", "Contact"];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <img
            src="/Saran_Designs_-_Logo.png"
            className="invert size-32"
          />
          <ul className="md:flex gap-3 ml-12 hidden">
            {navItems.map((item) => (
              <li onClick={() => scrollTo(`#${item}`)} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="border p-4">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
