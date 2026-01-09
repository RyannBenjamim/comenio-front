import { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import type { JwtPayload } from '../types/auth'

type AuthUser = {
  id: string
  instituicaoId: string
  role: string
}

type AuthContextType = {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user_access_data')
    if (!stored) return

    try {
      const parsed = JSON.parse(stored)
      if (!parsed.token) return

      const decoded = jwtDecode<JwtPayload>(parsed.token)
      setToken(parsed.token)
      setUser({
        id: decoded.id,
        instituicaoId: decoded.instituicaoId,
        role: decoded.role,
      })
    } catch (error) {
      console.error('Erro ao ler token', error)
      logout()
    }
  }, [])

  function login(token: string) {
    try {
      localStorage.setItem('user_access_data', JSON.stringify({ token }))
      const decoded = jwtDecode<JwtPayload>(token)
      setToken(token)
      setUser({
        id: decoded.id,
        instituicaoId: decoded.instituicaoId,
        role: decoded.role,
      })
    } catch (error) {
      console.error('Erro ao fazer login', error)
    }
  }

  function logout() {
    localStorage.removeItem('user_access_data')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
