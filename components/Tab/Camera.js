import { useEffect, useRef, useState } from "react";

import { ColorExtractor } from "react-color-extractor";
import { FiArrowDown } from "react-icons/fi";
import Swatch from "../Camera/ColorSwatch";

const TabCamera = () => {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const cameraRef = useRef(null);

  return (
    <>
      <div className="screen gap-10">
        <input
          id="in_gallery"
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setColors([]);
          }}
        />
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
          <>
            <label htmlFor={"in_gallery"}>
              <div className="w-64 h-64 border-2 flex flex-col justify-center items-center self-center rounded-btn">
                <FiArrowDown className="text-2xl animate-bounce" />
                <p className="text-sm">Click on the button to get started</p>
              </div>
              <div className="btn btn-primary">
                Get Image via Camera or Files
              </div>
            </label>
          </>
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
            image &&
            colors.map((color, index) => <Swatch key={index} color={color} />)}
        </div>
      </div>
    </>
  );
};

export default TabCamera;
