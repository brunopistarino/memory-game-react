import { useEffect, useState } from "react";

const Slider = ({ min, max, value, type, onChange }) => {
  const [style, setStyle] = useState({});
  //   const mySlider = document.getElementById("my-slider");
  //   const sliderValue = document.getElementById("slider-value");

  //   useEffect(() => {
  //   const valPercent = (mySlider.value / mySlider.max) * 100;
  //   mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  //   sliderValue.textContent = mySlider.value;
  //   }, [mySlider.value]);

  useEffect(() => {
    const valPercent = ((value - min) / (max - min)) * 100;
    console.log("valPercent", valPercent);
    setStyle({
      background: `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`,
    });
  }, [value, max]);

  return (
    <fieldset className="slider-container">
      <p>
        Number of {type} {value}
      </p>
      <div className="slider-input">
        <input
          style={style}
          type="range"
          onChange={(e) => onChange(e)}
          value={value}
          min={min}
          max={max}
          name=""
          id=""
        />
        <div className="slider-value">{value}</div>
      </div>
    </fieldset>
  );
};
export default Slider;
