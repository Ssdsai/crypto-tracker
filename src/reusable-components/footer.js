  'use client'; // Mark the file as a client component

  import React from "react";
  import "@/styles/footer.css";

  const Footer = () => {
      return (
        <footer className="footer-section">
          <div className="footer">
            <p>&copy; 2025 Crypto Price Tracker. All rights reserved.</p>
            <p>Built with Next.js and CSS!</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;
    