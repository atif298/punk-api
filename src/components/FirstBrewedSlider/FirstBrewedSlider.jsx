import "./FirstBrewedSlider.scss";

const FirstBrewedSlider = ({getFirstBrewedSliderValue, setFirstBrewedMax, setFirstBrewedMin}) => {
  return (
    <input type="range" className='slider' min={setFirstBrewedMin} max={setFirstBrewedMax} onChange={getFirstBrewedSliderValue}/>
    )
}

export default FirstBrewedSlider