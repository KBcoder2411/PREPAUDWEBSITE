import "./HomeIndicator.css";

export const HomeIndicator = ({ className, ...props }) => {
  return (
    <div className={"home-indicator " + className}>
      <div className="home-indicator2"></div>
    </div>
  );
};
