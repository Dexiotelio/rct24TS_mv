import { Results } from "../interfaces/home.interfaces";

export function Card(list: Results[]): JSX.Element {
  return (
    <>
      <ul>
        {list.map((elem) => (
          <li key={elem.id}></li>
        ))}
      </ul>
    </>
  );
}
