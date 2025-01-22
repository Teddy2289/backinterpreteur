import React, { useContext, useState } from "react";
import "./singInPage.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SingInPage() {
  const auth = useContext(AuthContext);
  const [error, setError] = useState("");

  if (!auth) {
    throw new Error(
      "AuthContext n'est pas défini. Assurez-vous que AuthProvider entoure votre application."
    );
  }

  const { login } = auth;

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      await login(credentials); // Utilisez directement l'objet credentials ici
      navigate("/mfa-verification"); // Redirection après connexion
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="singinpage">
      <div className="login-container">
        <h2>Sign in to Chat AI</h2>
        <p>Welcome back! Please sign in to continue</p>
        <div className="social-buttons">
          <button className="social-btn google">Google</button>
          <button className="social-btn microsoft">Microsoft</button>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="********"
          />
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>
        {error && <p className="error">{error}</p>}

        <div className="signup-link">
          <p>
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </p>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
