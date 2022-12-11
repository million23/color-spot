import { useEffect, useState } from "react";

const TabSettings = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "lofi");
    }
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-5">Settings</h1>

        <div className="flex justify-between items-center">
          <label htmlFor="theme">Theme</label>
          <select
            onChange={(e) => {
              setTheme(e.target.value);
              document.documentElement.setAttribute(
                "data-theme",
                e.target.value
              );
            }}
            value={theme}
            name="theme"
            id="theme"
            className="select select-primary"
          >
            <option value="lofi">Lofi</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <h1 className="text-3xl font-bold mt-10 mb-5">How to use</h1>
        <ul className="flex flex-col gap-2">
          <li>
            1. Click the button at the middle of the screen to take a picture or
            pick an image from your gallery
          </li>
          <li>2. Wait for the image to be processed</li>
          <li>3. Click on the color swatches to copy the color code</li>
        </ul>

        <h1 className="text-3xl font-bold mt-10 mb-5">About Us</h1>
        <p className="text-sm">
          This project is made by the students of the University of Caloocan
          City in fulfillment of the requirements of the course of Intelligent
          Systems
        </p>
        <p className="text-sm font-bold mt-5">
          Students involved in this project
        </p>
        <div className="flex flex-col mt-1">
          <p className="flex justify-between items-center">
            <span>Gabrielle Napoto</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Gerald Chavez</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Edriane Barcita</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>John Philip Bulaclac</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Kevin Corpin</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Carlo Diaz</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Mikkie Gregorio</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>John Lloyd Igharas</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Trizhalyn Maglangit</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Novie Dame Marbas</span>
            <span>BSCS 4C</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Efhraim Jay Riate</span>
            <span>BSCS 4A</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Jaymar Walohan</span>
            <span>BSCS 4A</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TabSettings;
