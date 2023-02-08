import clsx from "clsx";
import Link from "next/link";
import { forwardRef, PropsWithChildren, ReactNode } from "react";
interface IButton {
  variant?: "primary" | "ghost" | "secondary";
  text?: string;
  children?: ReactNode;
  href?: string;
}
export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButton;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: PropsWithChildren<IButton>, ref) => {
    const { text, children, href, variant, ...rest } = props;

    const isHyperlink = href;

    const isPrimary = variant === "primary";
    const isGhost = variant === "ghost";
    //   const isSecondary = variant === "secondary";
    if (href) {
      return <Link href={href}>{text} </Link>;
    }
    return (
      <div>
        <button
          className={clsx(
            isGhost && "bg-transparent",
            isHyperlink && "bg-transparent",
            isPrimary &&
              "bg-white rounded-lg border border-solid border-gray-50",
          )}
          ref={ref}
          {...rest}
        >
          {text || children}{" "}
        </button>
      </div>
    );
  },
);

Button.displayName = "Button";
