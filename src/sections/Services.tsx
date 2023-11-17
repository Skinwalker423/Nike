import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

const Services = () => {
  const servicesRef = useRef(null);
  const isVisible = useIsVisible(servicesRef);
  return (
    <section
      ref={servicesRef}
      className={`max-container flex justify-center flex-wrap gap-9 transition-transform duration-300 ease-in ${
        isVisible ? "scale-1" : "scale-0"
      }`}
    >
      {services.map((service) => {
        return (
          <ServiceCard key={service.label} {...service} />
        );
      })}
    </section>
  );
};

export default Services;
