import type { ReactNode, ChangeEvent, KeyboardEvent } from "react";
import styles from "./styles.module.css";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  color = "#2E3238",
  icon,
  children,
}: InputProps) => {
  return (
    <div className={styles.input_card} style={{ backgroundColor: color }}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        required
      />
    </div>
  );
};

export default Input;
