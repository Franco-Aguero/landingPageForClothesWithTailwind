const Card1 = (props: Props) => {
  const { url, title, review } = props;
  return (
    <article className="mx-auto flex">
      <div className="bg-gradient-to-b from-purple-900 to-indigo-900 p-10">
        <img className="w-32" src={url} alt={title.replaceAll(" ", "-")} />
      </div>
      <div className="bg-gradient-to-br from-black to-[#120e33] px-10 pb-4 pt-5">
        <h4 className="text-2xl">{title}</h4>
        <p className="my-3 max-w-[470px] text-base">{review}</p>
        <button className="bg-gradient-to-br from-purple-900 to-indigo-900 px-6 py-2 text-base font-semibold uppercase">
          Hola
        </button>
      </div>
    </article>
  );
};

interface Props {
  url: string;
  title: string;
  review: string;
}
export default Card1;
