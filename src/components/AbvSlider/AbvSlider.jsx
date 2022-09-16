import "./AbvSlider.scss";

const AbvSlider = ({getAbvSliderValue, setAbvMax, setAbvMin}) => {
  return (
    <input type="range" className='slider' min={setAbvMin} max={setAbvMax} onChange={getAbvSliderValue}/>
    )
}

export default AbvSlider