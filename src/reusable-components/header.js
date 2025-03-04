'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>
        <Link href="/">
          <Image 
            src="/images/logo.png" // Store logo in `public/images/`
            alt="Crypto Tracker Icon"
            width={30}
            height={30}
            style={{ marginRight: "10px", marginTop:"5px" }}
          />
        </Link>
        Crypto Tracker
      </h1>
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
