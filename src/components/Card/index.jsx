import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ titulo, imagem, id }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
     
      <div className="card-footer text-center">
        <Link className="btn btn-primary btn-sm" to={`/filme/${id}`} > Ver detalhes</Link> 
      </div>
    </div>
  );
}

export default Card;
