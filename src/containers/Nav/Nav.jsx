import React from 'react'
import "./Nav.scss"
import PhSlider from '../../components/PhSlider/PhSlider.jsx'
import AbvSlider from '../../components/AbvSlider/AbvSlider.jsx'

const Nav = ({getPhSliderValue, phValue, getAbvSliderValue, abvValue}) => {



  return (
    <div className="nav">
      <p className='nav__slider-number'>pH Level: {phValue}</p>
      <PhSlider className="nav__slider--ph" getPhSliderValue={getPhSliderValue} setPhMax="6" setPhMin="3"/>
      <p className='nav__slider-number'>ABV Level: {abvValue}%</p>
      <AbvSlider className="nav__slider--abv" getAbvSliderValue={getAbvSliderValue} setAbvMax="100" setAbvMin="0"/>
    </div>
  )
}

export default Nav