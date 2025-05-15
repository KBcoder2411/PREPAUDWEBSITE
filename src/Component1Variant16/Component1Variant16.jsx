import "./Component1Variant16.css";

export const Component1Variant16 = ({ variant = "1", className, ...props }) => {
  const variantsClassName = "variant-" + variant;

  return (
    <img
      className={
        "component-1-variant-16 " + className + " " + variantsClassName
      }
      src="component-1-variant-16.svg"
    />
  );
};
