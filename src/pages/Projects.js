import React, { useContext } from 'react';
import { Context } from '../App';
import styled from 'styled-components';

import audioGif from '../images/audiofile-3-d.gif';
import blogr from '../images/blogr';
import crowdFund from '../images/crowfundgif';
import Planetarium from '../images/planetarium.gif';

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
        />
        <ProjectContainerDemo
          gif={Planetarium}
          link='https://aleksander-kodehode.github.io/planetarium/#/home'
          linkText={langData.projectText[0].text}
        />
        <ProjectContainerDemo
          gif={blogr}
          link='https://flamboyant-shirley-09ef60.netlify.app/'
          linkText={langData.projectText[0].text}
        />
        <ProjectContainerDemo
          gif={crowdFund}
          link='https://laughing-stonebraker-ba7a5c.netlify.app/'
          linkText={langData.projectText[0].text}
        />
      </div>
    </CostumeDiv>
  );
}

export default Projects;
