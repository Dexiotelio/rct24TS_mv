import { useData } from "../hooks/useData";
// import { Card } from "./card";

export function ShowSearch(): JSX.Element {
  const { listData, error, loading } = useData();
  console.log(listData);

  if (loading) {
    return <p>Cargando...</p>; // cambiar por un spinner
  } else if (error) {
    return <p>Oops, something has gone wrong. Please try again later.</p>;
  } else {
    return <section>{/* <Card /> */}</section>;
  }
}
