import { useEffect, useState } from "react";

import { ColorExtractor } from "react-color-extractor";
import Swatch from "../Camera/ColorSwatch";

const TabCamera = () => {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);

  return (
    <>
      <div className="flex flex-col justify-end py-28 gap-10">
        <input
          id="captureimage"
          type="file"
          capture="environment"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setColors([]);
          }}
        />

        {/* <img
          src={image ? URL.createObjectURL(image) : null}
          className="w-64 h-64 self-center "
        /> */}
        {image && (
          <ColorExtractor
            getColors={(colors) => {
              setColors(colors ?? []);
            }}
          >
            <img
              src={image ? URL.createObjectURL(image) : null}
              className="w-64 h-64 self-center object-cover"
            />
          </ColorExtractor>
        )}

        {!image && colors && (
          <label htmlFor={"captureimage"} className="btn btn-primary">
            capture image
          </label>
        )}
        {image && colors && (
          <label
            onClick={() => {
              setImage(null);
              setColors([]);
            }}
            className="btn btn-primary"
          >
            reset image
          </label>
        )}

        <div className="flex flex-col gap-2">
          {colors.length > 0 &&
            colors.map((color, index) => <Swatch key={index} color={color} />)}
        </div>
      </div>
    </>
  );
};

export default TabCamera;
