import { GiReturnArrow, GiDeliveryDrone, GiPayMoney } from "react-icons/gi";
export const services = [
    {
      id: 1,
      name: "Envíos",
      text: "Su pedido será entregado dentro de los 7-12 días hábiles siguientes a la confirmación del mismo.",
      icon: <GiDeliveryDrone />,
    },
    {
      id: 2,
      name: "Pagos",
      text: "Compre ahora, pague después. Solo pagará por los artículos que conserve. Su pago se debitará automáticamente de su tarjeta después de 30 días, sin cargo adicional",
      icon: <GiPayMoney />,
    },
    {
      id: 3,
      name: "Devoluciones",
      text: "Siempre puedes devolver o cambiar gratis en cualquier tienda dentro de Argentina. Tiene 30 días para decidir si un artículo es adecuado para usted. ",
      icon: <GiReturnArrow />,
    },
  ];