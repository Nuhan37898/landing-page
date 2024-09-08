import React from 'react';

const Card = ({ title, text, imgSrc, buttonLink }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">Let's Go</a>
      </div>
    </div>
  );
};

export default Card;
