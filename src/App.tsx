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

function App() {
  return (
    <main className='relative w-full'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subsribe />
      <Footer />
    </main>
  );
}

export default App;
