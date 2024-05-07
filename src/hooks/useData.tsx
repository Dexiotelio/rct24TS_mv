import { useContext } from "react";
import { DataContext } from "../context/data";

export function useData() {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useData must be used within DataContext");
  }

  return context;
}
