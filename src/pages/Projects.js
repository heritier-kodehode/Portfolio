import React, { useContext } from 'react';
import { Context } from '../App';
import styled from 'styled-components';

import audioGif from '../images/audiofile-3-d.gif';
import blogr from '../images/blogr';
import crowdFund from '../images/crowfundgif';
import Planetarium from '../images/planetarium.gif';
import sunnyImg from '../images/sunnyside.png';
import pricingImg from '../images/pricing component.png';
import launchSoonImg from '../images/launchsoon.png';
import loopStudioImg from '../images/loopstudio.png';
import { ProjectContainerDemo } from '../components/projectsElement/projectContainer';

const CostumeDiv = styled.div`
  background-color: #b2fff5;
`;
const Title = styled.h1`
  font-size: 50px;
  color: blue;
  border-bottom: 2px solid blue;
  width: min-content;
  margin: 0.5em auto;
`;
function Projects() {
  const { langData } = useContext(Context);
  return (
    <CostumeDiv>
      <Title className='red'>{langData.sectionTitle[2].text}</Title>
      <div className='project-s-Container'>
        <ProjectContainerDemo
          gif={audioGif}
          link='https://sharp-visvesvaraya-224a23.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/ecom-audio/tree/master/audiophiles-ecom'
        />
        <ProjectContainerDemo
          gif={Planetarium}
          link='https://aleksander-kodehode.github.io/planetarium/#/home'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/aleksander-kodehode/planetarium'
        />
        <ProjectContainerDemo
          gif={blogr}
          link='https://flamboyant-shirley-09ef60.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/blogr-landing-page'
        />
        <ProjectContainerDemo
          gif={crowdFund}
          link='https://laughing-stonebraker-ba7a5c.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/crow-funding-page'
        />
        <ProjectContainerDemo
          gif={sunnyImg}
          link='https://focused-edison-7bc466.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/sunnyside-landing-page'
        />
        <ProjectContainerDemo
          gif={pricingImg}
          link='https://clever-kilby-904a68.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/pricing-component'
        />
        <ProjectContainerDemo
          gif={launchSoonImg}
          link='https://awesome-bohr-e171db.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/ping-comming-soon-page/tree/main/ping-coming-soon-page-master'
        />
        <ProjectContainerDemo
          gif={loopStudioImg}
          link='https://gifted-lumiere-af0b43.netlify.app/'
          linkText={langData.projectText[0].text}
          gitLinkText={langData.projectText[1].text}
          gitLink='https://github.com/heritio/loop-studios-landingpage'
        />
      </div>
    </CostumeDiv>
  );
}

export default Projects;
