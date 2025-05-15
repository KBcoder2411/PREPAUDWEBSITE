import "./IPadProLandscape.css";

export const IPadProLandscape = ({ className, ...props }) => {
  return (
    <div className={"i-pad-pro-landscape " + className}>
      <div className="shadow"></div>
      <img className="i-pad-pro-12-1" src="i-pad-pro-12-10.png" />
      <img className="screenshot" src="screenshot0.png" />
    </div>
  );
};
