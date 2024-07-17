import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <div>
      <section 
        id="products" 
        className="max-container max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
              Our <span className="text-coral-red">Popular</span> Products
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-14">
            {products.map( (product) => (
              <PopularProductCard key={product.name} {...product} /> // spread operator to include left contents
            ))}
          </div>
      </section>
    </div>
  );
};

export default PopularProducts;

// create a product card page for each image with clickable links 