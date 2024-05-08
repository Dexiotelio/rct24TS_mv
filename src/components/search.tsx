import { useRef } from "react";
import { useData } from "../hooks/useData";
import { useNavigate } from "react-router-dom";

export function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fetchData } = useData();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const query = inputRef.current?.value;
    console.log(query);
    // por defecto buscamos las películas en la página 1
    if (fetchData && query) {
      fetchData({
        query: query,
        adult: false,
        year: 2010,
        page: 1,
        type: "tv",
      });
      navigate("/results");
      inputRef.current.value = "";
    }
  }

  return (
    <search>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button>Search</button>
      </form>
    </search>
  );
}
