import { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, CustomerReviews, Subscribe, Footer} from "./sections";
import Nav from "./components/Nav";


const App = () => {
  return(
    <main className=" relative p-4">
      <Nav/> 
      <section className=" xl:padding-l wide:padding-r padding-b" >
        <Hero/>
      </section>
      <section className=" padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-36 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 ">
        <Footer/>
      </section>
    </main>
  )
};

export default App;
