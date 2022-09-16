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
        <img className="card__img" src={img}/>
        <p className="card__name">{name}</p>
        {/* <p className="card__tagline">{tagline}</p> */}
        {/* <p className="card__description">{description}</p> */}
        <p className="card__details">ABV: {abv}</p>
        {/* <p className="card__ibu">IBU: {ibu}</p> */}
        <p className="card__details" >pH: {ph}</p>
        <p className="card__details">First brewed: {firstBrewed}</p>
    </div>
  );
};

export default BeerCard;
