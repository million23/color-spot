import { useEffect, useState } from "react";

const Swatch = ({ color }) => {
  const [colorData, setColorData] = useState({});

  const fetchColorName = async () => {
    const res = await fetch(
      `https://www.thecolorapi.com/id?hex=${color.split("#")[1]}&format=json`
    );

    const data = await res.json();

    if (data) {
      setColorData(data);
    }
  };

  useEffect(() => {
    if (color) fetchColorName();
  }, []);

  return color ? (
    <div className="w-full gap-2 flex items-center">
      {colorData.name && (
        <>
          <div
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: color }}
          />
          <p className="flex gap-4 items-center">
            <span className="font-mono">
              {colorData.name.closest_named_hex}
            </span>
            <span>{colorData.name.value}</span>
          </p>
        </>
      )}
    </div>
  ) : (
    <div className="w-full gap-2 flex items-center">
      <div className="w-10 h-10 rounded-full bg-base-300" />
      <p className="flex gap-4 items-center">
        <span className="font-mono">loading...</span>
      </p>
    </div>
  );
};

export default Swatch;
