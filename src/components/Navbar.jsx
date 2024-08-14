const Navbar = () => {
  const navItems = ["Home", "Service", "Portfolio", "Blog", "Contact"];
  return (
    <div>
      <div className="flex  justify-between">
        <div className="flex gap-3 items-center ">
         <p className="font-bold text-2xl">Logo</p> 
          <ul className="md:flex gap-3 ml-12 hidden">
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <button className="border p-4">Get in Touch</button>
      </div>
    </div>
  );
};

export default Navbar;
