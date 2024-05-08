import { FetchData } from "./fetchdata.interfaces";
import { ListData, Results } from "./home.interfaces";

export interface DataContextInterface {
  listData?: ListData<Results>[];
  error?: boolean;
  loading?: boolean;
  fetchData?: (data: FetchData) => Promise<void>;
}
