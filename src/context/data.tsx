import { FC, ReactNode, createContext, useState } from "react";
import { getMovies, getTv } from "../services/fetchdata";
import { FetchData } from "../interfaces/fetchdata.interfaces";
import { DataContextInterface } from "../interfaces/context.interfaces";
import { ListData, Results } from "../interfaces/home.interfaces";

const initialValues = {
  listData: [],
  error: false,
  loading: false,
};

export const DataContext = createContext<DataContextInterface>(initialValues);

function GetData() {
  const [listData, setListData] = useState<Array<ListData<Results>>>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (data: FetchData): Promise<void> => {
    try {
      setLoading(true);
      switch (data.type) {
        case "tv":
          {
            const result = await getTv<ListData<Results>[]>(data);
            if (result) setListData(result);
          }
          break;
        case "movie":
          {
            const result = await getMovies<ListData<Results>[]>(data);
            if (result) setListData(result);
          }
          break;
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { listData, error, loading, fetchData };
}

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { listData, error, loading, fetchData } = GetData();

  return (
    <DataContext.Provider value={{ listData, error, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
