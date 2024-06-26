import React, { useEffect } from "react";
import "./Background.scss";

export default function Background() {
  useEffect(() => {
    createStars(75);
  });

  const createStars = (stars: number) => {
    for (let i = 0; i < stars; i++) {
      drawStar();
    }
  };

  const drawStar = () => {
    const tmpStar = document.createElement("figure");
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    document.getElementById("stars").appendChild(tmpStar);
  };

  return (
    <>
      <div className="stars-container">
        <div className="shooting-stars">
          <span />
        </div>
        <div className="stars" id="stars" />
      </div>
    </>
  );
}
