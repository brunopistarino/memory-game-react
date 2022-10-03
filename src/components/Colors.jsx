import { Link } from "react-router-dom";

const Colors = () => {
  const colors = [
    {
      name: "Green",
      color: "#acd6b8",
    },
    {
      name: "Red",
      color: "#f2a296",
    },
    {
      name: "Violet",
      color: "#cdb6db",
    },
    {
      name: "Yellow",
      color: "#fecb66",
    },
    {
      name: "Orange",
      color: "#f7a374",
    },
  ];

  const handleColor = (color) => {
    document.documentElement.style.setProperty("--main-color", color);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", color);

    localStorage.setItem("color", color);
  };

  return (
    <>
      {colors.map((color) => (
        <div
          className="color clk-btn"
          key={color.name}
          onClick={() => handleColor(color.color)}
        >
          <div className="color-text">
            <p className="title">{color.name}</p>
          </div>
          <div
            className="color-demostration"
            style={{ backgroundColor: color.color }}
          />
        </div>
      ))}

      <Link className="difficulty clk-btn" to="/">
        <p className="title">Close</p>
      </Link>
    </>
  );
};

export default Colors;
