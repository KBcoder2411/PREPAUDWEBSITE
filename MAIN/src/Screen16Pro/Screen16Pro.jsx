import "./Screen16Pro.css";
import { HomeIndicator } from "../HomeIndicator/HomeIndicator.jsx";
import { StatusBar16Pro } from "../StatusBar16Pro/StatusBar16Pro.jsx";

export const Screen16Pro = ({ className, ...props }) => {
  return (
    <div
      className={"screen-16-pro " + className}
      style={{
        background: "url(screen-16-pro.png) center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomeIndicator className="home-indicator-instance"></HomeIndicator>
      <StatusBar16Pro className="status-bar-16-pro-instance"></StatusBar16Pro>
    </div>
  );
};
