import "./StatusBar16Pro.css";

export const StatusBar16Pro = ({ className, ...props }) => {
  return (
    <div className={"status-bar-16-pro " + className}>
      <img className="battery" src="battery0.svg" />
      <img className="wifi" src="wifi0.svg" />
      <img className="cellular-connection" src="cellular-connection0.svg" />
      <div className="time">13:13 </div>
    </div>
  );
};
