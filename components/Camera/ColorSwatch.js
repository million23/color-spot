import { useEffect, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiArrowDown } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useSpeechSynthesis } from "react-speech-kit";

const Swatch = ({ color }) => {
  const [colorData, setColorData] = useState({});
  const [collapsed, setCollapsed] = useState(true);
  const { speak, speaking } = useSpeechSynthesis();

  const fetchColorName = async () => {
    const res = await fetch(
      `https://www.thecolorapi.com/id?hex=${color.split("#")[1]}&format=json`
    );

    const data = await res.json();

    if (data) {
      setColorData(data);
      console.log(data);
    }
  };

  const sayMessage = (message) => {
    speak({ text: message });
    // if (typeof window !== "undefined") {
    //   const speech = new SpeechSynthesisUtterance();
    //   speech.text = message;

    //   speech.volume = 1;
    //   speech.rate = 1;
    //   speech.pitch = 1;
    //   window.speechSynthesis.speak(speech);
    // }
  };

  useEffect(() => {
    if (color) fetchColorName();
  }, []);

  return color ? (
    <div className="w-full gap-2 flex items-center">
      {colorData.name && (
        <>
          {/* <div
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: color }}
          />
          <p className="flex gap-4 items-center">
            <span className="font-mono">
              {colorData.name.closest_named_hex}
            </span>
            <span>{colorData.name.value}</span>
          </p> */}
          <div className="collapse w-full">
            <input
              type="checkbox"
              className="peer"
              onChange={(e) => {
                setCollapsed(!e.target.checked);
              }}
            />
            <div
              className={`collapse-title flex items-center gap-2 peer-checked:bg-[${colorData.hex.value}] peer-checked:text-[${colorData.contrast.value}]`}
            >
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span>{colorData.name.value}</span>
              <FiArrowDown
                style={{
                  transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
                }}
                className="ml-auto"
              />
            </div>
            <div
              className={`collapse-content bg-transparent text-primary-content rounded `}
            >
              <div
                style={{
                  backgroundColor: colorData.hex.value,
                  color: colorData.contrast.value,
                }}
                className="flex flex-col gap-2 p-4 rounded-btn"
              >
                <button
                  onClick={() => {
                    sayMessage(colorData.name.value);
                  }}
                  className="btn btn-primary"
                >
                  {speaking
                    ? "Playing Audio Feedback..."
                    : `Play audio: ${colorData.name.value}`}
                  {/* Play audio: {colorData.name.value} */}
                </button>

                <CopyToClipboard
                  text={colorData.hex.value}
                  onCopy={() => {
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <p className="btn btn-ghost">
                    Hex Value: {colorData.hex.value}
                  </p>
                </CopyToClipboard>
                <CopyToClipboard
                  text={colorData.rgb.value}
                  onCopy={() => {
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <p className="btn btn-ghost">
                    RGB Value: {colorData.rgb.value}
                  </p>
                </CopyToClipboard>
                <CopyToClipboard
                  text={colorData.hsl.value}
                  onCopy={() => {
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <p className="btn btn-ghost">
                    HSL Value: {colorData.hsl.value}
                  </p>
                </CopyToClipboard>
                <CopyToClipboard
                  text={colorData.hsv.value}
                  onCopy={() => {
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <p className="btn btn-ghost">
                    HSV Value: {colorData.hsv.value}
                  </p>
                </CopyToClipboard>
                <CopyToClipboard
                  text={colorData.cmyk.value}
                  onCopy={() => {
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <p className="btn btn-ghost">
                    CMYK Value: {colorData.cmyk.value}
                  </p>
                </CopyToClipboard>
              </div>
            </div>
          </div>
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
