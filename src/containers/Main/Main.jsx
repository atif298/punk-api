import "./Main.scss";
import React, { useState, useEffect } from 'react'

const Main = () => {

    const [beers, setBeers] = useState([]);

    const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    };

    useEffect(() => {getBeers()},[])

    console.log(beers)


  return (
    <></>
  )
}

export default Main