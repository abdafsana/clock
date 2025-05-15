import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Saat</Link> |{" "}
      <Link to="/timer">Taymer</Link> |{" "}
      <Link to="/stopwatch">Saniyəölçən</Link>
    </nav>
  );
}
