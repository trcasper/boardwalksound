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
        <div className="Intro">
          <div className="Title">
            <div className="MusicLogoBox">
              <img src={MusicLogo} className="MusicLogo" alt="MusicLogoAlt" />
            </div>
            Boardwalk
            <br />
            Sound
          </div>
          <div className="LinksContainer">
            <div id="HomeLink">Home</div>
            <div id="AboutLink">About</div>
            <div id="InsideLink">Inside</div>
            <div id="ContactLink">Contact</div>
            <div id="EventsLink">Events</div>
          </div>
          <div className="IntroPicContainer">
            <img
              className="BoardwalkOne"
              src={BoardwalkOne}
              alt="BoardwalkOneAlt"
            />
          </div>
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
