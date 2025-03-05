import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="relative fixed min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute fixed inset-0 bg-[url(./assets/bg-image.png)] bg-no-repeat bg-center "></div>
        <div className="relative z-10">
          <Header />
          <div className="max-w-6xl mx-auto">
            <Hero />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
