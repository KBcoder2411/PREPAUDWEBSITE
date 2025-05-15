import "./GooglePlayTypeWhiteBg.css";

export const GooglePlayTypeWhiteBg = ({
  type = "default",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "google-play-type-white-bg " + className + " " + variantsClassName
      }
    >
      <img className="group" src="group0.svg" />
    </div>
  );
};
