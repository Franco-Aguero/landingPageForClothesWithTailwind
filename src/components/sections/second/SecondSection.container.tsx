import SecondSection from "./SecondSection";
import Nodata from "assets/nodata.webp";

const SecondSectionContainer = (/* props: Props */) => {
  // const {} = props;

  const array = [
    {
      url: Nodata,
      title: "Q ML HEADPHONES",
      review:
        "Perfectly adjusted to ear geometry. Q ML Headphones transmit sound better than ever. Music, podcasts, movies – enjoy listening to them and don’t lose the most quiet murmur",
    },
  ];

  const childProps = {
    list: [...array, ...array, ...array],
  };

  return <SecondSection {...childProps} />;
};

/* interface Props {} */

export default SecondSectionContainer;
