import "./AbvSlider.scss";

const AbvSlider = ({getAbvSliderValue, setAbvMax, setAbvMin}) => {
  return (
    <input type="range" className='slider' min={setAbvMin} max={setAbvMax} onClick={getAbvSliderValue}/>
    )
}

export default AbvSlider