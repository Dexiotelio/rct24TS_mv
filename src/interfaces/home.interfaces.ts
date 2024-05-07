export interface ListData<T> {
  page?: string;
  results?: T[];
  total_pages?: number;
  total_results?: number;
}

export interface Results {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
