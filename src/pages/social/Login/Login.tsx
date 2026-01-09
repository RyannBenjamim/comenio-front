import styles from "./styles.module.css"
import Button from "../../../components/Button/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signin } from "../../../api/auth.service"
import Message from "../../../components/Message/Message"
import { useAuth } from "../../../hooks/useAuth"

type MessageType = "success" | "error" | "neutral" | "";

interface MessageProps {
  text?: string;
  text_color?: string;
  type?: MessageType;
  marginTop?: string;
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formMessage, setFormMessage] = useState<MessageProps>({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signin(email, password);
      login(response.access_token);
      navigate('/');
    } catch (error: any) {
      setFormMessage({ 
        type: "error", 
        text: error.response?.data?.error || error.message || "Erro desconhecido"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <img src="/images/logo-login.svg" alt="logo" />

      <div className={styles.form_container}>
        <p>Acesse sua conta e aproveite nossos serviços</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Seu email" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Sua senha" 
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Message 
            text={formMessage ? formMessage.text : ""} 
            type={formMessage ? formMessage.type : ""} 
          />

          <Button 
            text_size="20px" 
            text_color="#E0E0E0" 
            padding_sz="12px 20px" 
            bg_color="#0D0F14"
            isLoading={isLoading}
          >Entrar</Button>
        </form>
      </div>

      <p className={styles.credits}>&copy; 2025 Comenio from Ryan Benjamim</p>
    </div>
  )
}

export default Login
