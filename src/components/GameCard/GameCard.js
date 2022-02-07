import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({thumbnail, title, platform, description, id}) => {
  return (
  <div>
       <img src={thumbnail} alt={title}/>
       <h3>{title}</h3>
        <h4>{platform}</h4>
        <span>
        <p>{description}</p>
        </span>
        
        <Link to={`/game/${id}`}>
            <button>Saiba mais</button>
        </Link>
  </div>
  );
};


