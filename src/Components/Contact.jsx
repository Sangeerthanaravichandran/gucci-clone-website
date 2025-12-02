
import React from "react";
import "./Contact.css";

// ICONS
import { FaPhone, FaComments, FaEnvelope } from "react-icons/fa6";

export default function Contact({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="contact-overlay">
      <div className="contact-panel">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>CONTACT US</h2>

        <div className="item">
          <h4><FaPhone /> Call Us +1 (877) 482-2430</h4>
          <p>Mon - Sat: 10 AM to 10 PM (EST)</p>
          <p>Sunday: 10 AM to 9 PM (EST)</p>
        </div>

        <div className="item">
          <h4><FaComments /> LIVE CHAT</h4>
          <p>Mon - Sat: 10 AM to 10 PM (EST)</p>
          <p>Sunday: 10 AM to 9 PM (EST)</p>
        </div>

        <div className="item">
          <h4><FaEnvelope /> Message Us</h4>
          <p>Mon - Sat: 10 AM to 10 PM (EST)</p>
          <p>Sunday: 10 AM to 9 PM (EST)</p>
        </div>

        <h3>Do you need further assistance?</h3>
        <a className="contact-link" href="#">
          Get in Contact with Us
        </a>
      </div>
    </div>
  );
}
