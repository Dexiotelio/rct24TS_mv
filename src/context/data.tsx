import { FC, ReactNode, createContext, useMemo, useState } from "react";
import { getMovies, getTv } from "../services/fetchdata";
import { FetchData } from "../interfaces/fetchdata.interfaces";
import { DataContextInterface } from "../interfaces/context.interfaces";
import { ListData, Results } from "../interfaces/home.interfaces";

export const DataContext = createContext<DataContextInterface | null>(null);

function GetData() {
  const [listData, setListData] = useState<
    Array<ListData<Results>> | undefined
  >([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (data: FetchData) => {
    try {
      setLoading(true);
      switch (data.type) {
        case "movie":
          {
            const result = await getTv<ListData<Results>[]>(data);
            setListData(result);
          }
          break;
        case "tv":
          {
            const result = await getMovies<ListData<Results>[]>(data);
            setListData(result);
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

  const values = useMemo(
    () => ({ listData, error, loading, fetchData }),
    [listData, error, loading, fetchData]
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
