import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import api from "../../services/api";

import Card from "../../components/Card";

import "./home.css";

const Home = () => {
  const [filme, setFilmes] = useState([]);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "sua chave aqui",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response.data.results);
      setFilmes(response.data.results);
      setLoad(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {filme.map((filme) => {
          return (
            <div className="col" key={filme.id}>
              <Card
                titulo={filme.title}
                imagem={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                descricao={filme.overview}
                id={filme.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
