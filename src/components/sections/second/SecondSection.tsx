import Card1 from "./card1";

const SecondSection = (props: Props) => {
  const { list } = props;

  return (
    <section>
      <h3 className="mx-auto w-fit font-mono text-4xl">
        OFERTAS Y PRECIOS DE LOCOS
      </h3>
      <div className="flex flex-col gap-16">
        {list.map((el, index) => (
          <Card1 key={index} title={el.title} review={el.review} url={el.url} />
        ))}
      </div>
    </section>
  );
};

interface Props {
  list: Array<{
    url: string;
    title: string;
    review: string;
  }>;
}
export default SecondSection;
