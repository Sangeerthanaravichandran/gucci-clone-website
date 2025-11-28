import React, { useState } from "react";
import "./Contact.css";

export default function ContactDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <div className="contact-bar" onClick={() => setOpen(true)}>
        <span className="contact-icon">+</span>
        <span className="contact-title">Contact Us</span>
      </div>

      {/* BACKDROP (BLUR BACKGROUND) */}
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}

      {/* RIGHT SIDE PANEL */}
      <div className={`side-panel ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <h2>CONTACT US</h2><br/>

        <div className="contact-block">
          <h4> Call Us +1 (877) 482-2430</h4>
          <p>Monday - Saturday from 10 AM to 10 PM (EST).</p>
          <p>Sunday from 10 AM to 9 PM (EST).</p>
        </div>

        <div className="contact-block">
          <h4> LIVE CHAT</h4>
          <p>Monday - Saturday from 10 AM to 10 PM (EST).</p>
          <p>Sunday from 10 AM to 9 PM (EST).</p>
        </div>

        <div className="contact-block">
          <h4> Message Us</h4>
          <p>Monday - Saturday from 10 AM to 10 PM (EST).</p>
          <p>Sunday from 10 AM to 9 PM (EST).</p>
        </div>

        <p className="footer-text">Do you need further assistance?</p>
        <a href="#" className="contact-link">Get in Contact with Us</a>
      </div>
    </>
  );
}
