import React from "react";
import {
  CssIcon,
  HtmlIcon,
  FigmaIcon,
  JsIcon,
  ArrowIcon,
} from "../components/iconssvg/icons";
import profileimg from "../images/profileimg.png";
function Home() {
  return (
    <section className="home">
      <div className="homeBanner">
        <img
          src={profileimg}
          className="profile_img"
          alt="profile Image of portfolio"
        />

        <div className="intro-text">
          <h2 className="title">
            Hei, velkomen til min <span>portfolio</span>!
          </h2>
          <div>
            <div className="icons">
              <HtmlIcon />
              <CssIcon />
              <JsIcon />
              <FigmaIcon />
            </div>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
