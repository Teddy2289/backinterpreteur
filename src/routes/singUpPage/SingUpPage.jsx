import React from "react";
import "./singUpPage.css";
import { SignUp } from "@clerk/clerk-react";

export default function SingUpPage() {
  return (
    <div className="singuppage">
      <div class="signup-container">
        <h2>Sign in to Chat AI</h2>
        <p>Welcome back! Please sign in to continue</p>
        <div class="social-buttons">
          <button class="social-btn google">Google</button>
          <button class="social-btn microsoft">Microsoft</button>
        </div>
        <div class="divider">
          <span>or</span>
        </div>
        <form class="login-form">
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="admin@example.com" />
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="********" />
          <button type="submit" class="continue-btn">
            Continue
          </button>
        </form>
        <div class="signup-link">
          <p>
            Have an account? <a href="/sign-in">Sign in</a>
          </p>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  );
}
