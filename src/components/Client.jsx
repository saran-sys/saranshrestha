const Client = () => {
  const clients = ["velocity", "muzica", "foxhub", "t3j", "liua"];
  return (
    <div className="flex flex-col items-center py-12">
      <h2>Our Client</h2>
      <p className=" opacity-70 pb-8">
        More than 30 Clients who have worked with me
      </p>

      <div className="lg:flex flex-wrap grid md:grid-cols-3 grid-cols-2">
        {clients.map((client) => (
          <div
            className="border py-8 px-24 md:text-3xl "
            key={client}
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
