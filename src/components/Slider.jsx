import { useEffect, useState } from "react";

const Slider = ({ min, max, value, type, onChange }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const color = localStorage.getItem("color") || "#acd6b8";
    const valPercent = ((value - min) / (max - min)) * 100;
    setStyle({
      background: `linear-gradient(to right, ${color} ${valPercent}%, #d5d5d5 ${valPercent}%)`,
    });
  }, [value, max, min]);

  return (
    <fieldset className="slider-container">
      <p>Number of {type}</p>
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
