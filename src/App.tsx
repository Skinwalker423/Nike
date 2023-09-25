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

function App() {
  return (
    <main className='relative w-full'>
      <Hero />
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
