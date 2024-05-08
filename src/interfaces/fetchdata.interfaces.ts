export interface FetchData {
  query: string;
  adult: boolean;
  year: number;
  page: number;
  type: "movie" | "tv";
}
