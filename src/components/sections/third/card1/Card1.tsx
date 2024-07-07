import { Card1Props } from "types/thirdSection/thirdSection.types";

const Card1 = (props: Props) => {
  const { svg, title, description } = props;

  return (
    <div className="mx-auto max-w-80">
      <div className="h-[52px]">
        <img
          src={svg}
          alt={title.replaceAll(" ", "-")}
          className="mx-auto md:m-[0_auto_0_0]"
        />
      </div>
      <h4 className="my-3 text-center text-2xl md:text-left">{title}</h4>
      <p className="my-3 text-center text-base md:text-left">{description}</p>
    </div>
  );
};

interface Props extends Card1Props {}
export default Card1;
