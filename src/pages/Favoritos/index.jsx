import { useState } from "react";
import "./favoritos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@topfilmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((f) => {
      return f.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@topfilmes", JSON.stringify(filtroFilmes));
    toast.success("Filme excluído da lista de favoritos");
  }

  return (
    <div className="filmes-favoritos">
      <h1>Meus filmes favoritos</h1>

      {filmes.length === 0 && <span>Você não poussui filmes salvos!</span>}

      <ul>
        {filmes.map((f) => {
          return (
            <li key={f.id}>
              <span>{f.title}</span>
              <div>
                <Link to={`/filme/${f.id}`}>Mais informação</Link>
                <button
                  onClick={() => excluirFilme(f.id)}
                  className="btn btn-sm text-danger"
                >
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favoritos;
