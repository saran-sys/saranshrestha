import About from "./components/About";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import ServiceScroll from "./components/ServiceScroll";
function App() {
  return (
    <>
      <div>
        <div className="container m-auto py-12">
          <Navbar />
          <Header />
          <Client />
        </div>
        <ServiceScroll rotate={"12"} />
        <div className="container m-auto py-12">
          <About />
        </div>
        <ServiceScroll />
        <div className="container m-auto py-12">
          <Service />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
