import ThirdSection from "./ThirdSection";
import car from "assets/car.svg";
import trust from "assets/trust.svg";
import ecoFriendly from "assets/ecoFriendly.svg";
import delivery_box_1_ from "assets/delivery_box_1_.svg";

const ThirdSectionContainer = (/* props: Props */) => {
  // const {} = props;

  const list = [
    {
      svg: car,
      title: "Velocidad",
      description:
        "Gracias a los pagos instantáneos, recibimos el dinero en una hora, por lo que podemos completar su pedido de inmediato.",
    },
    {
      svg: trust,
      title: "Confianza",
      description:
        "Trabajamos únicamente con empresas de mensajería confiables, para que pueda tener la tranquilidad de saber que su paquete está seguro y llegará pronto a usted.",
    },
    {
      svg: ecoFriendly,
      title: "Respeto al medio ambiente",
      description:
        "Para embalar tu pedido utilizamos materiales reciclables: papel y rellenos biodegradables.",
    },
    {
      svg: delivery_box_1_,
      title: "Franqueza",
      description:
        "La información es fundamental, por eso te informamos sobre la localización de tu paquete.",
    },
  ];

  const childProps = {
    list,
  };

  return <ThirdSection {...childProps} />;
};

/* interface Props {} */

export default ThirdSectionContainer;
