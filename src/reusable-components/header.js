import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import '../app/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>
        <Link href="./">
          {/* Image next to the title */}
          <Image 
            src="https://media.licdn.com/dms/image/v2/D560BAQGkqVVEme8G_g/company-logo_200_200/company-logo_200_200/0/1707162144681/blockhouse_capital_logo?e=1749081600&v=beta&t=fbDRqWTGhms5m3bk5hBR9mqpwWZAy7PcqLXjEgsSYh4" // External image URL
            alt="Crypto Tracker Icon"
            width={30} // Adjust width as per your requirement
            height={30} // Adjust height as per your requirement
            style={{ marginRight: "10px", marginTop:"5px" }} // Space between image and text
          />
          
        </Link>
        Crypto Tracker
      </h1>
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;