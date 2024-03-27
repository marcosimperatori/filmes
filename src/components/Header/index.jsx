import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-3">
      <Link className="logo" to="/">
        Top filmes
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus filmes
      </Link>
    </header>
  );
};

export default Header;
