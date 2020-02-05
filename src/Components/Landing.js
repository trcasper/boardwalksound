import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import MusicLogo from "../img/MusicLogo.jpg";
import BoardwalkOne from "../img/BoardwalkOne.jpg";

class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Landing">
        <div id="Intro">
          <div className="Title">
            <div className="MusicLogoBox">
              <img src={MusicLogo} className="MusicLogo" alt="MusicLogoAlt" />
            </div>
            <div className="TitleText">
              Boardwalk
              <br />
              Sound
            </div>
          </div>
          </div>
          <div className="Nav">
            <div className="HomeLink">
              <a href="#Intro">Home</a>
            </div>
            <div id="AboutLink">
              <a href="#About">About</a>
            </div>
            <div id="InsideLink">
            <a href="#Inside">Inside</a>
            </div>
            <div id="ContactLink">
            <a href="#Contact">Contact</a>
            </div>
            <div id="EventsLink">
            <a href="#Events">Events</a>
            </div>
          </div>

          <div className="IntroPicContainer">
            <img
              className="BoardwalkOne"
              src={BoardwalkOne}
              alt="BoardwalkOneAlt"
            />
          {/* </div> */}
        </div>
        <div id="About"></div>
      </div>
    );
  }
}

export default Landing;

{
  /* <Link to='/events'>
<div className="EventsLink">Events</div>
// </Link> */
}
