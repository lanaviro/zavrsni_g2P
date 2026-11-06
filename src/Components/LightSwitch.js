import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitchOn from "../slike/lightswitch-on.png";
import LightSwitchOff from "../slike/lightswitch.png";

export default function LightSwitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="LightSwitch">
      <img
        src={darkMode ? LightSwitchOff : LightSwitchOn}
        alt="Lightswitch on"
        onClick={handleClick}
      />
    </div>
  );
}
