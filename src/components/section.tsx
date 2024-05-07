import { Results } from "../interfaces/home.interfaces";
// list: ListData[]
export const Section = ({
  list,
  name,
}: {
  list: Results[] | undefined;
  name: string;
}): JSX.Element | undefined => {
  if (!list) return;

  return (
    <section>
      <h1>{name}</h1>
      <ul className="list">
        {list.map((elem) => (
          <li key={elem.id}>
            <h5>{elem.title}</h5>
            <img
              src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`}
              alt={elem.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
