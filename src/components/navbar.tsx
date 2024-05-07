import { Link } from "react-router-dom";
import { Search } from "./search";

export function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
          <li>
            <Link to="/series">series</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
}
