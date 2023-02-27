import React, { useContext } from 'react';
import { Context } from '../App';
import {
  CssIcon,
  HtmlIcon,
  FigmaIcon,
  JsIcon,
  ArrowIcon,
} from '../components/iconssvg/icons';
import styled from 'styled-components';
import audioGif from '../images/audiofile-3-d.gif';

import Planetarium from '../images/planetarium.gif';
import { ProjectContainerDemo } from '../components/projectsElement/projectContainer';
import profileimg from '../images/image.png';
import {
  CostumeH1,
  CostumeParaghraph,
} from '../components/typography/typegraphs';
import { Link } from 'react-router-dom';
import { Button } from '../components/footer/footer';
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
  const { langData } = useContext(Context);
  return (
    <section className='home'>
      <div className='homeBanner'>
        <img src={profileimg} className='profile_img' alt='profile  of user' />

        <div className='intro-text'>
          <h2 className='title'>
            {langData.introText[0].text}{' '}
            <span>{langData.introText[1].text}</span>
          </h2>
          <div>
            <div className='icons'>
              <HtmlIcon />
              <CssIcon />
              <JsIcon />
              <FigmaIcon />
            </div>
            <ArrowIcon />
          </div>
        </div>
      </div>

      <section id='about'>
        <CostumeH1 text={langData.sectionTitle[0].text} />
        <CostumeParaghraph text={langData.aboutIntrotext[0].text} />
      </section>
      <section id='highlight'>
        <CostumeH1 text={langData.sectionTitle[1].text} />
        <div className='project-s-Container'>
          <ProjectContainerDemo
            gif={audioGif}
            link='https://sharp-visvesvaraya-224a23.netlify.app/'
            linkText={langData.projectText[0].text}
          />
          <ProjectContainerDemo
            gif={Planetarium}
            link='https://aleksander-kodehode.github.io/planetarium/#/home'
            linkText={langData.projectText[0].text}
          />
        </div>

        <Link to='/projects'>
          <TomatoButton>{langData.buttonText[0].text}</TomatoButton>
        </Link>
      </section>
    </section>
  );
}

export default Home;
