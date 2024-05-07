import { FetchData } from "../interfaces/fetchdata.interfaces";
import { options } from "./Authorization";

export async function getTv<T>(data: FetchData): Promise<T | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${
        data.query
      }&include_adult=${(data.adult =
        false)}&language=en-US&page=${(data.page = 1)}&year=${(data.year = 0)}`,
      options
    );
    if (!response.ok) throw new Error("Request error");
    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export async function getMovies<T>(data: FetchData): Promise<T | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${
        data.query
      }&include_adult=${(data.adult =
        false)}&language=en-US&primary_release_year=${
        data.year
      }&page=${(data.page = 1)}`,
      options
    );
    if (!response.ok) throw new Error("Request error");
    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
