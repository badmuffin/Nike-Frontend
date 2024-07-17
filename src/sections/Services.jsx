import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center items-center flex-wrap gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
        >
          <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={service.imgURL} width={24} height={24} />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{service.label}</h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-none text-slate-gray">{service.subtext}</p> 
          {/* break-words wrap the para on a specific word not on letter */}
        </div>
      ))}
    </section>
  );
};

export default Services;
