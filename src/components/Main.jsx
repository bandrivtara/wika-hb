import React from 'react';
import '../App.css';
import ballons from '../assets/ballons.png';
import hbText from '../assets/hb-text.png';
import star from '../assets/star.png';

function Main() {
  return (
    <div className="main">
      <div className="ballon">
        <img src={ballons} alt=""/>
      </div>
      <div className="hb-text">
        <img src={hbText} alt=""/>
      </div>
      <div className="ballon">
        <img src={ballons} alt=""/>
      </div>
      <div className="stars">
          <img src={star} alt=""/>
      </div>
    </div>
  );
}

export default Main;