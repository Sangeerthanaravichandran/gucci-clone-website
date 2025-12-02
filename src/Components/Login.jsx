import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Email validation
    const emailCheck = /\S+@\S+\.\S+/;
    if (!emailCheck.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");

    // Navigate to Landingpage.jsx
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">MY GUCCI ACCOUNT</h1>

      {/* Google Login */}
      <button className="social-btn google-btn">
        <FcGoogle size={22} />
        <span>CONTINUE WITH GOOGLE</span>
      </button>

      {/* Apple Login */}
      <button className="social-btn apple-btn">
        <FaApple size={22} />
        <span>CONTINUE WITH APPLE</span>
      </button>

      {/* OR Divider */}
      <div className="or-divider">OR</div>

      {/* Email Section */}
      <h2 className="email-title">CONTINUE WITH YOUR EMAIL ADDRESS</h2>
      <p className="email-subtitle">
        Sign in with your email and password or create a profile if you are new.
      </p>

      <input
        type="email"
        placeholder="Email*"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p className="error-text">{error}</p>}

      <button className="continue-btn" onClick={handleContinue}>
        CONTINUE
      </button>

      <Link to="/" className="join-title">
        JOIN MY GUCCI
      </Link>
    </div>
  );
}
