
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });


  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@gmail.com" && password === "123456") {
          setAuth({ isAuthenticated: true, role: "user" });
          resolve({ user: { email, role: "user" } });
        } else if (email === "admin@gmail.com" && password === "123456") {
          setAuth({ isAuthenticated: true, role: "admin" });
          resolve({ user: { email, role: "admin" } });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000); 
    });
  };

  const logout = () => setAuth({ isAuthenticated: false, role: null });

  return (
    <AuthContext.Provider value={{ auth, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
