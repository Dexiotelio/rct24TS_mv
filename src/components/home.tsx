import { useEffect, useState } from "react";
import { ListData, Results } from "../interfaces/home.interfaces";
import { ErrorList } from "../interfaces/error.interfaces";
import { Section } from "./section";
import { options } from "../services/Authorization";

const urls: string[] = [
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
];

export default function Home(): JSX.Element {
  const [listData, setListData] = useState<Array<ListData<Results>>>([]);
  const [error, setError] = useState<ErrorList | boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(error);

  useEffect(() => {
    setLoading(true);
    const requests: Promise<Response>[] = urls.map((url) =>
      fetch(url, options)
    );

    Promise.all(requests)
      .then((res) =>
        Promise.all(
          res.map((res) => {
            if (!res.ok) throw new Error("Error en la petición.");
            return res.json();
          })
        )
      )
      .then((json) => setListData(json))
      .catch((err: ErrorList) => setError({ ...err, error: true }))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="sections">
          <Section list={listData[0]?.results} name={"Popular"} />
          <Section list={listData[1]?.results} name={"Top Rated"} />
          <Section list={listData[2]?.results} name={"Upcoming"} />
        </div>
      )}
    </main>
  );
}
