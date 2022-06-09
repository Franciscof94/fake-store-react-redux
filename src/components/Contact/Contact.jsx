import React from "react";
import { Wrapper } from "./Styles";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contactText">
        <h2>Suscríbite a nuestra newsletter y obtén un 20% de descuento</h2>
        <p>
          Compre ahora, pague después. Solo pagará por los artículos que
          conserve. Su pago se debitará automáticamente de su tarjeta después de
          30 días, sin cargo adicional.
        </p>
      </div>
      <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Email" />
        <button type="submit">Suscribirse</button>
      </form>
    </Wrapper>
  );
};

export default Contact;
