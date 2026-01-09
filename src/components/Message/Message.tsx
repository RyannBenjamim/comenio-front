import styles from "./styles.module.css";

type MessageType = "success" | "error" | "neutral" | "";

interface MessageProps {
  text?: string;
  text_color?: string;
  type?: MessageType;
  marginTop?: string;
}

const Message = ({
  text,
  text_color = "#E0E0E0",
  type = "",
  marginTop = "0px",
}: MessageProps) => {
  if (!text) return null;

  const setType = (type: MessageType): string => {
    if (type === "success") return styles.success;
    if (type === "error") return styles.error;
    return styles.neutral;
  };

  return (
    <div className={setType(type)} style={{ marginTop }}>
      <p style={{ color: text_color }} className={styles.text_message}>{text}</p>
    </div>
  );
};

export default Message;
