import "./Main.scss";
import React, { useState, useEffect } from "react";
import BeerCard from "../../components/BeerCard/BeerCard";

const Main = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const beersJSX = (array) => {
    return array.map((beer, index) => {
        return (
            <div key={index}>
              <BeerCard
                name={beer.name}
                tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
                description={beer.description}
                img={beer.image_url}
                abv={beer.abv}
                ibu={beer.ibu}
                ph={beer.ph}
              />
            </div>)
    })
  };

  return (
    <div className="main">
        <div className="main__beers">
            {beersJSX(beers)}
        </div>
    </div>
  );
};

export default Main;
