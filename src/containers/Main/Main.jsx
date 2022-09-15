import "./Main.scss";
import React, { useState, useEffect } from "react";
import BeerCard from "../../components/BeerCard/BeerCard";

const Main = ({phValue, abvValue}) => {
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

  console.log(phValue);
  console.log(abvValue);

  const filterByPh = (beerArr, phValue) => {
    return beerArr.filter((beer) => {
      if (beer.ph <= phValue ) {
        return beer
      }
    })
  }

  const filterByAbv = (beerArr, abvValue) => {
    return beerArr.filter((beer) => {
      if (beer.abv <= abvValue ) {
        return beer
      }
    })
  }

  const beersJSX = (beerArr) => {
    return filterByAbv(filterByPh(beerArr, phValue), abvValue).map((beer, index) => {
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
