const Service = () => {
  const services = [
    "UI/UX Design",
    "Mockup Design",
    "Design Graphic",
    "Icon Design",
    "Logo Design",
  ];
  return (
    <div  className="flex flex-col py-12">
      <h2 id="service" className="md:text-center">Service</h2>
      <p className=" pb-8 text-4xl md:text-center">
      Available services that <br />I can work on
      </p>

      <div className=" md:flex  justify-between">
        <p className="text-3xl"><span className="text-lime-500">01. </span>Design Visual</p>
        <p className=" py-8">
            Design that is unique, functional and beautiful at the heart of everything we create. <br />
            We&apos;re obsessed with user experience, designing not for ourselves but for real people <br />
            with real problems.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center md:grid-cols-3 lg:flex">
        {services.map((service) => (
          <div className=" border py-8 px-12 text-2xl" key={service}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
