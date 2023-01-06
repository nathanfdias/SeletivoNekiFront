import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const UserContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoverdUser) {
      setUser(JSON.parse(recoverdUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await createSession(username, password);
    if (response !== undefined) {
      const userLog = response.data.id;
      
      if (checked) {
        localStorage.setItem("user", JSON.stringify(userLog));
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        console.log(response.data.token);
      }
      
      setUser({ userLog });
      navigate("/home");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        checked,
        setChecked,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
