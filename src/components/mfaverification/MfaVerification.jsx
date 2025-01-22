import React, { useState, useContext } from "react";
import fetchWithAuth from "../../lib/fetchService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./MfaVerification.css";

export default function MfaVerification() {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { mfaSecret } = useContext(AuthContext);

  const handleInputChange = (value, index) => {
    if (value.length > 1) return;
    const updatedCodes = [...codes];
    updatedCodes[index] = value;
    setCodes(updatedCodes);

    // Move to the next input field automatically
    if (value && index < codes.length - 1) {
      document.getElementById(`mfa-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = codes.join(""); // Combine all digits
    try {
      await fetchWithAuth("/auth/verify-mfa", {
        method: "POST",
        body: JSON.stringify({ mfaSecret, mfaCode: code }),
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid MFA code. Please try again.");
    }
  };

  return (
    <div className="mfa-verification-container">
      <div className="mfa-verification-card">
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six-digit code to your registered email address.
          Enter the code below to confirm your email address.
        </p>
        <form onSubmit={handleSubmit} className="mfa-form">
          <div className="mfa-inputs">
            {codes.map((code, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                id={`mfa-input-${index}`}
                value={code}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className="mfa-input"
              />
            ))}
          </div>
          <button type="submit" className="verify-button">
            Verify
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
