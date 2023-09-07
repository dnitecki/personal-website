import React, { useEffect, useState } from "react";
import "./BottomNav.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  const [hide, setHide] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setHide(false);
      } else {
        setTimeout(() => {
          setHide(true);
        }, 500);
        // if scroll up show the navbar
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <div className={`bottomNav-container ${hide ? "nav-hidden" : "nav-show"}`}>
      <ul className="bottomNav-links">
        <li className="nav-button">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li className="nav-button">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faFolder} />
          </Link>
        </li>
        <li className="nav-button">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faBusinessTime} />
          </Link>
        </li>
        <li className="nav-button">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
