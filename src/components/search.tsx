import { useRef } from "react";

export function Search() {
  const valueRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const value = valueRef.current.value;
    // por defecto buscamos las películas primero en la página 1
  }

  return (
    <search>
      <form onSubmit={handleSubmit}>
        <input ref={valueRef} />
        <button>Search</button>
      </form>
    </search>
  );
}
