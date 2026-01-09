import type { ReactNode, MouseEventHandler } from "react";
import styles from "./styles.module.css";
import Loading from "../Loading/Loading";

interface ButtonProps {
  children: ReactNode;
  text_color?: string;
  text_size?: string;
  bg_color?: string;
  padding_sz?: string;
  radius?: string;
  width_size?: string;
  height_size?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  children,
  text_color = "#E0E0E0",
  text_size = "16px",
  bg_color = "#000",
  padding_sz = "40px",
  radius = "6px",
  width_size = "100%",
  height_size,
  onClick,
  isLoading = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      type="submit"
      onClick={onClick}
      style={{
        backgroundColor: bg_color,
        color: text_color,
        fontSize: text_size,
        padding: padding_sz,
        borderRadius: radius,
        width: width_size,
        height: height_size,
      }}
    >
      {isLoading ? <Loading size="20px" /> : children}
    </button>
  );
};

export default Button;
