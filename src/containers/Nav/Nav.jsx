import React from "react";
import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import PhSlider from "../../components/PhSlider/PhSlider.jsx";
import AbvSlider from "../../components/AbvSlider/AbvSlider.jsx";
import FirstBrewedSlider from "../../components/FirstBrewedSlider/FirstBrewedSlider.jsx";
import appLogo from "../../assets/images/appLogo.png"

const Nav = ({
  getFirstBrewedSliderValue,
  firstBrewedValue,
  getSearchBoxValue,
  getPhSliderValue,
  phValue,
  getAbvSliderValue,
  abvValue,
}) => {
  return (
    <div className="nav">
      <img src={appLogo} className="nav__logo" alt="Brewdog Logo" />
      <SearchBox className="nav__searchbox" getSearchBoxValue={getSearchBoxValue} />
      <p className="nav__slider-name">pH Level: 3 - {phValue}</p>
      <PhSlider
        className="nav__slider--ph"
        getPhSliderValue={getPhSliderValue}
        setPhMax="6"
        setPhMin="3"
      />
      <p className="nav__slider-name">ABV Level: 0 - {abvValue}%</p>
      <AbvSlider
        className="nav__slider--abv"
        getAbvSliderValue={getAbvSliderValue}
        setAbvMax="100"
        setAbvMin="0"
      />
      <p className="nav__slider-name">First Brewed: {firstBrewedValue}</p>
      <FirstBrewedSlider
        className="nav__slider--first-brewed"
        getFirstBrewedSliderValue={getFirstBrewedSliderValue}
        setFirstBrewedMax="2015"
        setFirstBrewedMin="2007"
      />
    </div>
  );
};

export default Nav;
