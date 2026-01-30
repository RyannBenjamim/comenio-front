import styles from "./styles.module.css"

type Option = {
  value: string | number
  label: string
}

type InputSelectProps = {
  text: string
  value: string | number
  onChange?: (value: string) => void
  color?: string
  options?: Option[] | null
}

const InputSelect = ({ 
  text,
  value, 
  onChange, 
  color = "#2E3238", 
  options = [], 
}: InputSelectProps) => {
  return (
    <div className={styles.input_card} style={{ backgroundColor: color }}>
      <select 
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ backgroundColor: color }}
        required
      >
        <option value="" disabled>{text}</option>
        {options?.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect
