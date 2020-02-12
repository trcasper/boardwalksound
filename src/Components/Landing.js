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
            <a href="#InsideScroll">Inside</a>
          </div>
          <div id="ContactLink">
            <a href="#ContactScroll">Contact</a>
          </div>
          <div id="EventsLink">
            <a href="https://www.facebook.com/pg/boardwalksound/events/?ref=page_internal"
            target="_blank">Events</a>
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
        <div id="About">
          {/* <div className="AboutTitle">About</div> */}
          <div className="AboutContent">
            <div className="AboutHeadlineOne">
              Great Sound, Great Staff,
              <br />
              Book Your Event!
            </div>

            <div className="AboutInfo">
              Our Professionally designed live recording studio was created by Logan Casper and
              Braxton Bitsoi. It was constructed in 2020 to bring a state of the
              art sound to the local music scene. With the gear and flexibility
              to accommodate all types of artists, it is built to fit your needs. With a central location in Utah valley, our
              staff is friendly and happy to help bring your vision to life.
            </div>
          </div>
        </div>
        <div id="InsideScroll"></div>
        <div className="Inside">
          <div className="InsideHeadline">Take a look Inside.</div>
        </div>
        <div id="ContactScroll"></div>
        <div className="Contact">
          <div className="ContactHeadline">Contact Us Now!</div>
          <div className="ContactContent">Feel free to contact us through email or message us on Facebook for booking or any questions.<br/><br/>
          theboardwalksound@gmail.com
          <div className="FbHome">
              <a
                href="https://www.facebook.com/boardwalksound/"
                target="_blank"
              > 
                  <br/>
                  https://www.facebook.com/boardwalksound/
              </a>
            </div>
          </div>
        </div>
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
