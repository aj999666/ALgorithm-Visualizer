import React from 'react';
import "./PathBanner.css";

import start from "../../Assets/start.svg";
import destination from "../../Assets/end.svg";

const Pathbanner = () => {
  return (
    <div className="banner">
      <div className="banner-item">
        <img className="banner-icon" src={start} alt="icon" />
        <p className="banner-name">Start Node</p>
      </div>
      <div className="banner-item">
        <img className="banner-icon" src={destination} alt="icon" />
        <p className="banner-name">Destination Node</p>
      </div>
      <div className="banner-item">
        <div className="banner-icon obstacle" />
        <p className="banner-name">Obstacle</p>
      </div>
      <div className="banner-item">
        <div className="banner-icon path" />
        <p className="banner-name">Route</p>
      </div>
    </div>
  );
}

export default Pathbanner;
