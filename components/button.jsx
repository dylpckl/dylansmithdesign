import classNames from "classnames";

function Button({ size, value, bgColor, textColor, children }) {
  return (
    <button
      className={classNames(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
        {
          "text-xs": size === "sm",
          "text-xl": size === "lg",
        }
      )}
    >
      {children}
    </button>
  )
};

export default Button;
