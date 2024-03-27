import { Link } from "react-router-dom";
import "./erro.css";

const Erro = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Voltar a página inicial</Link>
    </div>
  );
};

export default Erro;
