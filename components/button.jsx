import { ChevronUpIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import ExternalButton from "./ExternalButton";
import InternalButton from "./InternalButton";

function Button({
  size,
  value,
  bgColor,
  textColor,
  children,
  href = "/",
  external,
}) {
  return (
    <div>
      {external ? (
        <ExternalButton href={href} children={children} />
      ) : (
        <InternalButton href={href} children={children} />
      )}
    </div>
  );
}

export default Button;