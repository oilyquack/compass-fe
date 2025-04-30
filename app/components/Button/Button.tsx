import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonElementProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  type?: "submit" | "reset" | "button";
};

type ButtonProps = {
  children: ReactNode;
  destination?: "internal" | "outbound";
} & (
  | ({ href: string } & AnchorProps) // If `href` is provided, use anchor props
  | ({ href?: undefined } & ButtonElementProps)
);

export default function Button({
  children,
  destination = "internal",
  href,
  onClick,
  type,
  ...props
}: ButtonProps) {
  if (href) {
    if (destination === "outbound") {
      return (
        <a
          className={styles.Button}
          href={href}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children} &gt;
        </a>
      );
    }

    return (
      <Link
        className={styles.Button}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children} &gt;
      </Link>
    );
  }

  return (
    <button
      className={styles.Button}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={type as "submit" | "reset" | "button"}
    >
      {children} &gt;
    </button>
  );
}
