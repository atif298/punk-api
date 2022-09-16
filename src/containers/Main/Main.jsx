import "./Main.scss";
import React, { useState, useEffect } from "react";
import BeerCard from "../../components/BeerCard/BeerCard";

const Main = ({searchTerm, phValue, abvValue, firstBrewedValue}) => {
  
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

  console.log(searchTerm);
  console.log(phValue);
  console.log(abvValue);

  const filterBySearch = (beerArr, searchTerm) => {
    return beerArr.filter((beer) => {
      return(beer.name.toLowerCase().includes(searchTerm))
    })
  }

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

  const filterByFirstBrewed = (beerArr, firstBrewedValue) => {
    return beerArr.filter((beer) => {
      if (beer.first_brewed.slice(-4) <= firstBrewedValue ) {
        return beer
      }
    })
  }

  const beersJSX = (beerArr) => {
    return filterByFirstBrewed(filterByAbv(filterByPh(filterBySearch(beerArr, searchTerm.toLowerCase()), phValue), abvValue), firstBrewedValue).map((beer, index) => {
        return (
            <div key={index}>
              <BeerCard
                name={beer.name}
                //tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
                //description={beer.description}
                img={beer.image_url}
                abv={beer.abv}
                //ibu={beer.ibu}
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