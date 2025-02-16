
import React, { createContext, useContext, useState } from "react";
import { adminSignIn } from "../Service/Admin";
import { empSignIn } from "../Service/Emp";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });


  const signIn = (type,body) => {
    console.log(type, body,"type,body")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (type === "EMP") {
          const result =  empSignIn(body)
          console.log(result,"resultresult")
          setAuth({ isAuthenticated: true, role: "user" });
          resolve({ user: { email, role: "user" } });
        } else if (type === "ADMIN") {
          const result = adminSignIn(body)
          console.log(result,"admin resultresult")
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
