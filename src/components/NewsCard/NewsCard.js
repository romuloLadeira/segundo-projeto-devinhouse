import React from 'react';

 export const NewsCard = ({title, description,url, thumbnail}) => {
  return <div>
     <img src={thumbnail} alt={title}/>
     <section>
     <h3>{title}</h3>
     <p>{description}</p>
    <a href={url} target="_blank"><button>Ver no site</button></a>
    </section>       
  </div>;
};

