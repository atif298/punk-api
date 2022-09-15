import "./PhSlider.scss";

const PhSlider = ({getPhSliderValue, setPhMax, setPhMin}) => {
  return (
    <input type="range" className='slider' min={setPhMin} max={setPhMax} onClick={getPhSliderValue}/>
    )
}

export default PhSlider