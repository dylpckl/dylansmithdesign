import classNames from "classnames";

function Button({ size, value, bgColor, textColor, children }) {
  return (
    <button
      className={classNames(
        `bg-${bgColor} text-${textColor} font-bold py-4 px-8 rounded flex items-center`,
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
