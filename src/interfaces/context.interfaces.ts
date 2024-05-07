import { FetchData } from "./fetchdata.interfaces";
import { ListData, Results } from "./home.interfaces";

export interface DataContextInterface {
  listData: ListData<Results>[] | undefined;
  error: boolean;
  loading: boolean;
  fetchData: (data: FetchData) => Promise<void>;
}
