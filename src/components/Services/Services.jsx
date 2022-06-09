import React from "react";
import { services } from "../../data/services";
import { Wrapper } from "./Styles";

const Services = () => {
  return (
    <Wrapper>
      {services.map(({ id, name, icon, text }, index) => (
        <article key={index} className="service">
          <div className="serviceHeader">
            {icon}
            <h3>{name}</h3>
          </div>
          <p>{text}</p>
        </article>
      ))}
    </Wrapper>
  );
};

export default Services;
