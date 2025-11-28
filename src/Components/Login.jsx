import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">MY GUCCI ACCOUNT</h1>

      <button className="social-btn google-btn">
        <FcGoogle size={22} />
        <span>CONTINUE WITH GOOGLE</span>
      </button>

      <button className="social-btn apple-btn">
        <FaApple size={22} />
        <span>CONTINUE WITH APPLE</span>
      </button>

      <div className="or-divider">OR</div>

      <h2 className="email-title">CONTINUE WITH YOUR EMAIL ADDRESS</h2>

      <p className="email-subtitle">
        Sign in with your email and password or create a profile if you are new.
      </p>

      <input type="email" placeholder="Email*" className="email-input" />

      <button className="continue-btn" disabled>
        CONTINUE
      </button>

      <h2 className="join-title">JOIN MY GUCCI</h2>
    </div>
  );
}
