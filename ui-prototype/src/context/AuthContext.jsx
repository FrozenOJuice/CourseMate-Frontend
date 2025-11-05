import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fake login
  const login = (username) => {
    setUser({ username });
    navigate("/dashboard");
  };

  // Fake register
  const register = (username) => {
    setUser({ username });
    navigate("/dashboard");
  };

  // Fake logout
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
