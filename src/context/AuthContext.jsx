// filepath: /c:/Users/HP 450/OneDrive/Bureau/Reactjs/chatgpt-clone/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import fetchWithAuth from "../lib/fetchService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mfaSecret, setMfaSecret] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchWithAuth("/auth/me")
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetchWithAuth("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Récupérer et lever l'erreur renvoyée par l'API
        const errorData = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setMfaSecret(data.mfaSecret); // Stockage du secret MFA
    } catch (error) {
      throw error; // Propager l'erreur à la fonction appelante
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setMfaSecret(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, mfaSecret }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
