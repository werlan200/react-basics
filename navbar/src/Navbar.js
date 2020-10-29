import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const link = useRef(null);

  useEffect(() => {
    const linksHeight = link.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className="nav-header">
      <div className="header">
        <img src={logo} alt="zaxd" />
        <button type="button" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      <div className="link-div" ref={linksContainerRef}>
        <ul className="links" ref={link}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="socials-div">
        <ul className="socials">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
