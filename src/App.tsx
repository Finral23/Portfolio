import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Reviews from "./components/Reviews";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
        <div className="fixed inset-0 bg-[url(./assets/bg-image.png)] bg-no-repeat bg-center "></div>
        <div className="relative z-10">
          <Header />
          <div className="max-w-6xl mx-auto">
            <div className="mx-5">
              <Hero />
              <Info />
              <Works />
              <Reviews />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
