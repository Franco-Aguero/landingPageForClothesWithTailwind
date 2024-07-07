import Card1 from "./Card1";

const Card1Container = (props: Props) => {
  // const {} = props;

  const childProps = {
    ...props,
  };

  return <Card1 {...childProps} />;
};

interface Props {
  url: string;
  title: string;
  review: string;
}

export default Card1Container;
