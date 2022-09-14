import React from "react";
import "./BeerCard.scss";

const BeerCard = (props) => {
  const { 
        name,
        tagline,
        firstBrewed,
        description,
        img,
        abv,
        ibu,
        ph 
        } = props;

  return (
    <div className="card">
        <p className="card__name">{name}</p>
        <img className="card__img" src={img}/>
        <p className="card__tagline">{tagline}</p>
        <p className="card__firstBrewed">{firstBrewed}</p>
        <p className="card__description">{description}</p>
        <p className="card__abv">{abv}</p>
        <p className="card__ibu">{ibu}</p>
        <p className="card__ph" >{ph}</p>
    </div>
  );
};

export default BeerCard;
