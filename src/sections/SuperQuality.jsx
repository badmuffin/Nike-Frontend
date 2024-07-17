import Button from "../components/Button";
import { shoe8 } from "../assets/images/index";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {" "}
      {/* id for scrolling to work */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellance ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      {/* flex-1 is used to maintain the size of the image w.r.t other content in the container NOTE :- see at 1028px */}
      <div className=" flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe image" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
