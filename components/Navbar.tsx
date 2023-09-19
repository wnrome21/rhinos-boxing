import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import RBLogo from "../assets/RB Logo.webp";

const Navbar = () => {
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <a href="/">
        <Image src={RBLogo} alt="Rhinos Boxing Logo" className="px-2" />
      </a>
      <ul className="flex">
        <a href="/coaches-and-trainers">
          <li className="px-10">Coaches and Trainers</li>
        </a>
        <a href="classes">
          <li className="px-10">Classes</li>
        </a>
        <a href="schedule">
          <li className="px-10">Schedule</li>
        </a>
        <a href="/about-us">
          <li className="px-10">About Us</li>
        </a>
        <a href="contact-us">
          <li className="px-10">Contact Us</li>
        </a>
        <a href="photo-gallery">
          <li className="px-10">Photo Gallery</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
