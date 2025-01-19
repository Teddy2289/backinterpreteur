import React from "react";
import "./singInPage.css";
import { SignIn } from "@clerk/clerk-react";

export default function SingInPage() {
  return (
    <div className="singinpage">
      <div class="login-container">
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
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </p>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  );
}
