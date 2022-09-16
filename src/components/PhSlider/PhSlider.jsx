import "./PhSlider.scss";

const PhSlider = ({getPhSliderValue, setPhMax, setPhMin}) => {
  return (
    <input type="range" className='slider' min={setPhMin} max={setPhMax} onChange={getPhSliderValue}/>
    )
}

export default PhSlider