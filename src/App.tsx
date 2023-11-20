import {
  Footer,
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subsribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
import { useIsVisible } from "./hooks/useIsVisible";
import { useRef } from "react";

function App() {
  const servicesRef = useRef(null);
  const isVisible = useIsVisible(servicesRef);

  return (
    <main className='relative w-full'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section
        ref={servicesRef}
        className={`padding transition-transform duration-500 ease-linear ${
          isVisible
            ? "opacity-100 -translate-y-10"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding'>
        <CustomerReviews />
      </section>
      <section className='padding'>
        <Subsribe />
      </section>

      <Footer />
    </main>
  );
}

export default App;
