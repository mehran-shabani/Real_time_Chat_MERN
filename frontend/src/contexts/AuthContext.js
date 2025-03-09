import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}token/`, { email, password });
    localStorage.setItem("token", res.data.access);
    setCurrentUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
