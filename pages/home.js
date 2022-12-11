import { FiCamera, FiSettings } from "react-icons/fi";

import TabCamera from "../components/Tab/Camera";
import TabSettings from "../components/Tab/Settings";
import { useState } from "react";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("tab_camera");

  return (
    <main className="flex flex-col justify-between p-5 min-h-screen gap-2">
      {activeTab === "tab_camera" && <TabCamera />}
      {activeTab === "tab_settings" && <TabSettings />}
      <div className="btm-nav max-w-lg mx-auto">
        <button
          onClick={() => setActiveTab("tab_camera")}
          className={activeTab === "tab_camera" && "active"}
        >
          <FiCamera />
        </button>
        <button
          onClick={() => setActiveTab("tab_settings")}
          className={activeTab === "tab_settings" && "active"}
        >
          <FiSettings />
        </button>
      </div>
    </main>
  );
};

export default HomeScreen;
