import { useEffect } from "react";

const Slider = ({ min, max, value, type, onChange }) => {
  //   const mySlider = document.getElementById("my-slider");
  //   const sliderValue = document.getElementById("slider-value");

  //   useEffect(() => {
  //   const valPercent = (mySlider.value / mySlider.max) * 100;
  //   mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  //   sliderValue.textContent = mySlider.value;
  //   }, [mySlider.value]);

  useEffect(() => {
    const valPercent = (value / max) * 100;
    console.log("valPercent", valPercent);
    // const mySlider = document.getElementById("my-slider");
    // const sliderValue = document.getElementById("slider-value");
    // const valPercent = (mySlider.value / mySlider.max) * 100;
    // mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    // sliderValue.textContent = mySlider.value;
  }, [value]);

  return (
    <fieldset className="slider-container">
      <p>
        Number of {type} {value}
      </p>
      <input
        type="range"
        onChange={(e) => onChange(e)}
        value={value}
        min={min}
        max={max}
        name=""
        id=""
      />
    </fieldset>
  );
};
export default Slider;
