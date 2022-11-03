import React from "react";
import {
  CssIcon,
  HtmlIcon,
  FigmaIcon,
  JsIcon,
  ArrowIcon,
} from "../components/iconssvg/icons";
import styled from "styled-components";
import audioGif from "../images/audiofile-3-d.gif";
import blogr from "../images/blogr";
import crowdFund from "../images/crowfundgif";
import Planetarium from "../images/planetarium.gif";
import {
  ProjectContainer,
  ProjectContainerDemo,
} from "../components/projectsElement/projectContainer";
import profileimg from "../images/image.png";
import {
  CostumeH1,
  CostumeParaghraph,
} from "../components/typography/typegraphs";
import { Link } from "react-router-dom";
import { Button } from "../components/footer/footer";
const TomatoButton = styled(Button)`
  color: White;
  background-color: #fa9e15;
  border: none;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    background: #fff;
    border: 2px solid #fa9e15;
    color: #fa9e15;
  }
`;

function Home() {
  return (
    <section className="home">
      <div className="homeBanner">
        <img src={profileimg} className="profile_img" alt="profile  of user" />

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

      <section id="about">
        <CostumeH1 text="About" />
        <CostumeParaghraph text="Fokuset mitt ligger på HTML, CSS og JavaScript, spesielt når det kommer til brukergrensesnitt. Jeg liker å utvikle meg og er veldig motivert. Jeg liker å bruke mine kreative ferdigheter til å vokse i jobbene jeg gjør og å vokse som kollega. Jeg er glad i en utfording og bruker ferdighetene mine til å komme opp med nye ideer. Jeg er en person som liker å lære og kan sette meg inn i nye temaer og systemer fort." />
      </section>
      <section id="highlight">
        <CostumeH1 text="Highlighted projects" />
        <div className="project-s-Container">
          <ProjectContainerDemo
            gif={audioGif}
            link="https://sharp-visvesvaraya-224a23.netlify.app/"
          />
          <ProjectContainerDemo
            gif={Planetarium}
            link="https://aleksander-kodehode.github.io/planetarium/#/home"
          />
        </div>

        <Link to="/projects">
          <TomatoButton>More Projects</TomatoButton>
        </Link>
      </section>
    </section>
  );
}

export default Home;
