import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const UserContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    if (recoverdUser) {
      setUser(JSON.parse(recoverdUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await createSession(username, password);
    if (response !== undefined) {
      const userLog = response.data.id;

      setUser({userLog});
      navigate("/home");

      localStorage.setItem("user", JSON.stringify(userLog));
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};