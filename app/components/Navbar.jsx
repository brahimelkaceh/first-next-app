import Link from "next/link";
import React from "react";
import "../globals.css";
const Navbar = () => {
  return (
    <nav>
      <h1>LOGO IPSUM</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
