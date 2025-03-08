import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Reviews from "./components/Reviews";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-blue-950">
        <div className="fixed inset-0 bg-[url(./assets/bg-image.png)] bg-no-repeat bg-center "></div>
        <div className="relative z-10">
          <Header />

          <div className="max-w-6xl mx-auto">
            <div className="mx-5">
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <Info />
              </section>
              <section id="portfolio">
                <Works />
              </section>
              <section id="reviews">
                <Reviews />
              </section>
              <section id="contact">
                <Form />
              </section>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
