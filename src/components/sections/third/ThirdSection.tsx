import { Card1Props } from "types/thirdSection/thirdSection.types";
import Card1 from "./card1";

const ThirdSection = (props: Props) => {
  const { list } = props;

  return (
    <div className="m-auto grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-[repeat(2,max-content)] md:gap-y-12">
      {list.map((el, index) => (
        <Card1
          key={index}
          title={el.title}
          description={el.description}
          svg={el.svg}
        />
      ))}
    </div>
  );
};

interface Props {
  list: Array<Card1Props>;
}
export default ThirdSection;
