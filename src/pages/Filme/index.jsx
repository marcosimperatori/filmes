import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./filme.css";

const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "sua chave aqui",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true });
        });
    }

    loadFilme();
  }, [navigate, id]);

  function salvarFilmes() {
    const minhaLista = localStorage.getItem("@topfilmes");

    let filmesAdd = JSON.parse(minhaLista) || [];

    const hasFilme = filmesAdd.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.warn("Este filme já foi adicionado antes!");
      return;
    }

    filmesAdd.push(filme);
    localStorage.setItem("@topfilmes", JSON.stringify(filmesAdd));
    toast.success("Filme adicionado a sua lista com sucesso!", {
      theme: "colored",
    });
  }

  if (loading) {
    return (
      <div className="alert alert-warning">
        <h2>Buscando detalhes do filme...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilmes}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Filme;
