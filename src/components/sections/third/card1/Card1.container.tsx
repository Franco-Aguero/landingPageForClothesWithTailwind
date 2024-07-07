import { Card1Props } from "types/thirdSection/thirdSection.types";
import Card1 from "./Card1";

const Card1Container = (props: Props) => {
  // const {} = props;

  const childProps = {
    ...props,
  };

  return <Card1 {...childProps} />;
};

interface Props extends Card1Props {}

export default Card1Container;
